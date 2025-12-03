import React from 'react'

export default function ConfigPanel({ 
  catalog, 
  selectedDoor, 
  selectedOptions, 
  onDoorChange, 
  onOptionsChange, 
  quote 
}) {
  const handleOptionToggle = (optionKey) => {
    if (selectedOptions.includes(optionKey)) {
      onOptionsChange(selectedOptions.filter(opt => opt !== optionKey))
    } else {
      onOptionsChange([...selectedOptions, optionKey])
    }
  }

  const getOptionPrice = (optionKey) => {
    return catalog.optionPrices[optionKey] || 0
  }

  const getOptionName = (optionKey) => {
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
      'eco-coating': 'Öko-Beschichtung',
      'video-doorbell': 'Video-Türklingel',
      'intercom-system': 'Gegensprechanlage',
      'motion-sensor': 'Bewegungsmelder',
      'automatic-opener': 'Automatik-Öffner',
      'keypad-entry': 'Keypad-Zugang',
      'rfid-access': 'RFID-Zugang',
      'magnetic-lock': 'Magnetschloss',
      'door-closer': 'Türschließer',
      'ventilation-grille': 'Lüftungsgitter',
      'cat-flap': 'Katzenklappe',
      'mail-slot': 'Briefschlitz',
      'peephole': 'Türspion',
      'door-chain': 'Türkette',
      'sound-insulation': 'Schalldämmung',
      'fire-protection': 'Brandschutz',
      'anti-drill-protection': 'Bohrschutz',
      'reinforced-hinges': 'Verstärkte Scharniere',
      'threshold-seal': 'Schwellendichtung',
      'handle-lock': 'Griff-Schloss',
      'cylinder-lock': 'Zylinderschloss',
      'deadbolt': 'Riegel',
      'panic-room-lock': 'Panikraum-Schloss',
      'biometric-scanner': 'Biometric-Scanner',
      'facial-recognition': 'Gesichtserkennung',
      'app-control': 'App-Steuerung',
      'backup-battery': 'Backup-Batterie',
      'alarm-system': 'Alarmsystem',
      'glass-break-sensor': 'Glasbruchmelder',
      'anti-fog-coating': 'Anti-Beschlag',
      'self-cleaning-glass': 'Selbstreinigendes Glas',
      'heated-glass': 'beheizbares Glas',
      'smart-glass': 'Smart-Glas',
      'bulletproof-glass': 'Kugelsicheres Glas',
      'uv-protection': 'UV-Schutz',
      'mirror-finish': 'Spiegeloberfläche',
      'frosted-glass': 'Mattglas',
      'tinted-glass': 'Getöntes Glas'
    }
    return names[optionKey] || optionKey
  }

  const getCategoryIcon = (category) => {
    const icons = {
      'classic': '🏛️',
      'modern': '✨', 
      'security': '🔒',
      'glass': '💎',
      'eco': '🌿'
    }
    return icons[category] || '🚪'
  }

  if (!catalog || !selectedDoor) {
    return <div className="config-panel">Lädt...</div>
  }

  return (
    <div className="config-panel">
      <div className="config-section">
        <h3>🚪 Türmodell wählen</h3>
        <div className="door-grid">
          {catalog.doors.map(door => (
            <div 
              key={door.id}
              className={`door-card ${selectedDoor.id === door.id ? 'selected' : ''}`}
              onClick={() => onDoorChange(door)}
            >
              <div className="door-header">
                <span className="category-icon">{getCategoryIcon(door.category)}</span>
                <h4>{door.name}</h4>
              </div>
              <div className="door-details">
                <div className="door-description">{door.description}</div>
                <div className="door-specs">
                  <span>{door.material}</span>
                  <span>{door.width}×{door.height}cm</span>
                </div>
                <div className="door-price">ab {door.basePrice.toLocaleString('de-DE')} €</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="config-section">
        <h3>⚙️ Ausstattung</h3>
        <div className="options-grid">
          {(selectedDoor.compatibleOptions || Object.keys(catalog.optionPrices)).map(optionKey => {
            const isAvailable = !selectedDoor.compatibleOptions || selectedDoor.compatibleOptions.includes(optionKey);
            const isSelected = selectedOptions.includes(optionKey);
            
            return (
              <div 
                key={optionKey}
                className={`option-item ${isSelected ? 'selected' : ''} ${!isAvailable ? 'disabled' : ''}`}
                onClick={() => isAvailable && handleOptionToggle(optionKey)}
              >
                <input 
                  type="checkbox" 
                  checked={isSelected}
                  disabled={!isAvailable}
                  onChange={() => {}}
                />
                <div className="option-info">
                  <div className="option-name">{getOptionName(optionKey)}</div>
                  <div className="option-price">
                    {isAvailable ? `+${getOptionPrice(optionKey).toLocaleString('de-DE')} €` : 'Nicht verfügbar'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="summary">
        <h3>📋 Zusammenfassung</h3>
        <div className="summary-item">
          <span>{selectedDoor.name}</span>
          <span>{selectedDoor.basePrice.toLocaleString('de-DE')} €</span>
        </div>
        
        {selectedOptions.map(option => (
          <div key={option} className="summary-item">
            <span>{getOptionName(option)}</span>
            <span>+{getOptionPrice(option).toLocaleString('de-DE')} €</span>
          </div>
        ))}
        
        {quote && (
          <div className="summary-item summary-total">
            <span>Gesamtpreis</span>
            <span>{quote.total.toLocaleString('de-DE')} €</span>
          </div>
        )}
      </div>
    </div>
  )
}