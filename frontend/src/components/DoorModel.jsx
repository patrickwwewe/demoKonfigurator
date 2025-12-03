import React, { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Box, Plane } from '@react-three/drei'
import * as THREE from 'three'

export default function DoorModel({ door, options }) {
  const groupRef = useRef()
  const { camera, size } = useThree()
  
  // Auto-fit Kamera basierend auf Viewport
  useEffect(() => {
    if (camera && size) {
      const aspect = size.width / size.height
      
      // Passe FOV basierend auf Aspect Ratio an
      if (aspect < 1) {
        // Portrait/Mobile - weiterer FOV
        camera.fov = 70
      } else if (aspect > 2) {
        // Sehr breite Displays - engerer FOV
        camera.fov = 45  
      } else {
        // Standard Desktop
        camera.fov = 50
      }
      
      camera.updateProjectionMatrix()
      
      // Passe Kamera-Position an
      const distance = aspect < 1 ? 7 : 5.5
      camera.position.set(distance * 0.8, distance * 0.6, distance)
    }
  }, [camera, size])
  
  // Farben basierend auf Material
  const materialColor = useMemo(() => {
    switch (door?.material) {
      case 'Holz': return '#8B4513'
      case 'Eiche': return '#D2691E'
      case 'Aluminium': return '#C0C0C0'
      case 'Glas-Aluminium': return '#E6E6FA'
      case 'Stahl': return '#4682B4'
      case 'Panzerstahl': return '#2F4F4F'
      case 'Öko-Holz': return '#228B22'
      default: return '#8B4513'
    }
  }, [door?.material])

  // Sonderfarbe wenn gewählt
  const doorColor = options?.includes('custom-color') ? '#2E8B57' : materialColor

  // Animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
  })

  if (!door) return null

  return (
    <group ref={groupRef} position={[0, -1, 0]} scale={[1.5, 1.5, 1.5]}>
      {/* Türrahmen */}
      <Box args={[0.08, 2.2, 0.12]} position={[-0.95, 0, 0]} castShadow>
        <meshStandardMaterial color="#5d4037" roughness={0.8} />
      </Box>
      <Box args={[0.08, 2.2, 0.12]} position={[0.95, 0, 0]} castShadow>
        <meshStandardMaterial color="#5d4037" roughness={0.8} />
      </Box>
      <Box args={[2, 0.08, 0.12]} position={[0, 1.05, 0]} castShadow>
        <meshStandardMaterial color="#5d4037" roughness={0.8} />
      </Box>

      {/* Haupttür */}
      <Box args={[1.8, 2, 0.08]} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial 
          color={doorColor} 
          roughness={door.material.includes('Aluminium') ? 0.2 : 0.6}
          metalness={door.material.includes('Aluminium') ? 0.9 : 0.1}
          envMapIntensity={door.material.includes('Aluminium') ? 1 : 0.3}
        />
      </Box>
      
      {/* Türpanels für Holztüren */}
      {(door.material === 'Holz' || door.material === 'Eiche' || door.material === 'Öko-Holz') && (
        <>
          <Box args={[0.7, 0.8, 0.02]} position={[0, 0.4, 0.05]} castShadow>
            <meshStandardMaterial color={doorColor} roughness={0.8} />
          </Box>
          <Box args={[0.7, 0.8, 0.02]} position={[0, -0.4, 0.05]} castShadow>
            <meshStandardMaterial color={doorColor} roughness={0.8} />
          </Box>
        </>
      )}

      {/* Glaselement wenn gewählt */}
      {(options?.includes('glass-panel') || options?.includes('decorative-glass') || options?.includes('security-glass') || options?.includes('privacy-glass')) && (
        <Box args={[1.2, 1.6, 0.02]} position={[0, 0.2, 0.05]} castShadow>
          <meshPhysicalMaterial 
            color={
              options?.includes('decorative-glass') ? '#FFE4E1' :
              options?.includes('security-glass') ? '#B0C4DE' :
              options?.includes('privacy-glass') ? '#F0F8FF' :
              '#E0F6FF'
            }
            transparent={true}
            opacity={options?.includes('privacy-glass') ? 0.6 : 0.2}
            transmission={options?.includes('security-glass') ? 0.7 : 0.9}
            roughness={options?.includes('privacy-glass') ? 0.3 : 0}
            thickness={options?.includes('security-glass') ? 0.1 : 0.05}
          />
        </Box>
      )}

      {/* LED-Beleuchtung */}
      {options?.includes('led-lighting') && (
        <>
          <Box args={[0.05, 0.05, 0.1]} position={[0.8, 1.8, 0.1]} castShadow>
            <meshStandardMaterial color="#ffffff" emissive="#4FC3F7" emissiveIntensity={0.5} />
          </Box>
          <Box args={[0.05, 0.05, 0.1]} position={[-0.8, 1.8, 0.1]} castShadow>
            <meshStandardMaterial color="#ffffff" emissive="#4FC3F7" emissiveIntensity={0.5} />
          </Box>
          <pointLight position={[0.8, 1.8, 0.2]} intensity={0.3} color="#4FC3F7" />
          <pointLight position={[-0.8, 1.8, 0.2]} intensity={0.3} color="#4FC3F7" />
        </>
      )}

      {/* Türklinke */}
      <group position={[0.7, -0.1, 0.08]}>
        <Box args={[0.12, 0.04, 0.08]} castShadow>
          <meshStandardMaterial 
            color={options?.includes('smart-lock') ? '#FFD700' : '#C0C0C0'}
            metalness={0.9}
            roughness={0.1}
          />
        </Box>
        <Box args={[0.05, 0.02, 0.12]} position={[-0.08, 0, 0]} castShadow>
          <meshStandardMaterial 
            color={options?.includes('smart-lock') ? '#FFD700' : '#C0C0C0'}
            metalness={0.9}
            roughness={0.1}
          />
        </Box>
      </group>

      {/* Sicherheitsschloss Indikator */}
      {options?.includes('security-lock') && (
        <Box args={[0.1, 0.1, 0.03]} position={[0.6, -0.3, 0.08]} castShadow>
          <meshStandardMaterial color="#FF4500" emissive="#FF4500" emissiveIntensity={0.2} />
        </Box>
      )}

      {/* Smart Lock Display */}
      {options?.includes('smart-lock') && (
        <Box args={[0.2, 0.15, 0.02]} position={[0.6, 0.2, 0.08]} castShadow>
          <meshStandardMaterial color="#000000" emissive="#0000FF" emissiveIntensity={0.3} />
        </Box>
      )}

      {/* Boden */}
      <Plane args={[15, 15]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]} receiveShadow>
        <meshStandardMaterial 
          color="#e8eaf6" 
          roughness={0.9}
        />
      </Plane>
      
      {/* Wand im Hintergrund */}
      <Plane args={[8, 6]} position={[0, 1, -2]} receiveShadow>
        <meshStandardMaterial 
          color="#fafafa" 
          roughness={0.9}
        />
      </Plane>
    </group>
  )
}