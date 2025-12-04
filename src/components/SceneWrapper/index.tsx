"use client";

import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { Droid } from "@/components/Droid";
import { easing } from "maath"

interface SceneWrapperProps {
  isMobile: boolean;
  className: string;
}

/**
 * 
 * Rig: componente que gernecia o movimento da camera com mouse
 */
function Rig() {
    // A lógica de Rig é mantida, garantindo que a câmera siga o mouse com suavidade.
    return useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            // Posição de destino da câmera. Ajustamos o 'y' para 1 para olhar um pouco para baixo
            [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
            0.5, // Fator de suavização
            delta
        );
    });
}

/**
 * Componente que configura o <Canvas> do R3F, iluminação e ambiente.
 */
export const SceneWrapper: React.FC<SceneWrapperProps> = ({ isMobile, className}) => {
  
  const droidPosition: [number, number, number] = isMobile ? [0, 0, 0] : [1.5, 0, 0];
  
  return (
    <div className={className}>
      <Canvas 
        className='z-40 mt-30 md:mt-40 lg:mt-50'
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
          <mesh position={droidPosition}>
              <boxGeometry args={[1, 1, 1]}/>
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
          
          <Rig />

          {/* SEU MODELO DROID */}
          <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
              <Droid 
                position={droidPosition} // Posição de destino 
                isMobile={isMobile}
                scale={1} // A escala é ajustada dentro do Droid, mas você pode sobrescrever aqui
              />
          </Float>
          
        </Suspense>
      </Canvas>
    </div>
  );
};

// Adiciona exportação padrão para corresponder à sua importação:
// import SceneWrapper from "@/components/SceneWrapper"
export default SceneWrapper;