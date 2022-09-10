/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef();
  useFrame(() => { group.current.rotation.z += 0.003; }, []);
  const { nodes, materials } = useGLTF('/CGUniverse_pack_1/wow_axe/wow_axe.gltf');
  //   console.log(useGLTF('/genshin_light_Separate.gltf').meshes);
  console.log('NODES', nodes);
  // console.log('MATERIAL', (materials));
  const keyArr = Object.keys(nodes);
  // console.log(keyArr);
  const meshArr = [];
  for (let i = 0; i < keyArr.length; i += 1) {
    // console.log(nodes[keyArr[i]]);
    if (nodes[keyArr[i]].type === 'Mesh') {
      meshArr.push(nodes[keyArr[i]]);
    }
  }
  const materialKeys = Object.keys(materials);
  console.log(materialKeys);
  // console.log(meshArr);
  //   meshArr.map((el) => console.log(el));
  return (
    <group ref={group} {...props} dispose={null} scale={0.4}>
      {meshArr.map((mesh) => (
        <mesh
          castShadow
          receiveShadow
          geometry={mesh.geometry}
          position={mesh.position}
          material={materials[materialKeys]}
        />
      ))}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={meshArr[2].geometry}
        // material={materials['Material.001']}
      /> */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_2.geometry}
        material={materials['Material.002']}
      /> */}
    </group>
  );
}

useGLTF.preload('CGUniverse_pack_1/wow_axe/wow_axe.gltf');
