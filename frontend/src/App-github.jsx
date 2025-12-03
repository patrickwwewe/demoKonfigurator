import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import DoorModel from './components/DoorModel'
import ConfigPanel from './components/ConfigPanel'
import './App.css'

function App() {
  const [selectedDoor, setSelectedDoor] = useState(null)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [catalog, setCatalog] = useState(null)
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showLandscapeWarning, setShowLandscapeWarning] = useState(false)

  // Katalog laden - statische Daten für GitHub Pages
  useEffect(() => {
    // Statische Daten für GitHub Pages Demo
    const demoData = {
      doors: [
        {
          id: "classic-wood-001",
          name: "Klassik Holztür",
          basePrice: 1200,
          material: "Holz",
          width: 90,
          height: 210,
          category: "classic",
          description: "Traditionelle Holztür mit natürlicher Maserung",
          compatibleOptions: ["glass-panel", "custom-color", "extra-insulation", "weather-seal", "peephole", "door-chain"]
        },
        {
          id: "modern-alu-001",
          name: "Modern Aluminium",
          basePrice: 1800,
          material: "Aluminium", 
          width: 100,
          height: 220,
          category: "modern",
          description: "Schlankes Design mit klaren Linien",
          compatibleOptions: ["smart-lock", "glass-panel", "custom-color", "led-lighting", "fingerprint", "video-doorbell"]
        },
        {
          id: "security-steel-001",
          name: "Sicherheitstür RC2",
          basePrice: 2500,
          material: "Stahl",
          width: 90,
          height: 210,
          category: "security", 
          description: "Einbruchschutz Klasse RC2",
          compatibleOptions: ["security-lock", "smart-lock", "extra-insulation", "security-glass", "multi-point-lock", "alarm-system"]
        },
        {
          id: "glass-modern-001",
          name: "Glas Design Premium",
          basePrice: 3200,
          material: "Glas/Aluminium",
          width: 100,
          height: 220,
          category: "glass",
          description: "Exklusives Glasdesign mit Aluminiumrahmen",
          compatibleOptions: ["smart-lock", "decorative-glass", "led-lighting", "fingerprint", "privacy-glass", "heated-glass"]
        },
        {
          id: "eco-wood-001", 
          name: "Öko Holztür Natur",
          basePrice: 1600,
          material: "Nachhaltig Holz",
          width: 90,
          height: 210,
          category: "eco",
          description: "Nachhaltige Holztür aus zertifizierten Wäldern",
          compatibleOptions: ["eco-coating", "extra-insulation", "glass-panel", "weather-seal", "sound-insulation"]
        }
      ],
      optionPrices: {
        "security-lock": 150,
        "glass-panel": 200,
        "smart-lock": 300,
        "extra-insulation": 180,
        "custom-color": 100,
        "led-lighting": 250,
        "fingerprint": 400,
        "decorative-glass": 320,
        "security-glass": 280,
        "multi-point-lock": 320,
        "weather-seal": 80,
        "privacy-glass": 180,
        "eco-coating": 120,
        "video-doorbell": 380,
        "intercom-system": 450,
        "motion-sensor": 200,
        "automatic-opener": 800,
        "keypad-entry": 220,
        "rfid-access": 350,
        "magnetic-lock": 280,
        "door-closer": 120,
        "ventilation-grille": 60,
        "cat-flap": 80,
        "mail-slot": 45,
        "peephole": 45,
        "door-chain": 35,
        "sound-insulation": 200,
        "fire-protection": 400,
        "anti-drill-protection": 180,
        "reinforced-hinges": 150,
        "threshold-seal": 60,
        "handle-lock": 90,
        "cylinder-lock": 120,
        "deadbolt": 80,
        "panic-room-lock": 600,
        "biometric-scanner": 500,
        "facial-recognition": 700,
        "app-control": 180,
        "backup-battery": 120,
        "alarm-system": 420,
        "glass-break-sensor": 200,
        "anti-fog-coating": 100,
        "self-cleaning-glass": 300,
        "heated-glass": 450,
        "smart-glass": 800,
        "bulletproof-glass": 1200,
        "uv-protection": 80,
        "mirror-finish": 150,
        "frosted-glass": 120,
        "tinted-glass": 100
      },
      incompatibleCombinations: [
        {
          reason: "Holztüren sind nicht mit Smart-Technologie kompatibel",
          material: "Holz",
          blockedOptions: ["smart-lock", "fingerprint", "app-control", "facial-recognition"]
        },
        {
          reason: "Sicherheitstüren haben bereits verstärkte Komponenten",
          category: "security", 
          blockedOptions: ["decorative-glass", "glass-panel", "cat-flap"]
        },
        {
          reason: "Diese Optionen können nicht kombiniert werden",
          optionConflicts: [
            ["security-glass", "decorative-glass", "privacy-glass"],
            ["manual-lock", "smart-lock", "magnetic-lock"],
            ["standard-glass", "bulletproof-glass", "smart-glass"]
          ]
        }
      ]
    };
    
    setCatalog(demoData);
    setSelectedDoor(demoData.doors[0]);
    setLoading(false);
  }, [])

  // Preis berechnen - lokale Berechnung für GitHub Pages
  useEffect(() => {
    if (selectedDoor && catalog) {
      let total = selectedDoor.basePrice;
      const appliedOptions = [];
      
      for (const option of selectedOptions) {
        if (catalog.optionPrices[option]) {
          total += catalog.optionPrices[option];
          appliedOptions.push({
            id: option,
            price: catalog.optionPrices[option]
          });
        }
      }
      
      setQuote({
        total,
        basePrice: selectedDoor.basePrice,
        appliedOptions
      });
    }
  }, [selectedDoor, selectedOptions, catalog])

  // iPhone Portrait Detection (empfehle Querformat!)
  useEffect(() => {
    const checkOrientation = () => {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight
      const isPortrait = screenWidth < screenHeight
      const isSmallScreen = screenWidth < 500 && screenHeight < 1000
      const isIPhone = /iPhone/.test(navigator.userAgent)
      const isTouchDevice = 'ontouchstart' in window
      
      // NUR echtes iPhone im Portrait mit kleinem Screen
      if (isPortrait && isSmallScreen && isIPhone && isTouchDevice) {
        setShowLandscapeWarning(true)
      } else {
        setShowLandscapeWarning(false)
      }
    }
    
    checkOrientation()
    window.addEventListener('resize', checkOrientation)
    window.addEventListener('orientationchange', checkOrientation)
    
    return () => {
      window.removeEventListener('resize', checkOrientation)
      window.removeEventListener('orientationchange', checkOrientation)
    }
  }, [])

  if (loading) {
    return (
      <div className="loading">
        <h2>Lade Türkonfigurator...</h2>
      </div>
    )
  }

  // iPhone Landscape Warning
  if (showLandscapeWarning) {
    return (
      <div className="landscape-warning">
        <div className="warning-content">
          <div className="phone-icon">🔄</div>
          <h2>🚪 Türkonfigurator</h2>
          <p>Für die beste 3D-Erfahrung drehen Sie Ihr iPhone ins <strong>Querformat</strong>!</p>
          <div className="landscape-icon">📱 ↔️</div>
          <button 
            className="continue-anyway"
            onClick={() => setShowLandscapeWarning(false)}
          >
            Trotzdem weitermachen
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🚪 Türkonfigurator (GitHub Pages Demo)</h1>
        <div className="price">
          {quote && `${quote.total.toLocaleString('de-DE')} €`}
        </div>
      </header>

      <div className="main-content">
        <div className="canvas-container">
          <Canvas
            camera={{ 
              position: [5, 3, 6], 
              fov: 50,
              near: 0.1,
              far: 100
            }}
            shadows
            dpr={[1, 2]}
            gl={{ antialias: true }}
            style={{ 
              minHeight: (() => {
                const isMobileLandscape = window.innerWidth > window.innerHeight && window.innerWidth < 1000
                if (isMobileLandscape) return '100vh'  // iPhone Querformat: volle Höhe
                return window.innerWidth < 768 ? '350px' : '400px'  // Sonst wie vorher
              })(),
              touchAction: 'none'
            }}
          >
            <color attach="background" args={['#f8f9fa']} />
            <ambientLight intensity={0.6} />
            <directionalLight
              position={[5, 8, 3]}
              intensity={1.2}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-far={20}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <pointLight position={[-5, 5, 2]} intensity={0.3} color="#ffeaa7" />
            
            <DoorModel 
              door={selectedDoor}
              options={selectedOptions}
            />
            
            <ContactShadows 
              position={[0, -1.5, 0]}
              opacity={0.3}
              scale={6}
              blur={1.5}
              far={2}
              smooth={true}
              resolution={512}
              color="#000000"
            />
            
            <Environment preset="apartment" />
            <OrbitControls 
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minDistance={2.5}
              maxDistance={8}
              minPolarAngle={Math.PI * 0.2}
              maxPolarAngle={Math.PI * 0.8}
              minAzimuthAngle={-Math.PI * 0.3}
              maxAzimuthAngle={Math.PI * 0.3}
              target={[0, 0, 0]}
              enableDamping={true}
              dampingFactor={0.05}
              // iPhone Touch-Optimierung
              zoomSpeed={0.5}
              rotateSpeed={0.6}
              touchAction="manipulation"
              touches={{
                ONE: 2, // ROTATE mit einem Finger  
                TWO: 1  // DOLLY (Zoom) mit zwei Fingern
              }}
            />
          </Canvas>
        </div>

        <ConfigPanel
          catalog={catalog}
          selectedDoor={selectedDoor}
          selectedOptions={selectedOptions}
          onDoorChange={setSelectedDoor}
          onOptionsChange={setSelectedOptions}
          quote={quote}
        />
      </div>
    </div>
  )
}

export default App