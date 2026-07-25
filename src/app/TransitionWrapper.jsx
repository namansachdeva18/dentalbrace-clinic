'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Loader from '@/components/Loader';

export default function TransitionWrapper({ children }) {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(true);
  
  return (
    <>
      {showLoader && <Loader onComplete={() => setShowLoader(false)} />}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
