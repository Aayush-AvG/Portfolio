import { Canvas } from "@react-three/fiber"
import { Suspense, useState, useEffect, useRef } from "react"
import { Laptop } from "./Laptop"
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, AdaptiveDpr } from "@react-three/drei"

const isMob = () => /Mobi|Android/i.test(navigator.userAgent)

const LapContainer = () => {
  const [isMd, setIsMd] = useState(false)
  const mobile = useRef(isMob())

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)")
    const handle = (e) => setIsMd(e.matches)
    setIsMd(mq.matches)
    mq.addEventListener("change", handle)
    return () => mq.removeEventListener("change", handle)
  }, [])

  return (
    <Canvas
      dpr={[1, mobile.current ? 1.5 : 2]}
      gl={{ antialias: !mobile.current, powerPreference: "high-performance" }}
      style={{ touchAction: "none" }}
    >
      <AdaptiveDpr pixelated />

      <PerspectiveCamera makeDefault position={[-6.5, 2, 7]} fov={50} zoom={isMd ? 0.5 : 1} />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.5}
        enableDamping
        dampingFactor={0.05}
        regress
      />

      <Suspense fallback={null}>
        <Environment preset="night" />
        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 3, 2]} intensity={1} />
        <directionalLight position={[-2, 1, -1]} intensity={0.3} />
        <Laptop />
        {!mobile.current && (
          <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={10} blur={1.5} />
        )}
      </Suspense>
    </Canvas>
  )
}

export default LapContainer