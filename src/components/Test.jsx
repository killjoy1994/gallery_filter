import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

const RevealOnScroll = () => {
  // const [ref, inView] = useInView({
  //   triggerOnce: false,
  //   threshold: 0.2, // Adjust the threshold as needed
  // });

  const ref = useRef();
  const inView = useInView(ref)

  const containerVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  // useEffect(() => {
  //   if (inView) {
  //     // Animation logic if needed
  //   }
  // }, [inView]);

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Your content goes here */}
        <h1 className='text-slate-700 text-4xl font-semibold'>Hello, World!</h1>
        <p className='text-slate-700 text-xl font-semibold'>Welcome to the Framer Motion example.</p>
      </motion.div>
    </div>
  );
};

export default RevealOnScroll;
