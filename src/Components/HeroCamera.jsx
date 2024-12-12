import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ children }) => {
  
  const heroRef= useRef(null);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.2,delta);
  })



  return (
    <group ref={heroRef} scale={0.8}>{children}</group>
  )
}

export default HeroCamera