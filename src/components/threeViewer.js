import React, { useState, useRef, useEffect, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update()
  });

  return (
    <orbitControls 
      autorotate
      // maxPolarAngle={Math.PI/3}
      minPolarAngle={Math.PI/3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
};

const Blocks = () => {
  const { scene } = useLoader(GLTFLoader, '/blocks.glb')
  const group = useRef()

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} />
    </group>
  )
}

export default () => (
  <div id='three-frame' className='fixed z-0 top-0 left-0 w-full h-full'>
    <Canvas camera={{fov: 40, position: [0, 5, 0], near: 0.1, far: 2000}}>
      <Controls />
      <hemisphereLight args={[0xf3efdc, 0xffffff, 0.75]} target={[0,0,0.5]}/>
      <directionalLight args={[0xffffff, 0.75]} />
      {/* <spotLight position={[0, 10, 0]} penumbra={0.5} intensity={0.5} /> */}
      <Suspense fallback={null}>
        <Blocks />
      </Suspense>
    </Canvas>
  </div>
)