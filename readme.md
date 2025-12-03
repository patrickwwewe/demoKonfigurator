# Türkonfigurator

Ein interaktiver 3D-Türkonfigurator mit React/Three.js Frontend und Node.js Backend.

## 🚀 Live Demo

[Demo ansehen](https://your-github-pages-url.github.io)

## 📋 Features

- **8 verschiedene Türmodelle** in 5 Kategorien (Klassik, Modern, Sicherheit, Glas, Öko)
- **50+ Ausstattungsoptionen** mit intelligenter Kompatibilitätsprüfung
- **3D-Visualisierung** mit Three.js - interaktiv drehbar und zoombar
- **Echtzeit-Preisberechnung** mit detaillierter Kostenaufstellung
- **Intelligente Filterung** - inkompatible Optionen werden automatisch ausgeblendet
- **Responsive Design** für alle Geräte (Desktop, Tablet, Mobile)
- **Produktions-ready** für Server-Deployment
- **Debug-Unterstützung** mit VS Code Integration

## 🏗️ Türkategorien

### Klassische Türen
- Klassik Holztür (ab 1.200€)
- Landhaus Eichentür (ab 1.650€)

### Moderne Türen  
- Modern Aluminium (ab 1.800€)
- Designer Aluminium Plus (ab 2.400€)

### Sicherheitstüren
- RC2 Sicherheitstür (ab 2.500€)
- RC3 Panzer Sicherheitstür (ab 3.200€)

### Spezialtüren
- Glas-Design Tür (ab 2.100€)
- Öko Holztür (ab 1.350€)

## ⚙️ Ausstattungsoptionen (50+ verfügbar)

### 🔒 **Sicherheit & Zugang**
- Sicherheitsschloss (+150€) • Smart Lock (+300€) • Magnetschloss (+420€)
- Fingerprint-Scanner (+400€) • Biometric-Scanner (+650€) • Gesichtserkennung (+750€)
- Keypad-Zugang (+320€) • RFID-Zugang (+280€) • App-Steuerung (+200€)
- Panikraum-Schloss (+890€) • Mehrfachverriegelung (+320€)

### 🪟 **Glas & Optik** 
- Glaselement (+200€) • Sicherheitsglas (+280€) • Kugelsicheres Glas (+1200€)
- Smart-Glas (+890€) • Dekoratives Glas (+350€) • Sichtschutzglas (+180€)
- Mattglas (+140€) • Getöntes Glas (+180€) • Spiegeloberfläche (+220€)
- Selbstreinigendes Glas (+290€) • Beheizbares Glas (+340€)

### 🏠 **Komfort & Automation**
- Video-Türklingel (+380€) • Gegensprechanlage (+450€) • Automatik-Öffner (+680€)
- LED-Beleuchtung (+250€) • Bewegungsmelder (+220€) • Alarmsystem (+420€)
- Türschließer (+160€) • Backup-Batterie (+150€)

### 🛠️ **Klassische Ausstattung**
- Türspion (+45€) • Türkette (+35€) • Briefschlitz (+75€) • Katzenklappe (+140€)
- Zylinderschloss (+120€) • Riegel (+140€) • Griff-Schloss (+95€)

### 🌡️ **Dämmung & Schutz**
- Extra Dämmung (+180€) • Schalldämmung (+240€) • Brandschutz (+380€)
- Wetterdichtung (+80€) • Schwellendichtung (+60€) • UV-Schutz (+160€)
- Bohrschutz (+280€) • Verstärkte Scharniere (+180€)

## 🧠 Intelligente Kompatibilitätsprüfung

**Das System zeigt nur passende Optionen an - inkompatible Kombinationen werden automatisch ausgeblendet!**

### 🚫 **Material-basierte Beschränkungen**
- **Holz/Eiche:** ❌ Elektronik (LED, Biometric, Smart-Glas)  
  ✅ Klassisch (Türspion, Briefschlitz, Zylinderschloss)
- **Glas-Aluminium:** ❌ Hochsicherheit (Panikschloss, Mehrfachverriegelung)  
  ✅ Smart-Features (App, Smart-Glas, Automatik)
- **Stahl/Panzerstahl:** ❌ Öffnungen (Katzenklappe, Lüftungsgitter)  
  ✅ Maximale Sicherheit (Biometric, Kugelsicher, Panik)

### 🎯 **Kategorie-basierte Logik**
- **Klassische Türen:** Moderne Technik wird ausgeblendet
- **Sicherheitstüren:** Dekorative Elemente nicht verfügbar  
- **Öko-Türen:** Militärtechnik nicht kompatibel
- **Glastüren:** Sicherheitsschlösser werden ausgeblendet

### ⚡ **Exklusive Option-Gruppen**
Nur **eine Option** pro Gruppe wählbar:
- **Glastypen:** Normal • Sicherheit • Smart • Kugelsicher • Matt • Getönt
- **Zugangsysteme:** Fingerprint • Biometric • Gesichtserkennung  
- **Schlösser:** Sicherheit • Smart • Magnet • Panikraum
- **Türsprechanlage:** Türspion • Video-Klingel • Gegensprech

### 🔒 **Spezielle Sicherheitsregeln**
- **Automatik-Öffner:** Schließt Türkette und manuelle Riegel aus
- **Panikraum-Schloss:** Keine Öffnungen (Katzenklappe, Briefschlitz) erlaubt
- **Kugelsicheres Glas:** Erfordert vollständige Integrität (keine Löcher)
- **Smart-Glas:** Ersetzt andere Sichtschutz-Optionen

### ✅ **Benutzerfreundlichkeit**
- **Sofortiges Feedback:** Inkompatible Optionen verschwinden automatisch
- **Keine Fehlermeldungen:** Nur gültige Kombinationen werden angezeigt
- **Intelligente Vorschläge:** Passende Alternativen werden hervorgehoben
- **Echtzeit-Anpassung:** Bei Türwechsel werden Optionen neu gefiltert

## 🛠️ Installation & Start

### Backend starten
```bash
cd backend
npm install
node server.js
```
Backend läuft auf: http://localhost:3000

### Frontend starten  
```bash
cd frontend
npm install
npm run dev
```
Frontend läuft auf: http://localhost:5173

## 🐛 Debugging

VS Code Debug-Konfiguration ist bereits eingerichtet:
1. Setzen Sie Breakpoints in `server.js`
2. Drücken Sie `F5`
3. Wählen Sie "Debug Backend (Node.js)"

## 📁 Projektstruktur

```
konfigurator_zwei/
├── backend/
│   ├── server.js          # Express Server mit Validierung
│   ├── doors.json         # Türkatalog und Konfiguration
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Haupt-React Komponente
│   │   ├── components/
│   │   │   ├── DoorModel.jsx    # 3D Türmodell
│   │   │   └── ConfigPanel.jsx  # Konfigurationspanel
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── .vscode/
    └── launch.json        # Debug-Konfiguration
```

## 🌐 API Endpunkte

- `GET /api/catalog` - Kompletter Türkatalog
- `POST /api/quote` - Preisberechnung mit Validierung
- `GET /api/door/:id/options` - Verfügbare Optionen für eine Tür

## 💻 Alternative Backend-Implementierung (Pascal/C#)

**Ja, die Konfigurationsdaten und Validierungslogik können in Pascal oder C# implementiert werden!**

### Pascal (Object Pascal/Delphi) Backend
```pascal
unit DoorConfigurator;

interface
uses
  System.SysUtils, System.Classes, System.JSON, System.Generics.Collections;

type
  TDoorMaterial = (dmWood, dmOak, dmAluminum, dmGlass, dmSteel, dmEcoWood);
  TDoorCategory = (dcClassic, dcModern, dcSecurity, dcGlass, dcEco);
  
  TDoorOption = record
    ID: string;
    Name: string;
    Price: Currency;
  end;
  
  TDoor = class
  private
    FID: string;
    FName: string;
    FBasePrice: Currency;
    FMaterial: TDoorMaterial;
    FCategory: TDoorCategory;
    FCompatibleOptions: TList<string>;
  public
    constructor Create(const AID, AName: string; APrice: Currency; 
                      AMaterial: TDoorMaterial; ACategory: TDoorCategory);
    destructor Destroy; override;
    
    function IsOptionCompatible(const OptionID: string): Boolean;
    function ToJSON: TJSONObject;
    
    property ID: string read FID;
    property Name: string read FName;
    property BasePrice: Currency read FBasePrice;
  end;

  TDoorValidator = class
  private
    FIncompatibleRules: TDictionary<string, TList<string>>;
  public
    constructor Create;
    destructor Destroy; override;
    
    function ValidateConfiguration(Door: TDoor; Options: TList<string>): Boolean;
    function GetValidationErrors(Door: TDoor; Options: TList<string>): TStringList;
  end;
```

### C# (.NET) Backend
```csharp
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace DoorConfigurator.Models
{
    public enum DoorMaterial
    {
        Wood, Oak, Aluminum, Glass, Steel, EcoWood
    }

    public class Door
    {
        public string Id { get; set; }
        public string Name { get; set; }
        
        [Range(0, double.MaxValue)]
        public decimal BasePrice { get; set; }
        
        public DoorMaterial Material { get; set; }
        public List<string> CompatibleOptions { get; set; } = new();
        
        public bool IsOptionCompatible(string optionId)
        {
            return CompatibleOptions.Contains(optionId);
        }
    }

    public class ConfigurationValidator
    {
        private readonly Dictionary<string, List<string>> _incompatibleRules;
        
        public ConfigurationValidator()
        {
            _incompatibleRules = new Dictionary<string, List<string>>
            {
                ["Wood"] = new() { "led-lighting", "smart-lock" },
                ["Glass"] = new() { "security-lock", "panic-room-lock" }
            };
        }
        
        public ValidationResult ValidateConfiguration(Door door, List<string> options)
        {
            var errors = new List<string>();
            
            foreach (var option in options)
            {
                if (!door.IsOptionCompatible(option))
                {
                    errors.Add($"Option '{option}' nicht verfügbar für {door.Name}");
                }
            }
            
            return new ValidationResult { IsValid = !errors.Any(), Errors = errors };
        }
    }

    [ApiController]
    [Route("api/[controller]")]
    public class DoorController : ControllerBase
    {
        [HttpPost("quote")]
        public IActionResult CalculateQuote([FromBody] QuoteRequest request)
        {
            // Validierung und Preisberechnung
            return Ok(new { Total = calculatedPrice });
        }
    }
}
```

### Warum JavaScript/Node.js für GitHub ideal ist:
- ✅ **Serverless Deployment** über GitHub Pages
- ✅ **Keine Server-Kosten** 
- ✅ **GitHub Actions** CI/CD Integration
- ✅ **Frontend + Backend** in einer Sprache
- ❌ **Pascal/C#** benötigen dedizierten Server mit Runtime

**Für lokale Entwicklung oder eigene Server sind Pascal/C# perfekt geeignet!**

## 🎯 Geplante Features

- [ ] **Erweiterte 3D-Modelle:** Upload echter GLB/GLTF Türmodelle
- [ ] **Augmented Reality (AR):** Tür-Vorschau in realer Umgebung
- [ ] **PDF-Export:** Vollständige Konfiguration als Angebot
- [ ] **Admin-Interface:** Türverwaltung und Preispflege
- [ ] **Multi-Sprach-Unterstützung:** Englisch, Französisch, Italienisch
- [ ] **Erweiterte Materialien:** Mehr Holzarten und Oberflächenoptionen
- [ ] **Kundenbereich:** Gespeicherte Konfigurationen und Verlauf
- [ ] **Integration:** ERP-Systeme und CRM-Anbindung

## 🚀 Deployment

### GitHub Pages (Empfohlen)
1. Fork dieses Repository
2. Aktiviere GitHub Actions in den Repository-Einstellungen
3. Push löst automatisches Deployment aus
4. Verfügbar unter: `https://username.github.io/repository-name`

### Eigener Server
```bash
# Backend (Node.js)
cd backend
npm install --production
node server.js

# Frontend Build
cd frontend  
npm run build
# Kopiere dist/ Ordner zu Webserver
```

### Docker Deployment
```dockerfile
# Dockerfile beispiel für eigenen Server
FROM node:18-alpine
WORKDIR /app
COPY backend/ ./backend/
COPY frontend/dist/ ./frontend/
RUN cd backend && npm install --production
EXPOSE 3000
CMD ["node", "backend/server.js"]
```

## 🔧 Konfiguration anpassen

### Neue Türen hinzufügen
```json
// In backend/doors.json
{
  "id": "neue-tuer-001",
  "name": "Meine neue Tür",
  "basePrice": 1500,
  "material": "Holz",
  "category": "classic",
  "compatibleOptions": ["glass-panel", "peephole"]
}
```

### Neue Optionen erstellen
```json
// Neue Option zu optionPrices hinzufügen
"meine-option": 199,

// Zu gewünschten Türen in compatibleOptions hinzufügen
"compatibleOptions": [..., "meine-option"]
```

### Inkompatibilitäten definieren
```json
// Material-basierte Regel
{
  "material": "Holz", 
  "blockedOptions": ["led-lighting"],
  "reason": "LED nicht mit Holz kompatibel"
}
```

## 📊 Technische Details

- **Frontend:** React 18 + Vite + Three.js
- **Backend:** Node.js + Express
- **3D-Engine:** Three.js mit @react-three/fiber
- **Validierung:** JSON-basierte Regel-Engine
- **Responsive:** CSS Grid + Flexbox
- **Browser-Support:** Moderne Browser (ES6+)
- **Performance:** Lazy Loading + Code Splitting

## 📄 Lizenz

MIT License - siehe [LICENSE](LICENSE) für Details.

## 👥 Beitragen

Pull Requests sind willkommen! Für größere Änderungen öffnen Sie bitte zuerst ein Issue.

### Entwicklung
```bash
# Repository clonen
git clone https://github.com/username/konfigurator_zwei.git
cd konfigurator_zwei

# Backend starten (Terminal 1)
cd backend && npm install && node server.js

# Frontend starten (Terminal 2)  
cd frontend && npm install && npm run dev
```

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/username/konfigurator_zwei/issues)
- **Dokumentation:** Diese README + Code-Kommentare
- **API-Dokumentation:** `/api/` Endpunkte im Code dokumentiert

---

**🎉 Viel Spaß beim Konfigurieren!** Der Türkonfigurator ist bereit für den produktiven Einsatz.
