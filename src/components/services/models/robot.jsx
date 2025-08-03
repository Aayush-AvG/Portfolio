import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Robot(props) {
  const { nodes, materials } = useGLTF('/ai_robot.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.24, 0.012]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, -0.001, 0.094]}>
          <mesh geometry={nodes.Antenna_Antenna_0.geometry} material={materials.Antenna} />
          <mesh geometry={nodes.Antenna_Holder_0.geometry} material={materials.Holder} />
          <mesh geometry={nodes.Antenna_light_0.geometry} material={materials.light} />
        </group>
        <mesh geometry={nodes.Head_Head_0.geometry} material={materials.Head} />
        <mesh geometry={nodes.Head_EyeBorder_0.geometry} material={materials.EyeBorder} />
        <mesh geometry={nodes.Head_Ears_0.geometry} material={materials.Ears} />
        <mesh geometry={nodes.Head_Eyes_0.geometry} material={materials.Eyes} />
      </group>
      <group position={[-0.049, 0.047, -0.003]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.RightWheel_Wheelmat_0.geometry} material={materials.Wheelmat} />
        <mesh geometry={nodes.RightWheel_wheelHolderMAt_0.geometry} material={materials.wheelHolderMAt} />
      </group>
      <group position={[-0.054, 0.145, -0.002]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.LeftArm_HandCircleMat_0.geometry} material={materials.HandCircleMat} />
        <mesh geometry={nodes.LeftArm_AfterCircleMat_0.geometry} material={materials.AfterCircleMat} />
        <mesh geometry={nodes.LeftArm_ForeArmMat_0.geometry} material={materials.ForeArmMat} />
        <mesh geometry={nodes.LeftArm_FingersMAt_0.geometry} material={materials.FingersMAt} />
        <mesh geometry={nodes.LeftArm_HandMad_0.geometry} material={materials.HandMad} />
      </group>
      <group position={[0.049, 0.047, -0.003]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.LeftWheel_Wheelmat_0.geometry} material={materials.Wheelmat} />
        <mesh geometry={nodes.LeftWheel_wheelHolderMAt_0.geometry} material={materials.wheelHolderMAt} />
      </group>
      <group position={[0.054, 0.145, -0.002]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.RightArm_HandCircleMat_0.geometry} material={materials.HandCircleMat} />
        <mesh geometry={nodes.RightArm_AfterCircleMat_0.geometry} material={materials.AfterCircleMat} />
        <mesh geometry={nodes.RightArm_ForeArmMat_0.geometry} material={materials.ForeArmMat} />
        <mesh geometry={nodes.RightArm_FingersMAt_0.geometry} material={materials.FingersMAt} />
        <mesh geometry={nodes.RightArm_HandMad_0.geometry} material={materials.HandMad} />
      </group>
      <mesh geometry={nodes.Chest_chestMat_0.geometry} material={materials.chestMat} position={[0, 0.135, 0.006]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Hips_hipsMat_0.geometry} material={materials.hipsMat} position={[0, 0.065, 0.009]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Neck_Neck_0.geometry} material={materials.Neck} position={[0.001, 0.174, 0.006]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.MidSpine_midSpineMat_0.geometry} material={materials.midSpineMat} position={[0, 0.096, 0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={1.053} />
    </group>
  )
}

useGLTF.preload('/ai_robot.glb')
