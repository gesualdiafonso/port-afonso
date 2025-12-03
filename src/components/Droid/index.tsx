"use client";

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMotionValue, useSpring } from "motion/react";
import * as THREE from 'three';
import type { GroupProps } from "@react-three/fiber";
import { GLTF } from 'three-stdlib';

// Importa o hook de movimento (assumimos que este arquivo existe e funciona)
import { useDroidMovement } from "@/hooks/useDroidMovement";

const DROID_MODEL_PATH = "/models/scene.gltf";
// Garantia de ponto e vírgula para evitar erro ASI (Semicolon Insertion)
useGLTF.preload(DROID_MODEL_PATH);

interface DroidProps extends GroupProps {
    // Propriedade para controlar a velocidade da animação GLTF
    speed?: number;
}

/**
 * Tipagem simplificada para o retorno do useGLTF
 */
interface DroidGLTFResult extends GLTF {
    scene: THREE.Group;
}


/**
 * Componente do Droid 3D com animação inicial suave e movimento do mouse.
 */
export function Droid({ speed = 1, ...props }: DroidProps) {
    const groupRef = useRef<THREE.Group>(null!); 
    
    // 1. Carregamento do Modelo: Desestruturamos 'scene' para renderizar o grafo completo
    const { scene, animations } = useGLTF(DROID_MODEL_PATH) as unknown as DroidGLTFResult;
    const { actions } = useAnimations(animations, groupRef); 
    
    // 2. Animação Inicial Suave (motion) - Faz o Droid subir
    const initialYPosition = useMotionValue(-2); 
    const initialYSpring = useSpring(initialYPosition, { damping: 40, stiffness: 120 });

    // 3. Hook de Movimento do Mouse
    const { rotationX: mouseRotationX, rotationY: mouseRotationY } = useDroidMovement();

    useEffect(() => {
        // Move o Droid suavemente para a posição final (Y=0)
        initialYSpring.set(0); 
        
        // Inicia a primeira animação e aplica a velocidade
        if (animations.length > 0 && actions[animations[0].name]) {
             const action = actions[animations[0].name];
             // Aplica a velocidade (speed) à animação do GLTF
             action?.setEffectiveTimeScale(speed);
             action?.play();
        }
    }, [actions, animations, initialYSpring, speed]); 

    // 4. Conexão com o Render Loop do R3F
    useFrame(() => {
        if (groupRef.current) {
            // Aplica a animação inicial de subida
            groupRef.current.position.y = initialYSpring.get();
            
            // Aplica a rotação de ajuste permanente (ex: X -90 graus para ficar de pé).
            // Este é um ajuste comum para modelos GLTF que vêm "deitados".
            const rotationAdjustmentX = Math.PI * 10; // -90 graus (Pitch)
            
            // Combina a rotação do mouse (Pitch/Yaw) com o ajuste de orientação.
            // A rotação do mouse em X é combinada com o ajuste fixo.
            groupRef.current.rotation.x = mouseRotationX.get() + rotationAdjustmentX;
            groupRef.current.rotation.y = mouseRotationY.get(); 

            // O eixo Z não precisa de rotação de ajuste.
            groupRef.current.rotation.z = 0; 
        }
    });

    return (
        <group 
            ref={groupRef} 
            {...props} 
            dispose={null}
            // Escala ajustada para um tamanho razoável no Canvas
            scale={0.6} // Aumentei a escala um pouco de 0.5 para 0.6
        >
            {/* CORREÇÃO: Usamos <primitive> para renderizar o grafo de cena (scene) completo do GLTF. */}
            <primitive object={scene} />
        </group>
    );
}