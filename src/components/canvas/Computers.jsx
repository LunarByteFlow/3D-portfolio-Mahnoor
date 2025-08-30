import { Suspense, useEffect,useState } from 'react';
import { Canvas } from '@react-three/fiber'; 
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');

  //const computer = useGLTF('./desktop_pc/scene.gltf'); // ✅ Use correct path for GLTF model 

  return (
    <mesh>

      <hemisphereLight intensity={1} groundColor='white' />  
      {/* ✅ Use hemisphereLight for ambient light */}
      {/* ✅ Use directionalLight for main light source */} 
      <ambientLight intensity={0.25} />
      <directionalLight
        position={[0, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024} // ✅ Use shadow-mapSize-width & height
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001} // ✅ Adjust shadow bias to reduce artifacts
      />
      <spotLight 
        position={[-20, 20, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024} // ✅ Use shadow-mapSize-width & height
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />

      <pointLight intensity={1} />
      <primitive 
        object={computer.scene} 
        scale={isMobile? 0.7 : 0.75}
        position={isMobile ? [0,-3,-2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow // ✅ Enable shadow casting
        receiveShadow // ✅ Enable shadow receiving
        dispose={null} // ✅ Prevent memory leaks

      />
      
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

  return (
    <Canvas // ✅ FIXED: Use `<Canvas>` from @react-three/fiber, not `<canvas>`
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
