import { motion, AnimatePresence } from 'motion/react';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  pageKey: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: -20,
    scale: 0.98
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
};

export default function PageTransition({ children, pageKey }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Button press animation component
export function ButtonPressAnimation({ 
  children, 
  className = '',
  ...props 
}: { 
  children: ReactNode; 
  className?: string;
  [key: string]: any;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// Loading button component
export function LoadingButton({
  loading = false,
  children,
  disabled = false,
  className = '',
  ...props
}: {
  loading?: boolean;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  [key: string]: any;
}) {
  return (
    <ButtonPressAnimation
      disabled={disabled || loading}
      className={`relative ${className} ${disabled || loading ? 'opacity-70 cursor-not-allowed' : ''}`}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className={loading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </div>
    </ButtonPressAnimation>
  );
}

// Fade transition for overlays
export function FadeTransition({ 
  children, 
  isVisible 
}: { 
  children: ReactNode; 
  isVisible: boolean; 
}) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Slide up animation for modals
export function SlideUpTransition({ 
  children, 
  isOpen 
}: { 
  children: ReactNode; 
  isOpen: boolean; 
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 500 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}