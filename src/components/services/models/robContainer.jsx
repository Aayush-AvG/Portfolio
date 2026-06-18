import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"
import { Robot } from "./robot"

const RobContainer = () => {
  return (
    <Canvas>
         <Suspense fallback="loading...">
         <Stage environment={"night"} intensity={0.5} contactShadow={true} >
            <Robot/>
         </Stage>
 <OrbitControls enableZoom={false} autoRotate/>
 <PerspectiveCamera makeDefault position={[-1, 0, 1.8]} fov={50} zoom={0.7}/>
         </Suspense>
     </Canvas>
  )
}

export default RobContainer