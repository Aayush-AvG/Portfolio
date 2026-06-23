import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { Man } from "./Man"
import { OrbitControls, PerspectiveCamera, Stage, AdaptiveDpr, Stats } from "@react-three/drei"

const isMob = () => /Mobi|Android/i.test(navigator.userAgent)

const ManContainer = () => {
  const mobile = useRef(isMob())

  return (
    <Canvas
      dpr={[1, mobile.current ? 1.5 : 2]}
      gl={{ antialias: !mobile.current, powerPreference: "high-performance" }}
    >
      <AdaptiveDpr pixelated />

      {/* These MUST be outside Suspense */}
      <PerspectiveCamera makeDefault position={[-1, 0, 1.8]} fov={50} zoom={0.7} />
      <OrbitControls enableZoom={false} autoRotate regress />

      <Suspense fallback={null}>
        <Stage
          environment="night"
          intensity={0.5}
          contactShadow={!mobile.current}
        >
          <Man />
        </Stage>
      </Suspense>
    </Canvas>
  )
}

export default ManContainer