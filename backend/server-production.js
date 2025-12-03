const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const catalog = require('./doors.json');

// Port konfigurieren (für Server-Deployment)
const PORT = process.env.PORT || 3000;

// CORS konfigurieren
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? 
    ['https://yourdomain.com', 'https://www.yourdomain.com'] : 
    ['http://localhost:5173', 'http://localhost:3000']
}));

app.use(express.json());

// Static files servieren (für Production Build)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
}

// Health Check für Server
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Validierung für Optionen
function validateConfiguration(door, options) {
  const errors = [];
  const warnings = [];

  // Prüfe kompatible Optionen
  for (const option of options) {
    if (door.compatibleOptions && !door.compatibleOptions.includes(option)) {
      errors.push(`Option '${option}' ist nicht mit ${door.name} kompatibel`);
    }
  }

  // Prüfe inkompatible Kombinationen
  if (catalog.incompatibleCombinations) {
    for (const rule of catalog.incompatibleCombinations) {
      // Material-basierte Regeln
      if (rule.material && door.material === rule.material) {
        const blockedOptions = rule.blockedOptions.filter(opt => options.includes(opt));
        if (blockedOptions.length > 0) {
          errors.push(`${rule.reason}: ${blockedOptions.join(', ')}`);
        }
      }

      // Kategorie-basierte Regeln
      if (rule.category && door.category === rule.category) {
        const blockedOptions = rule.blockedOptions.filter(opt => options.includes(opt));
        if (blockedOptions.length > 0) {
          errors.push(`${rule.reason}: ${blockedOptions.join(', ')}`);
        }
      }

      // Option-Konflikt Regeln
      if (rule.optionConflicts) {
        for (const conflict of rule.optionConflicts) {
          const conflictingOptions = conflict.filter(opt => options.includes(opt));
          if (conflictingOptions.length > 1) {
            errors.push(`${rule.reason}: ${conflictingOptions.join(' und ')}`);
          }
        }
      }
    }
  }

  return { errors, warnings, isValid: errors.length === 0 };
}

app.get('/api/catalog', (req, res) => {
  res.json(catalog);
});

app.post('/api/quote', (req, res) => {
  const { doorId, options = [] } = req.body;
  const door = catalog.doors.find(d => d.id === doorId);
  
  if (!door) {
    return res.status(400).json({ error: 'Ungültige Tür-ID' });
  }

  // Validiere Konfiguration
  const validation = validateConfiguration(door, options);
  
  if (!validation.isValid) {
    return res.status(400).json({ 
      error: 'Ungültige Konfiguration', 
      details: validation.errors 
    });
  }

  // Berechne Preis
  let price = door.basePrice;
  const appliedOptions = [];
  
  for (const opt of options) {
    if (catalog.optionPrices[opt]) {
      price += catalog.optionPrices[opt];
      appliedOptions.push({
        id: opt,
        name: getOptionDisplayName(opt),
        price: catalog.optionPrices[opt]
      });
    }
  }

  res.json({ 
    total: price,
    basePrice: door.basePrice,
    appliedOptions,
    warnings: validation.warnings,
    door: {
      id: door.id,
      name: door.name,
      material: door.material,
      category: door.category
    }
  });
});

// Hilfsfunktion für Optionsnamen
function getOptionDisplayName(optionKey) {
  const names = {
    'security-lock': 'Sicherheitsschloss',
    'glass-panel': 'Glaselement',
    'smart-lock': 'Smart Lock',
    'extra-insulation': 'Extra Dämmung',
    'custom-color': 'Sonderfarbe',
    'led-lighting': 'LED-Beleuchtung',
    'fingerprint': 'Fingerprint-Scanner',
    'decorative-glass': 'Dekoratives Glas',
    'security-glass': 'Sicherheitsglas',
    'multi-point-lock': 'Mehrfachverriegelung',
    'weather-seal': 'Wetterdichtung',
    'privacy-glass': 'Sichtschutzglas',
    'eco-coating': 'Öko-Beschichtung'
  };
  return names[optionKey] || optionKey;
}

// Neue Route für verfügbare Optionen pro Tür
app.get('/api/door/:doorId/options', (req, res) => {
  const { doorId } = req.params;
  const door = catalog.doors.find(d => d.id === doorId);
  
  if (!door) {
    return res.status(400).json({ error: 'Ungültige Tür-ID' });
  }

  const availableOptions = door.compatibleOptions || Object.keys(catalog.optionPrices);
  const optionsWithDetails = availableOptions.map(opt => ({
    id: opt,
    name: getOptionDisplayName(opt),
    price: catalog.optionPrices[opt] || 0
  }));

  res.json({
    door: {
      id: door.id,
      name: door.name,
      category: door.category
    },
    availableOptions: optionsWithDetails
  });
});

// Serve Frontend (für Production)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚪 Türkonfigurator läuft auf Port ${PORT}`);
  console.log(`📍 Umgebung: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 URL: http://localhost:${PORT}`);
});