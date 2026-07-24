import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { LoopOnce } from "three";
import * as THREE from "three";

useGLTF.setDecoderPath('/draco/');

export function Laptop(props) {
  const group = useRef();

  const { nodes, materials, animations } = useGLTF("/laptop.glb");
  const { actions, names } = useAnimations(animations, group);
  const screenTexture = useTexture("/ss.webp");

  // Only apply texture transforms once per texture load, not on every render
  useEffect(() => {
    screenTexture.repeat.set(2, 2);
    screenTexture.offset.set(-0.5, -0.5);
  }, [screenTexture]);

  useEffect(() => {
    if (names.length > 0) {
      const action = actions[names[0]];

      if (action) {
        action.reset();
        action.setLoop(LoopOnce, 1);
        action.clampWhenFinished = true;
        action.play();
      }
    }
  }, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Armature002_11"
                position={[0, -0.122, -1.257]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />

                  <skinnedMesh
                    geometry={nodes.Object_7.geometry}
                    material={materials.body}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_8.geometry}
                    material={materials.motif}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_9.geometry}
                    material={materials.blacc}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_10.geometry}
                    material={materials.motif_non}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_11.geometry}
                    material={materials.kaki}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_12.geometry}
                    material={materials.text}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_13.geometry}
                    material={materials.light_on}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_14.geometry}
                    material={materials.off_light}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_15.geometry}
                    material={materials["usb.001"]}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_16.geometry}
                    material={materials["Material.005"]}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_17.geometry}
                    material={materials.metal_lagi}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_18.geometry}
                    material={materials.metal}
                    skeleton={nodes.Object_18.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_19.geometry}
                    material={materials.plasct}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_20.geometry}
                    material={materials.pendingin_keknya}
                    skeleton={nodes.Object_20.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_21.geometry}
                    material={materials.pendingin_keknya}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_22.geometry}
                    material={materials.pendingin_keknya}
                    skeleton={nodes.Object_22.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_23.geometry}
                    material={materials.pendingin_keknya}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_24.geometry}
                    material={materials.pendingin_keknya}
                    skeleton={nodes.Object_24.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_25.geometry}
                    material={materials["blacc.001"]}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_26.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_26.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_27.geometry}
                    material={materials.material_16}
                    skeleton={nodes.Object_27.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_28.geometry}
                    material={materials.motif_v23}
                    skeleton={nodes.Object_28.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_29.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_31.geometry}
                    material={materials.body}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_33.geometry}
                    material={materials.body}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_34.geometry}
                    material={materials.motif}
                    skeleton={nodes.Object_34.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_35.geometry}
                    material={materials.motif_2}
                    skeleton={nodes.Object_35.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_36.geometry}
                    material={materials.display_q}
                    skeleton={nodes.Object_36.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_37.geometry}
                    material={materials.display_mirror}
                    skeleton={nodes.Object_37.skeleton}
                  />
                 <skinnedMesh
                   geometry={nodes.Object_38.geometry}
                   skeleton={nodes.Object_38.skeleton}
                >
                  <meshBasicMaterial map={screenTexture} />
                </skinnedMesh>
                  <skinnedMesh
                    geometry={nodes.Object_39.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_39.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_40.geometry}
                    material={materials["Material.012"]}
                    skeleton={nodes.Object_40.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_41.geometry}
                    material={materials["Material.013"]}
                    skeleton={nodes.Object_41.skeleton}
                  />

                  <group name="body_8" />
                  <group name="engsel_9" />
                  <group name="monitor_10" />
                </group>
              </group>

              <group
                name="Empty002_12"
                position={[0, 1.402, 0]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={1.103}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/laptop.glb");
