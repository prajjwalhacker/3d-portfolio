/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../Components/Hackerroom"
import { Suspense } from "react"
import CanvasLoader from "../Components/CanvasLoader"
import { OrbitControls } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <section className="min-h-screen flex flex-col w-full relative">
       <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
         <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
           Hi, I am Prajjwal <span className="waving-hand">👋</span>
         </p>
         <p className="hero_tag text-gray_gradient">
            Building Products in Startups
         </p>
        </div>
        <div className="w-full h-full absolute inset-0 pt-20">
          <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader/>}>
          <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
          <HackerRoom scale={isMobile ? 0.07: 0.095} position={[2, -8, 2]} rotation={[0, -Math.PI, 0]}/>
          <ambientLight intensity={1}/>
          <directionalLight position={[10, 10, 10]} intensity={0.5}/>
          <OrbitControls enablePan enableZoom enabled/>
          </Suspense>
          </Canvas>   
        </div>   
    </section>
  )
}

export default Hero