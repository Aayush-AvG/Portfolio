import { Canvas } from "@react-three/fiber"
import { Suspense, useState, useEffect } from "react"
import { Laptop } from "./Laptop"
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei"

const LapContainer = () => {

    const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = (e) => setIsMd(e.matches);

    setIsMd(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return (
    <Canvas style={{ touchAction: "none" }}>
  

      {/* Outside Suspense so camera is always stable */}
      <PerspectiveCamera makeDefault position={[-6.5, 2, 7]} fov={50} zoom={isMd ? 0.5 : 1}/>
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.5}
        enableDamping
        dampingFactor={0.05}
      />

      <Suspense fallback={null}>
        <Environment preset="night" />
        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 3, 2]} intensity={1} />
        <directionalLight position={[-2, 1, -1]} intensity={0.3} />
        <Laptop />
        <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={10} blur={1.5} />
      </Suspense>

    </Canvas>
  )
}

export default LapContainer