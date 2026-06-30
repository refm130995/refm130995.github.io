import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

const FUR = '#9b7a55'
const FUR_DARK = '#7d6042'
const MUZZLE = '#6b513a'
const NOSE = '#33271d'
const EYE = '#1b1714'
const LAPTOP = '#23262f'
const SCREEN = '#2dd4bf'

/**
 * Capibara low-poly construido sólo con primitivas (sin assets externos).
 * Rasgos clave del capibara: cuerpo de barril, cabeza ancha y rectangular,
 * hocico romo y grande, orejas pequeñas redondeadas, sin cola.
 * Animaciones por useFrame: tecleo de las patas, orejas que tiemblan,
 * parpadeo, respiración y cabeza que sigue el puntero.
 */
export function Capybara() {
  const root = useRef<THREE.Group>(null)
  const head = useRef<THREE.Group>(null)
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
      root.current.position.y = -0.1 + Math.sin(t * 1.4) * 0.035
      root.current.rotation.z = Math.sin(t * 0.7) * 0.015
    }

    // Cabeza sigue el puntero (suavizado, tranquila como buen capibara)
    if (head.current) {
      const ty = pointer.x * 0.45
      const tx = -pointer.y * 0.22 + 0.04
      head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, ty, 0.07)
      head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, tx, 0.07)
    }

    // Tecleo: patas delanteras suben y bajan en alternancia
    const typeL = Math.max(0, Math.sin(t * 8)) * 0.08
    const typeR = Math.max(0, Math.sin(t * 8 + Math.PI)) * 0.08
    if (pawL.current) pawL.current.position.y = -0.34 + typeL
    if (pawR.current) pawR.current.position.y = -0.34 + typeR

    // Orejas: pequeño twitch ocasional
    const twitch = Math.sin(t * 0.6) > 0.95 ? Math.sin(t * 38) * 0.1 : 0
    if (earL.current) earL.current.rotation.z = 0.15 + twitch
    if (earR.current) earR.current.rotation.z = -0.15 - twitch

    // Parpadeo cada ~3.8 s
    const blink = t % 3.8 < 0.12 ? 0.1 : 1
    if (eyeL.current) eyeL.current.scale.y = THREE.MathUtils.lerp(eyeL.current.scale.y, blink, 0.5)
    if (eyeR.current) eyeR.current.scale.y = THREE.MathUtils.lerp(eyeR.current.scale.y, blink, 0.5)
  })

  return (
    <group ref={root} rotation={[0, -0.4, 0]} position={[0, -0.1, 0]}>
      {/* Cuerpo de barril, sentado */}
      <RoundedBox args={[1.08, 0.98, 0.86]} radius={0.34} smoothness={4} position={[0, 0.02, -0.16]} castShadow>
        <meshStandardMaterial color={FUR} flatShading roughness={0.92} />
      </RoundedBox>
      {/* Vientre / pecho más claro */}
      <RoundedBox args={[0.66, 0.7, 0.3]} radius={0.24} smoothness={4} position={[0, -0.08, 0.26]}>
        <meshStandardMaterial color={FUR_DARK} flatShading roughness={0.95} />
      </RoundedBox>

      {/* Cabeza: ancha, baja y rectangular (sello del capibara) */}
      <group ref={head} position={[0, 0.66, 0.06]}>
        <RoundedBox args={[0.86, 0.6, 0.74]} radius={0.16} smoothness={4} castShadow>
          <meshStandardMaterial color={FUR} flatShading roughness={0.9} />
        </RoundedBox>

        {/* Hocico romo y grande proyectado hacia adelante */}
        <RoundedBox args={[0.6, 0.42, 0.42]} radius={0.14} smoothness={4} position={[0, -0.12, 0.46]} castShadow>
          <meshStandardMaterial color={MUZZLE} flatShading roughness={0.9} />
        </RoundedBox>

        {/* Nariz: bloque oscuro y ancho al frente del hocico */}
        <RoundedBox args={[0.42, 0.2, 0.12]} radius={0.07} smoothness={3} position={[0, -0.04, 0.69]}>
          <meshStandardMaterial color={NOSE} flatShading roughness={0.6} />
        </RoundedBox>
        {/* Fosas nasales */}
        <mesh position={[-0.1, -0.02, 0.75]}>
          <sphereGeometry args={[0.028, 8, 8]} />
          <meshStandardMaterial color="#1a130d" />
        </mesh>
        <mesh position={[0.1, -0.02, 0.75]}>
          <sphereGeometry args={[0.028, 8, 8]} />
          <meshStandardMaterial color="#1a130d" />
        </mesh>

        {/* Orejas: pequeñas y redondeadas, en lo alto a los lados */}
        <group ref={earL} position={[-0.34, 0.32, -0.04]}>
          <mesh castShadow>
            <sphereGeometry args={[0.12, 12, 12]} />
            <meshStandardMaterial color={FUR_DARK} flatShading roughness={0.9} />
          </mesh>
        </group>
        <group ref={earR} position={[0.34, 0.32, -0.04]}>
          <mesh castShadow>
            <sphereGeometry args={[0.12, 12, 12]} />
            <meshStandardMaterial color={FUR_DARK} flatShading roughness={0.9} />
          </mesh>
        </group>

        {/* Ojos: pequeños, en alto y hacia los lados */}
        <mesh ref={eyeL} position={[-0.3, 0.14, 0.3]}>
          <sphereGeometry args={[0.085, 16, 16]} />
          <meshStandardMaterial color={EYE} />
        </mesh>
        <mesh ref={eyeR} position={[0.3, 0.14, 0.3]}>
          <sphereGeometry args={[0.085, 16, 16]} />
          <meshStandardMaterial color={EYE} />
        </mesh>
      </group>

      {/* Patas delanteras: cortas y robustas, apoyadas sobre el teclado */}
      <group ref={pawL} position={[-0.23, -0.34, 0.56]}>
        <RoundedBox args={[0.22, 0.2, 0.3]} radius={0.08} smoothness={3} castShadow>
          <meshStandardMaterial color={FUR_DARK} flatShading roughness={0.95} />
        </RoundedBox>
      </group>
      <group ref={pawR} position={[0.23, -0.34, 0.56]}>
        <RoundedBox args={[0.22, 0.2, 0.3]} radius={0.08} smoothness={3} castShadow>
          <meshStandardMaterial color={FUR_DARK} flatShading roughness={0.95} />
        </RoundedBox>
      </group>

      {/* Laptop: teclado frente al capibara, pantalla se abre HACIA él.
          La bisagra está en el borde lejano (lado de la cámara, z+); la
          pantalla se inclina sobre el teclado con su cara emisiva mirando
          al capibara (-z), de modo que el brillo lo ilumina. */}
      <group position={[0, -0.46, 0.56]}>
        {/* teclado / base */}
        <RoundedBox args={[1.0, 0.07, 0.62]} radius={0.03} smoothness={3} receiveShadow>
          <meshStandardMaterial color={LAPTOP} metalness={0.35} roughness={0.45} />
        </RoundedBox>
        {/* pantalla: se levanta casi vertical desde el borde frontal (z+),
            inclinada hacia el capibara. Bisagra en y≈0, placa hacia +y. */}
        <group position={[0, 0.03, 0.3]} rotation={[-0.32, 0, 0]}>
          <RoundedBox args={[1.0, 0.62, 0.045]} radius={0.025} smoothness={3} position={[0, 0.31, 0]} castShadow>
            <meshStandardMaterial color={LAPTOP} metalness={0.35} roughness={0.45} />
          </RoundedBox>
          {/* cara emisiva en -z (mira al capibara) */}
          <mesh position={[0, 0.31, -0.026]} rotation={[0, Math.PI, 0]}>
            <planeGeometry args={[0.86, 0.5]} />
            <meshStandardMaterial color={SCREEN} emissive={SCREEN} emissiveIntensity={0.9} toneMapped={false} />
          </mesh>
        </group>
      </group>
    </group>
  )
}
