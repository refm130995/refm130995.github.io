import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

const FUR = '#8b94a3'
const FUR_LIGHT = '#ccd2db'
const EAR_PINK = '#e0a6ad'
const EYE = '#1b232e'
const LAPTOP = '#23262f'
const SCREEN = '#2dd4bf'

/**
 * Gato low-poly construido sólo con primitivas (sin assets externos).
 * Animaciones por useFrame: tecleo de las patas, cola y orejas que se mueven,
 * parpadeo, respiración y cabeza que sigue el puntero.
 */
export function Cat() {
  const root = useRef<THREE.Group>(null)
  const head = useRef<THREE.Group>(null)
  const tail = useRef<THREE.Group>(null)
  const pawL = useRef<THREE.Group>(null)
  const pawR = useRef<THREE.Group>(null)
  const earL = useRef<THREE.Group>(null)
  const earR = useRef<THREE.Group>(null)
  const eyeL = useRef<THREE.Mesh>(null)
  const eyeR = useRef<THREE.Mesh>(null)

  const { pointer } = useThree()

  useFrame((state) => {
    const t = state.clock.elapsedTime

    // Respiración / leve balanceo del cuerpo
    if (root.current) {
      root.current.position.y = Math.sin(t * 1.6) * 0.04
      root.current.rotation.z = Math.sin(t * 0.8) * 0.02
    }

    // Cabeza sigue el puntero (suavizado)
    if (head.current) {
      const ty = pointer.x * 0.5
      const tx = -pointer.y * 0.25 + 0.05
      head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, ty, 0.08)
      head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, tx, 0.08)
    }

    // Tecleo: patas delanteras suben y bajan en alternancia
    const typeL = Math.max(0, Math.sin(t * 9)) * 0.09
    const typeR = Math.max(0, Math.sin(t * 9 + Math.PI)) * 0.09
    if (pawL.current) pawL.current.position.y = -0.32 + typeL
    if (pawR.current) pawR.current.position.y = -0.32 + typeR

    // Cola ondulante (oscila alrededor de la vertical)
    if (tail.current) tail.current.rotation.z = Math.sin(t * 2.2) * 0.28

    // Orejas: pequeño twitch ocasional
    const twitch = Math.sin(t * 0.7) > 0.96 ? Math.sin(t * 40) * 0.12 : 0
    if (earL.current) earL.current.rotation.z = 0.25 + twitch
    if (earR.current) earR.current.rotation.z = -0.25 - twitch

    // Parpadeo cada ~3.6 s
    const blink = t % 3.6 < 0.12 ? 0.1 : 1
    if (eyeL.current) eyeL.current.scale.y = THREE.MathUtils.lerp(eyeL.current.scale.y, blink, 0.5)
    if (eyeR.current) eyeR.current.scale.y = THREE.MathUtils.lerp(eyeR.current.scale.y, blink, 0.5)
  })

  return (
    <group ref={root} rotation={[0, -0.4, 0]} position={[0, -0.1, 0]}>
      {/* Cuerpo sentado */}
      <RoundedBox args={[0.95, 1.0, 0.8]} radius={0.32} smoothness={4} position={[0, 0.05, -0.15]} castShadow>
        <meshStandardMaterial color={FUR} flatShading roughness={0.85} />
      </RoundedBox>
      {/* Vientre claro */}
      <RoundedBox args={[0.6, 0.7, 0.3]} radius={0.22} smoothness={4} position={[0, -0.05, 0.25]}>
        <meshStandardMaterial color={FUR_LIGHT} flatShading roughness={0.9} />
      </RoundedBox>

      {/* Cabeza */}
      <group ref={head} position={[0, 0.75, 0.05]}>
        <RoundedBox args={[0.85, 0.78, 0.78]} radius={0.3} smoothness={4} castShadow>
          <meshStandardMaterial color={FUR} flatShading roughness={0.85} />
        </RoundedBox>

        {/* Orejas */}
        <group ref={earL} position={[-0.3, 0.42, 0]}>
          <mesh castShadow>
            <coneGeometry args={[0.22, 0.4, 4]} />
            <meshStandardMaterial color={FUR} flatShading roughness={0.85} />
          </mesh>
          <mesh position={[0, -0.02, 0.05]} scale={0.6}>
            <coneGeometry args={[0.22, 0.4, 4]} />
            <meshStandardMaterial color={EAR_PINK} flatShading />
          </mesh>
        </group>
        <group ref={earR} position={[0.3, 0.42, 0]}>
          <mesh castShadow>
            <coneGeometry args={[0.22, 0.4, 4]} />
            <meshStandardMaterial color={FUR} flatShading roughness={0.85} />
          </mesh>
          <mesh position={[0, -0.02, 0.05]} scale={0.6}>
            <coneGeometry args={[0.22, 0.4, 4]} />
            <meshStandardMaterial color={EAR_PINK} flatShading />
          </mesh>
        </group>

        {/* Ojos */}
        <mesh ref={eyeL} position={[-0.2, 0.05, 0.39]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color={EYE} />
        </mesh>
        <mesh ref={eyeR} position={[0.2, 0.05, 0.39]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color={EYE} />
        </mesh>

        {/* Hocico + nariz */}
        <mesh position={[0, -0.12, 0.4]}>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color={FUR_LIGHT} flatShading />
        </mesh>
        <mesh position={[0, -0.1, 0.52]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color={EAR_PINK} />
        </mesh>
      </group>

      {/* Patas delanteras: apoyadas sobre el teclado */}
      <group ref={pawL} position={[-0.22, -0.34, 0.56]}>
        <RoundedBox args={[0.2, 0.2, 0.3]} radius={0.09} smoothness={3} castShadow>
          <meshStandardMaterial color={FUR_LIGHT} flatShading roughness={0.9} />
        </RoundedBox>
      </group>
      <group ref={pawR} position={[0.22, -0.34, 0.56]}>
        <RoundedBox args={[0.2, 0.2, 0.3]} radius={0.09} smoothness={3} castShadow>
          <meshStandardMaterial color={FUR_LIGHT} flatShading roughness={0.9} />
        </RoundedBox>
      </group>

      {/* Cola: nace en la base trasera del cuerpo y se enrosca hacia arriba,
          pegada al lomo (no cuelga como un brazo). */}
      <group ref={tail} position={[0.28, -0.35, -0.42]}>
        <mesh position={[0, 0.28, -0.05]} rotation={[0.4, 0, 0.15]} castShadow>
          <capsuleGeometry args={[0.09, 0.55, 4, 8]} />
          <meshStandardMaterial color={FUR} flatShading roughness={0.85} />
        </mesh>
        <mesh position={[0.02, 0.6, 0.15]} rotation={[1.1, 0, 0.5]}>
          <capsuleGeometry args={[0.085, 0.4, 4, 8]} />
          <meshStandardMaterial color={FUR_LIGHT} flatShading />
        </mesh>
      </group>

      {/* Laptop: teclado frente al gato, pantalla se abre HACIA el gato.
          La bisagra está en el borde lejano (lado de la cámara, z+); la
          pantalla se inclina sobre el teclado con su cara emisiva mirando
          al gato (-z), de modo que el brillo lo ilumina. */}
      <group position={[0, -0.46, 0.56]}>
        {/* teclado / base */}
        <RoundedBox args={[1.0, 0.07, 0.62]} radius={0.03} smoothness={3} receiveShadow>
          <meshStandardMaterial color={LAPTOP} metalness={0.35} roughness={0.45} />
        </RoundedBox>
        {/* pantalla: se levanta casi vertical desde el borde frontal (z+),
            inclinada hacia el gato. Bisagra en y≈0, placa hacia +y. */}
        <group position={[0, 0.03, 0.3]} rotation={[-0.32, 0, 0]}>
          <RoundedBox args={[1.0, 0.62, 0.045]} radius={0.025} smoothness={3} position={[0, 0.31, 0]} castShadow>
            <meshStandardMaterial color={LAPTOP} metalness={0.35} roughness={0.45} />
          </RoundedBox>
          {/* cara emisiva en -z (mira al gato) */}
          <mesh position={[0, 0.31, -0.026]} rotation={[0, Math.PI, 0]}>
            <planeGeometry args={[0.86, 0.5]} />
            <meshStandardMaterial color={SCREEN} emissive={SCREEN} emissiveIntensity={0.9} toneMapped={false} />
          </mesh>
        </group>
      </group>
    </group>
  )
}
