/* eslint-disable react/no-unknown-property */
import { Html } from "@react-three/drei"

const CanvasLoader = () => {
//   const { progress } = useProgress();

  return (
    <Html as='div' center style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <sphereGeometry args={[0.5, 32, 32]} />
    </Html>
  )
}

export default CanvasLoader