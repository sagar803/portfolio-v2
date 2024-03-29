import { FC, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
};

const Reveal: FC<RevealProps> = ({ children, width="fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    };
  }, [isInView]);

  return (
    <div ref={ref} style={{ width, position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {children}
      </motion.div>
      <motion.div 
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1}}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#54DEFD",
          zIndex: 10
        }}
      />
    </div>
  );
};

export default Reveal;
