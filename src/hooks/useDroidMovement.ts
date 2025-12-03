// src/hooks/useDroidMovement.ts
import { useState, useEffect, useCallback } from 'react';
import { useMotionValue, useSpring } from 'motion/react';
import { Spring } from 'popmotion'; // Para tipagem

interface MovementState {
  rotationX: Spring<number>;
  rotationY: Spring<number>;
}

/**
 * Hook customizado para rastrear o mouse e retornar valores de rotação suaves (Spring).
 * @returns {MovementState} Valores Motion Spring para rotação X e Y.
 */
export const useDroidMovement = (): MovementState => {
  // Motion values que rastreiam o estado alvo (raw/bruto) da rotação
  const rawRotationX = useMotionValue(0);
  const rawRotationY = useMotionValue(0);

  // Spring values que aplicam a suavidade (damping/amortecimento)
  // Ajuste damping e stiffness para um efeito mais ou menos "esponjoso".
  const rotationX = useSpring(rawRotationX, { damping: 20, stiffness: 100 });
  const rotationY = useSpring(rawRotationY, { damping: 20, stiffness: 100 });

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const { innerWidth: width, innerHeight: height } = window;
    
    // Normaliza a posição do mouse de -0.5 (canto) a 0.5 (canto), centrado em 0
    // X (Yaw/Y-Rotation): Quanto mais à direita, mais o Droid gira para a direita.
    const normalizedX = (event.clientX / width) - 0.5;
    
    // Y (Pitch/X-Rotation): Invertido (top é positivo para rotação X) para a perspectiva 3D.
    const normalizedY = -(event.clientY / height) + 0.5;

    // Define o ângulo máximo de rotação que o mouse pode induzir (em radianos)
    const maxAngle = 0.4; 

    // Atualiza os motion values brutos, o Spring se encarrega da transição suave.
    // Mouse X (horizontal) controla Rotação Y (yaw)
    rawRotationY.set(normalizedX * maxAngle); 
    
    // Mouse Y (vertical) controla Rotação X (pitch)
    rawRotationX.set(normalizedY * maxAngle);
  }, [rawRotationX, rawRotationY]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return { rotationX, rotationY };
};