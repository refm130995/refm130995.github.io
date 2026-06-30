import { Canvas } from '@react-three/fiber'
import { Float, ContactShadows, PresentationControls } from '@react-three/drei'
import { Cat } from './Cat'

/**
 * Escena 3D del hero. Iluminación cálida acorde a la paleta (ámbar sobre
 * espresso), sombra de contacto suave y un point light que simula el brillo
 * de la pantalla de la laptop. PresentationControls deja inclinar la escena
 * arrastrando, sin perder el encuadre.
 */
export default function CatScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.4, 4.2], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 5, 4]} intensity={1.4} castShadow />
      <directionalLight position={[-4, 2, -2]} intensity={0.3} color="#bfe8df" />
      {/* Glow de la pantalla iluminando al gato */}
      <pointLight position={[0, 0, 0.4]} intensity={2.4} distance={3} color="#2dd4bf" />

      <PresentationControls
        global
        polar={[-0.2, 0.3]}
        azimuth={[-0.6, 0.6]}
        config={{ mass: 1, tension: 180, friction: 26 }}
      >
        <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.4}>
          <Cat />
        </Float>
      </PresentationControls>

      <ContactShadows
        position={[0, -1.15, 0]}
        opacity={0.45}
        scale={6}
        blur={2.6}
        far={2}
        color="#000000"
      />
    </Canvas>
  )
}
