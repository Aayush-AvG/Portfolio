import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Man(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/man.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Empty_1" position={[0.004, 3.004, -0.088]}>
                <group name="chair_0" position={[-0.041, -0.885, 0.123]} scale={0.754}>
                  <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials['Material.006']} />
                  <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Material.005']} />
                  <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Material.010']} />
                  <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Material.003']} />
                </group>
              </group>
              <group name="book_5" position={[-3.464, 4.562, 2.562]} rotation={[0, -0.177, 0]} scale={0.755}>
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials['Material.016']} />
                <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials['Material.015']} />
              </group>
              <group name="book2_6" position={[-3.448, 4.379, 2.795]} rotation={[0, -0.026, 0]} scale={0.755}>
                <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials['Material.014']} />
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials['Material.016']} />
              </group>
              <group name="laptop_8" position={[0.13, 4.352, 3.552]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.174, 0.127, 0.174]}>
                <group name="Plane002_7" position={[0, 0.143, -3.649]} rotation={[1.285, 0, 0]} scale={[1, 1.031, 1.348]}>
                  <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials['Material.001']} />
                  <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials['Material.009']} />
                  <mesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials.material_0} />
                </group>
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials['Material.001']} />
                <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials['Material.009']} />
              </group>
              <group name="Armature_92">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh name="Object_116" geometry={nodes.Object_116.geometry} material={materials.boots} skeleton={nodes.Object_116.skeleton} />
                  <skinnedMesh name="Object_117" geometry={nodes.Object_117.geometry} material={materials.pants} skeleton={nodes.Object_117.skeleton} />
                  <skinnedMesh name="Object_118" geometry={nodes.Object_118.geometry} material={materials.shirt} skeleton={nodes.Object_118.skeleton} />
                  <skinnedMesh name="Object_119" geometry={nodes.Object_119.geometry} material={materials.skin} skeleton={nodes.Object_119.skeleton} />
                  <skinnedMesh name="Object_120" geometry={nodes.Object_120.geometry} material={materials.mouth} skeleton={nodes.Object_120.skeleton} />
                </group>
              </group>
              <group name="Plane_93" position={[2.665, 4.425, 3.065]} rotation={[0, 0.362, 0]} scale={0.784}>
                <mesh name="Object_122" geometry={nodes.Object_122.geometry} material={materials.shirt} />
              </group>
              <group name="headphones_94" position={[-3.014, 4.794, 4.105]} rotation={[1.817, 0.093, 0.355]} scale={0.317}>
                <mesh name="Object_124" geometry={nodes.Object_124.geometry} material={materials['Material.009']} />
                <mesh name="Object_125" geometry={nodes.Object_125.geometry} material={materials['Material.006']} />
                <mesh name="Object_126" geometry={nodes.Object_126.geometry} material={materials['Material.003']} />
              </group>
              <group name="lamp_95" position={[3.131, 4.34, 4.844]} rotation={[-Math.PI, 0.705, -Math.PI]} scale={0.885}>
                <mesh name="Object_128" geometry={nodes.Object_128.geometry} material={materials['Material.012']} />
                <mesh name="Object_129" geometry={nodes.Object_129.geometry} material={materials['Material.003']} />
                <mesh name="Object_130" geometry={nodes.Object_130.geometry} material={materials['Material.010']} />
                <mesh name="Object_131" geometry={nodes.Object_131.geometry} material={materials.emission} />
              </group>
              <group name="mug_96" position={[-2.1, 4.284, 3.62]} rotation={[0, 1.383, 0]} scale={0.327}>
                <mesh name="Object_133" geometry={nodes.Object_133.geometry} material={materials['Material.010']} />
                <mesh name="Object_134" geometry={nodes.Object_134.geometry} material={materials['Material.007']} />
                <mesh name="Object_135" geometry={nodes.Object_135.geometry} material={materials['Material.003']} />
              </group>
              <group name="pencil_97" position={[2.599, 4.321, 3.159]} rotation={[-Math.PI / 2, Math.PI / 6, Math.PI]} scale={[-0.03, 0.349, 0.03]}>
                <mesh name="Object_137" geometry={nodes.Object_137.geometry} material={materials['Material.010']} />
                <mesh name="Object_138" geometry={nodes.Object_138.geometry} material={materials['Material.008']} />
                <mesh name="Object_139" geometry={nodes.Object_139.geometry} material={materials['Material.009']} />
              </group>
              <group name="phone_98" position={[3.618, 4.308, 2.543]} rotation={[-Math.PI, -0.187, -Math.PI]} scale={0.296}>
                <mesh name="Object_141" geometry={nodes.Object_141.geometry} material={materials['Material.009']} />
                <mesh name="Object_142" geometry={nodes.Object_142.geometry} material={materials['Material.006']} />
              </group>
              <group name="table_107" position={[-0.3, 2.567, 4.17]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.149, 1.865, 1.865]}>
                <group name="Cube001_103" position={[-18.215, 0.576, 0.203]} scale={[0.846, 1, 1]}>
                  <mesh name="Object_147" geometry={nodes.Object_147.geometry} material={materials['Material.002']} />
                  <mesh name="Object_148" geometry={nodes.Object_148.geometry} material={materials['Material.013']} />
                </group>
                <group name="Cube002_104" position={[-18.215, 0.08, 0.203]} scale={[0.846, 1, 1]}>
                  <mesh name="Object_150" geometry={nodes.Object_150.geometry} material={materials['Material.002']} />
                  <mesh name="Object_151" geometry={nodes.Object_151.geometry} material={materials['Material.013']} />
                </group>
                <group name="Cube004_105" position={[-18.215, -0.417, 0.248]} scale={[0.846, 1, 1]}>
                  <mesh name="Object_153" geometry={nodes.Object_153.geometry} material={materials['Material.002']} />
                  <mesh name="Object_154" geometry={nodes.Object_154.geometry} material={materials['Material.013']} />
                </group>
                <group name="Cube005_106" position={[-18.215, -0.913, 0.203]} scale={[0.846, 1, 1]}>
                  <mesh name="Object_156" geometry={nodes.Object_156.geometry} material={materials['Material.002']} />
                  <mesh name="Object_157" geometry={nodes.Object_157.geometry} material={materials['Material.013']} />
                </group>
                <mesh name="Object_144" geometry={nodes.Object_144.geometry} material={materials['Material.013']} />
                <mesh name="Object_145" geometry={nodes.Object_145.geometry} material={materials['Material.004']} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/man.glb')
