import { GLTF } from 'three-stdlib';
import * as THREE from 'three';

/**
 * Tipagem estendida para o seu modelo Droid (Robot Playground)
 * Baseado na análise do 'scene.gltf' que possui múltiplas malhas (Mesh) e não SkinnedMesh.
 */
export type DroidGLTFResult = GLTF & {
  nodes: {
    // Malhas do corpo do robô (Robot Playground usa Object_X)
    Object_2: THREE.Mesh; 
    Object_3: THREE.Mesh; 
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    // ... e outros, se houver, mas estes são os principais meshes
  };
  materials: {
    // Materiais
    Material: THREE.MeshStandardMaterial; // Material principal
    Holo1: THREE.MeshStandardMaterial;    // Material emissivo/holográfico
  };
  animations: THREE.AnimationClip[];
};