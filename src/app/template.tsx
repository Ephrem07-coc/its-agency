'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40, filter: 'blur(6px)' }} // Arrive de la gauche, invisible et flouté
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}  // Devient net et se cadre
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] // Courbe amortie fluide
      }}
    >
      {children}
    </motion.div>
  );
}