/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Model from '../Model/Model';
import './scene.css';

export default function Scene() {
  return (
    <Suspense fallback={null}>
      <Canvas className="can" camera={{ position: [80, 60, 60], fov: 1 }}>

        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 100]} />
        <Model />
        <OrbitControls />
        {/* <Environment preset="dawn" background /> */}

      </Canvas>
    </Suspense>

  );
}

// dawn: 'kiara/kiara_1_dawn_1k.hdr',
// night: 'dikhololo/dikhololo_night_1k.hdr',
// warehouse: 'empty-wharehouse/empty_warehouse_01_1k.hdr',
// forest: 'forrest-slope/forest_slope_1k.hdr',
// apartment: 'lebombo/lebombo_1k.hdr',
// studio: 'studio-small-3/studio_small_03_1k.hdr',
// city: 'potsdamer-platz/potsdamer_platz_1k.hdr',
// park: 'rooitou/rooitou_park_1k.hdr',
// lobby: 'st-fagans/st_fagans_interior_1k.hdr',
