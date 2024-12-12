/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../Components/Hackerroom"
import { Suspense } from "react"
import CanvasLoader from "../Components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import { Float} from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Atom } from "./StartReact"
import Target from "../Components/Target"
import { calculateSizes } from "../constant"
import ReactLogo from "../Components/ReactLogo"
import Cube from "../Components/Cube"
import HeroCamera from "../Components/HeroCamera"

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 });


  const sizes = calculateSizes(isSmall, isMobile, isTablet);


  return (
    <section className="min-h-screen flex flex-col w-full relative" id='hero'>
       <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
         <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans bouncing-text">
           Hi, I am Prajjwal Soni <span className="waving-hand">👋</span>
         </p>
         <p className="hero_tag text-gray_gradient bouncing-text">
            Senior FullStack Engineer
         </p>
        </div>
        <div className="w-full h-full absolute inset-0 pt-20">
          <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader/>}>
          <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
          <HeroCamera>
          <HackerRoom scale={isMobile ? 0.07: 0.095} position={[2, -8, 2]} rotation={[0, -Math.PI, 0]}/>
          </HeroCamera>
          <group>
             <Target position={sizes.targetPosition} scale={4.5}/>
             <ReactLogo position={sizes.reactLogoPosition} />
             <Cube position={sizes.cubePosition}/>
          </group>
          <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Atom />
      </Float>
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
      </EffectComposer>
          <ambientLight intensity={1}/>
          <directionalLight position={[10, 10, 10]} intensity={0.5}/>
          </Suspense>
          </Canvas>   
        </div>   
    </section>
  )
}

export default Hero