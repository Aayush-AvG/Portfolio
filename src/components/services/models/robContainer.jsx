import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { Robot } from "./robot"
import { OrbitControls, PerspectiveCamera, Stage, AdaptiveDpr, Stats } from "@react-three/drei"

const isMob = () => /Mobi|Android/i.test(navigator.userAgent)

const RobContainer = () => {
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
          <Robot />
        </Stage>
      </Suspense>
    </Canvas>
  )
}

export default RobContainer