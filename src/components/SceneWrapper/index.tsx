"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Droid } from "@/components/Droid";

/**
 * Componente que configura o <Canvas> do R3F, iluminação e ambiente.
 */
export const SceneWrapper: React.FC = () => {
  return (
    <Canvas 
      className='z-40 mt-50'
      // HABILITA TRANSPARÊNCIA: gl={{ alpha: true }} permite que o fundo seja transparente
      gl={{ alpha: true }}
      // flat previne problemas de tone-mapping (boa prática)
      flat
      // Configuração inicial da câmera
      camera={{ position: [0, 0, 5], fov: 50 }} 
      // Configurações de performance, se necessário
      // dpr={[1, 2]}
    >
      {/* O Suspense é NECESSÁRIO porque o useGLTF carrega o modelo assincronamente */}
      <Suspense fallback={
        // Opcional: Um fallback simples enquanto o modelo carrega
        <mesh>
            <boxGeometry />
            <meshBasicMaterial color="gray" />
        </mesh>
      }>
        
        {/* ILUMINAÇÃO */}
        <ambientLight intensity={1} /> {/* Luz ambiente suave */}
        <spotLight 
            position={[5, 10, 5]} 
            angle={0.5} 
            penumbra={1} 
            intensity={100} 
            castShadow 
        />
        
        {/* AMBIENTE: Removemos a prop 'background' para permitir a transparência do Canvas */}
        <Environment preset="night" blur={0.5} /> 
        
        {/* SEU MODELO DROID */}
        <Droid 
          position={[1, 0, 1]} // Posição de destino 
          scale={1} // A escala é ajustada dentro do Droid, mas você pode sobrescrever aqui
        />
        
      </Suspense>
    </Canvas>
  );
};

// Adiciona exportação padrão para corresponder à sua importação:
// import SceneWrapper from "@/components/SceneWrapper"
export default SceneWrapper;