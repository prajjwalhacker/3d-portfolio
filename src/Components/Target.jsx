/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


function Target(props) {
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');
  const targetRef = useRef(null);

  useGSAP(() => {
     gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y  + 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true
     })
  })

  return (
    <mesh {...props} ref={targetRef}>
      <primitive object={scene}  />
    </mesh>
  )
}

export default Target;

