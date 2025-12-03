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

  // Katalog laden
  useEffect(() => {
    fetch('/api/catalog')
      .then(res => res.json())
      .then(data => {
        setCatalog(data)
        setSelectedDoor(data.doors[0]) // Erste Tür als Standard
        setLoading(false)
      })
      .catch(err => {
        console.error('Fehler beim Laden des Katalogs:', err)
        setLoading(false)
      })
  }, [])

  // Preis berechnen
  useEffect(() => {
    if (selectedDoor && selectedOptions.length >= 0) {
      fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          doorId: selectedDoor.id,
          options: selectedOptions
        })
      })
      .then(res => res.json())
      .then(data => setQuote(data))
      .catch(err => console.error('Fehler bei Preisberechnung:', err))
    }
  }, [selectedDoor, selectedOptions])

  if (loading) {
    return (
      <div className="loading">
        <h2>Lade Türkonfigurator...</h2>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1>😪 Türkonfigurator</h1>
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
            style={{ minHeight: '400px' }}
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
              opacity={0.4}
              scale={10}
              blur={2}
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