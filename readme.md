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

## 📊 Technische Details- Überblick
Vite startet Development-Server
React rendert die Benutzeroberfläche
Three.js zeigt 3D-Tür an
Express/Node.js liefert Tür-Daten via API
JSON-Validierung prüft Kompatibilität
CORS verbindet Frontend & Backend
CSS Grid/Flexbox macht es responsive
Die API ist eine Schnittstelle, die Ihr Frontend (React-App) mit dem Backend (Node.js Server) verbindet - wie ein Kellner, der Bestellungen zwischen Küche und Gast überbringt. In Ihrem Projekt liefert die API die Tür-Daten, berechnet Preise und validiert Konfigurationen über URLs wie /api/catalog oder /api/quote.
er Development Server ist ein lokaler Webserver (Vite auf Port 5173), der Ihre React-App während der Entwicklung ausführt und dabei Features wie Hot-Reload (automatische Aktualisierung bei Code-Änderungen) bereitstellt. Er fungiert auch als Proxy, der API-Anfragen an Ihr Backend weiterleitet, damit Frontend und Backend reibungslos zusammenarbeiten können.
## Aufbau:

- **Frontend:** React 18 + Vite + Three.js
- **Backend:** Node.js + Express
- **3D-Engine:** Three.js mit @react-three/fiber
- **Validierung:** JSON-basierte Regel-Engine
- **Responsive:** CSS Grid + Flexbox
- **Browser-Support:** Moderne Browser (ES6+)
- **Performance:** Lazy Loading + Code Splitting
- @react-three/drei (^9.88.13) - Zusätzliche Three.js Utilities
-  CORS Support (^2.8.5)
-  JSON-basierte Validierung (in server.js und doors.json)

  




# 🟢 UNBEDENKLICH für Firmennutzung:
Alle verwendeten Technologien sind Open Source:

React - MIT License ✅
Three.js - MIT License ✅
Vite - MIT License ✅
Node.js - MIT License ✅
Express - MIT License ✅
@react-three/fiber - MIT License ✅
📋 WAS SIE BEACHTEN MÜSSEN:
✅ ERLAUBT:

Kommerzielle Nutzung
Verkauf als Produkt/Service
Kundenaufträge
SaaS-Anwendungen
White-Label-Lösungen
⚠️ EMPFOHLENE MASSNAHMEN:

License-Datei erstellen mit allen verwendeten Libraries
Copyright-Hinweise in der App
Eigene Nutzungsbedingungen für Kunden
Datenschutzerklärung (DSGVO-konform)
💰 BUSINESS-MODEL Optionen:
Lizenzverkauf an Türenhersteller
SaaS-Lösung (monatliche Gebühr)
White-Label für Handwerker/Händler
Individuelle Anpassungen als Service


## 📄 Lizenz

MIT License - siehe [LICENSE](LICENSE) für Details.





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

## 🔗 Integration mit Pascal/C# Backend

### Komplette Backend-Ersetzung mit eigener Logik

#### Pascal/Delphi Server Implementation
```pascal
program DoorConfiguratorServer;

{$APPTYPE CONSOLE}

uses
  IdHTTPServer, IdContext, IdCustomHTTPServer, IdHTTPHeaderInfo,
  System.JSON, System.SysUtils, System.Generics.Collections,
  FireDAC.Comp.Client, FireDAC.Stan.Def, FireDAC.Phys.SQLite;

type
  // Datenstrukturen
  TDoorMaterial = (dmWood, dmOak, dmAluminium, dmSteel, dmGlass, dmEco);
  TDoorCategory = (dcClassic, dcModern, dcSecurity, dcGlass, dcEco);
  
  TDoorOption = record
    ID: string;
    Name: string;
    Price: Currency;
    Category: string;
  end;
  
  TDoor = class
  private
    FID: string;
    FName: string;
    FBasePrice: Currency;
    FMaterial: TDoorMaterial;
    FCategory: TDoorCategory;
    FCompatibleOptions: TArray<string>;
    FDescription: string;
    FWidth, FHeight: Integer;
  public
    constructor Create(const AID, AName: string; APrice: Currency);
    function ToJSON: TJSONObject;
    function IsOptionCompatible(const OptionID: string): Boolean;
    
    property ID: string read FID;
    property Name: string read FName;
    property BasePrice: Currency read FBasePrice;
    property Material: TDoorMaterial read FMaterial write FMaterial;
    property Category: TDoorCategory read FCategory write FCategory;
    property CompatibleOptions: TArray<string> read FCompatibleOptions write FCompatibleOptions;
  end;

  // Validierungslogik
  TConfigurationValidator = class
  private
    FIncompatibleRules: TDictionary<string, TStringList>;
    FMaterialRules: TDictionary<TDoorMaterial, TStringList>;
    FCategoryRules: TDictionary<TDoorCategory, TStringList>;
    FConflictGroups: TArray<TStringList>; // Gegenseitig ausschließende Optionen
  public
    constructor Create;
    destructor Destroy; override;
    
    function ValidateConfiguration(Door: TDoor; Options: TArray<string>): TValidationResult;
    procedure LoadValidationRules; // Aus Datenbank/Config
  end;

  // REST API Handler
  TDoorConfiguratorHandler = class
  private
    FDatabase: TFDConnection;
    FValidator: TConfigurationValidator;
    FDoors: TObjectList<TDoor>;
    FOptions: TDictionary<string, TDoorOption>;
  public
    constructor Create;
    destructor Destroy; override;
    
    // API Endpunkte
    procedure HandleCatalogRequest(AContext: TIdContext; ARequestInfo: TIdHTTPRequestInfo; AResponseInfo: TIdHTTPResponseInfo);
    procedure HandleQuoteRequest(AContext: TIdContext; ARequestInfo: TIdHTTPRequestInfo; AResponseInfo: TIdHTTPResponseInfo);
    procedure HandleOptionsRequest(AContext: TIdContext; ARequestInfo: TIdHTTPRequestInfo; AResponseInfo: TIdHTTPResponseInfo);
    
    // Datenbank-Integration
    procedure LoadDoorsFromDatabase;
    procedure LoadOptionsFromDatabase;
    procedure SaveConfiguration(const DoorID: string; Options: TArray<string>; TotalPrice: Currency);
  end;

// Hauptserver
procedure StartServer;
var
  Server: TIdHTTPServer;
  Handler: TDoorConfiguratorHandler;
begin
  Handler := TDoorConfiguratorHandler.Create;
  Server := TIdHTTPServer.Create(nil);
  try
    Server.DefaultPort := 3000;
    Server.OnCommandGet := Handler.HandleCatalogRequest;
    Server.OnCommandPost := Handler.HandleQuoteRequest;
    Server.Active := True;
    
    WriteLn('Pascal Türkonfigurator Server läuft auf Port 3000');
    WriteLn('API verfügbar unter:');
    WriteLn('  GET  http://localhost:3000/api/catalog');
    WriteLn('  POST http://localhost:3000/api/quote');
    WriteLn('  GET  http://localhost:3000/api/door/{id}/options');
    
    ReadLn; // Server läuft bis Enter gedrückt wird
  finally
    Server.Free;
    Handler.Free;
  end;
end;

begin
  StartServer;
end.
```

#### C# ASP.NET Core API
```csharp
// Program.cs
using DoorConfigurator.Models;
using DoorConfigurator.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Services
builder.Services.AddDbContext<DoorConfiguratorContext>(options =>
    options.UseSqlite("Data Source=doors.db"));
builder.Services.AddScoped<IDoorService, DoorService>();
builder.Services.AddScoped<IValidationService, ValidationService>();
builder.Services.AddScoped<IPricingService, PricingService>();

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors();
app.MapControllers();
app.Run("http://localhost:3000");

// Models/Door.cs
namespace DoorConfigurator.Models
{
    public enum DoorMaterial
    {
        Wood, Oak, Aluminium, Steel, Glass, Eco
    }
    
    public enum DoorCategory  
    {
        Classic, Modern, Security, Glass, Eco
    }

    public class Door
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public decimal BasePrice { get; set; }
        public DoorMaterial Material { get; set; }
        public DoorCategory Category { get; set; }
        public List<string> CompatibleOptions { get; set; } = new();
        public string Description { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        
        public bool IsOptionCompatible(string optionId)
        {
            return CompatibleOptions.Contains(optionId);
        }
    }

    public class DoorOption
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Category { get; set; }
        public List<string> IncompatibleWith { get; set; } = new();
    }

    public class ValidationRule
    {
        public string Id { get; set; }
        public DoorMaterial? MaterialRestriction { get; set; }
        public DoorCategory? CategoryRestriction { get; set; }
        public List<string> BlockedOptions { get; set; } = new();
        public List<List<string>> ConflictGroups { get; set; } = new();
        public string Reason { get; set; }
    }
}

// Services/ValidationService.cs
namespace DoorConfigurator.Services
{
    public class ValidationService : IValidationService
    {
        private readonly DoorConfiguratorContext _context;
        private readonly List<ValidationRule> _rules;
        
        public ValidationService(DoorConfiguratorContext context)
        {
            _context = context;
            LoadValidationRules();
        }
        
        public ValidationResult ValidateConfiguration(Door door, List<string> options)
        {
            var errors = new List<string>();
            
            // 1. Material-basierte Validierung
            var materialRules = _rules.Where(r => r.MaterialRestriction == door.Material);
            foreach (var rule in materialRules)
            {
                var conflicts = rule.BlockedOptions.Intersect(options).ToList();
                if (conflicts.Any())
                {
                    errors.Add($"{rule.Reason}: {string.Join(", ", conflicts)}");
                }
            }
            
            // 2. Kategorie-basierte Validierung  
            var categoryRules = _rules.Where(r => r.CategoryRestriction == door.Category);
            foreach (var rule in categoryRules)
            {
                var conflicts = rule.BlockedOptions.Intersect(options).ToList();
                if (conflicts.Any())
                {
                    errors.Add($"{rule.Reason}: {string.Join(", ", conflicts)}");
                }
            }
            
            // 3. Gegenseitig ausschließende Optionen
            foreach (var rule in _rules)
            {
                foreach (var conflictGroup in rule.ConflictGroups)
                {
                    var selectedConflicts = conflictGroup.Intersect(options).ToList();
                    if (selectedConflicts.Count > 1)
                    {
                        errors.Add($"Nur eine Option erlaubt: {string.Join(" oder ", selectedConflicts)}");
                    }
                }
            }
            
            // 4. Kompatibilitätsprüfung mit Tür
            foreach (var option in options)
            {
                if (!door.IsOptionCompatible(option))
                {
                    errors.Add($"Option '{option}' nicht verfügbar für {door.Name}");
                }
            }
            
            return new ValidationResult
            {
                IsValid = !errors.Any(),
                Errors = errors
            };
        }
    }
}

// Controllers/DoorController.cs
[ApiController]
[Route("api")]
public class DoorController : ControllerBase
{
    private readonly IDoorService _doorService;
    private readonly IValidationService _validationService;
    private readonly IPricingService _pricingService;
    
    public DoorController(IDoorService doorService, IValidationService validationService, IPricingService pricingService)
    {
        _doorService = doorService;
        _validationService = validationService;
        _pricingService = pricingService;
    }
    
    [HttpGet("catalog")]
    public async Task<IActionResult> GetCatalog()
    {
        var doors = await _doorService.GetAllDoorsAsync();
        var options = await _doorService.GetAllOptionsAsync();
        
        return Ok(new 
        { 
            doors = doors.Select(d => new
            {
                d.Id, d.Name, d.BasePrice, d.Material, d.Category,
                d.Description, d.Width, d.Height, d.CompatibleOptions
            }),
            optionPrices = options.ToDictionary(o => o.Id, o => o.Price),
            categories = Enum.GetNames<DoorCategory>().ToDictionary(c => c, c => c)
        });
    }
    
    [HttpPost("quote")]
    public async Task<IActionResult> CalculateQuote([FromBody] QuoteRequest request)
    {
        var door = await _doorService.GetDoorByIdAsync(request.DoorId);
        if (door == null)
            return BadRequest(new { error = "Ungültige Tür-ID" });
            
        var validation = _validationService.ValidateConfiguration(door, request.Options);
        if (!validation.IsValid)
            return BadRequest(new { error = "Ungültige Konfiguration", details = validation.Errors });
            
        var pricing = await _pricingService.CalculatePriceAsync(door, request.Options);
        
        // Konfiguration in Datenbank speichern für Analytics
        await _doorService.SaveConfigurationAsync(request.DoorId, request.Options, pricing.Total);
        
        return Ok(new 
        { 
            total = pricing.Total,
            basePrice = door.BasePrice,
            appliedOptions = pricing.AppliedOptions,
            door = new { door.Id, door.Name, door.Material, door.Category }
        });
    }
    
    [HttpGet("door/{doorId}/options")]
    public async Task<IActionResult> GetAvailableOptions(string doorId)
    {
        var door = await _doorService.GetDoorByIdAsync(doorId);
        if (door == null)
            return BadRequest(new { error = "Ungültige Tür-ID" });
            
        var availableOptions = await _doorService.GetCompatibleOptionsAsync(doorId);
        
        return Ok(new
        {
            door = new { door.Id, door.Name, door.Category },
            availableOptions = availableOptions.Select(o => new { o.Id, o.Name, o.Price })
        });
    }
}
```

### Frontend-Integration mit eigenem Backend

#### JavaScript Frontend anpassen für eigene API
```javascript
// frontend/src/config/api.js
const API_CONFIG = {
  // Für lokale Entwicklung mit Pascal/C# Backend
  BASE_URL: process.env.NODE_ENV === 'production' 
    ? 'https://ihre-domain.com/api'  // Ihr eigener Server
    : 'http://localhost:3000/api',   // Lokale Entwicklung
    
  ENDPOINTS: {
    CATALOG: '/catalog',
    QUOTE: '/quote',
    OPTIONS: '/door/:doorId/options'
  }
};

// API Service mit Backend-Integration
class DoorConfiguratorAPI {
  static async getCatalog() {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CATALOG}`);
      if (!response.ok) throw new Error('Failed to fetch catalog');
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      // Fallback auf lokale Demo-Daten
      return this.getDemoData();
    }
  }
  
  static async calculateQuote(doorId, options) {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.QUOTE}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ doorId, options })
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details?.join(', ') || 'Validation failed');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Quote calculation failed:', error);
      throw error;
    }
  }
  
  static async getAvailableOptions(doorId) {
    const url = API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.OPTIONS.replace(':doorId', doorId);
    const response = await fetch(url);
    return await response.json();
  }
}

// In App.jsx verwenden
useEffect(() => {
  DoorConfiguratorAPI.getCatalog()
    .then(data => {
      setCatalog(data);
      setSelectedDoor(data.doors[0]);
      setLoading(false);
    })
    .catch(err => {
      console.error('Failed to load catalog:', err);
      setLoading(false);
    });
}, []);
```

### Datenbank-Schema für Pascal/C#

```sql
-- SQLite/PostgreSQL/SQL Server Schema
CREATE TABLE doors (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    base_price DECIMAL(10,2) NOT NULL,
    material VARCHAR(20) NOT NULL,
    category VARCHAR(20) NOT NULL,
    description TEXT,
    width INTEGER,
    height INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE door_options (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(50),
    description TEXT
);

CREATE TABLE door_compatible_options (
    door_id VARCHAR(50) REFERENCES doors(id),
    option_id VARCHAR(50) REFERENCES door_options(id),
    PRIMARY KEY (door_id, option_id)
);

CREATE TABLE validation_rules (
    id SERIAL PRIMARY KEY,
    rule_type VARCHAR(20), -- 'material', 'category', 'conflict'
    material VARCHAR(20),
    category VARCHAR(20),
    blocked_options JSON, -- Array von Option-IDs
    conflict_groups JSON, -- Array von Arrays für gegenseitig ausschließende Optionen
    reason TEXT,
    active BOOLEAN DEFAULT true
);

CREATE TABLE configurations (
    id SERIAL PRIMARY KEY,
    door_id VARCHAR(50) REFERENCES doors(id),
    selected_options JSON,
    total_price DECIMAL(10,2),
    client_ip VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Beispieldaten einfügen
INSERT INTO doors VALUES 
('classic-wood-001', 'Klassik Holztür', 1200.00, 'Wood', 'Classic', 'Traditionelle Holztür', 90, 210),
('modern-alu-001', 'Modern Aluminium', 1800.00, 'Aluminium', 'Modern', 'Schlankes Design', 100, 220),
('security-steel-001', 'Sicherheitstür RC2', 2500.00, 'Steel', 'Security', 'Einbruchschutz RC2', 90, 210);

INSERT INTO door_options VALUES
('smart-lock', 'Smart Lock', 300.00, 'Security', 'Elektronisches Schloss'),
('glass-panel', 'Glaselement', 200.00, 'Design', 'Dekoratives Glaselement'),
('led-lighting', 'LED-Beleuchtung', 250.00, 'Comfort', 'Integrierte LED-Beleuchtung');
```

### Deployment auf eigenem Server

```bash
# Pascal/Delphi Deployment
# Kompilieren und auf Server kopieren
dcc64 DoorConfiguratorServer.dpr
scp DoorConfiguratorServer root@ihr-server.com:/opt/door-configurator/
scp doors.db root@ihr-server.com:/opt/door-configurator/

# C# Deployment
dotnet publish -c Release -o ./publish
scp -r ./publish/* root@ihr-server.com:/opt/door-configurator/

# Systemd Service (Linux)
sudo tee /etc/systemd/system/door-configurator.service > /dev/null <<EOF
[Unit]
Description=Door Configurator API
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/opt/door-configurator
ExecStart=/opt/door-configurator/DoorConfiguratorServer
Restart=always

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable door-configurator
sudo systemctl start door-configurator
```

Mit dieser Integration läuft Ihr **komplettes Backend in Pascal/C#** während das Frontend weiterhin in React bleibt!

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
