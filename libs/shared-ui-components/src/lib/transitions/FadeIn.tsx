import { motion, Variants } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
}

export const FadeIn = ({ children }: FadeInProps) => {
  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.6 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {children}
    </motion.div>
  );
};

export const withFadeIn = (Component: React.ReactNode) => {
  return <FadeIn>{Component}</FadeIn>;
};
