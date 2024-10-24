import { motion, useAnimation, useInView, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const svgIconVariants = {
  hidden: { opacity: 0, pathLength: 0, fill: "rgba(255,255,255,0)" },
  visible: { opacity: 1, pathLength: 1, fill: "rgba(255,255,255,1)" },
};

function App() {
  const { scrollYProgress: completionProgress } = useScroll();

  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-1/4 h-1/4 bg-stone-100 rounded-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          />
          <motion.div
            className="w-1/4 h-1/4 bg-stone-100 rounded-full"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 shadow-md bg-rose-400"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 5,
              repeatDelay: 1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#d1d5db",
              color: "black",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide"
          >
            Subscribe
          </motion.button>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grab"
            drag
            dragConstraints={{ top: -125, bottom: 125, left: -125, right: 125 }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div className="w-40 aspect-square rounded-xl bg-gray-50/20 ">
            <motion.div
              className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
              style={{ scaleY: completionProgress }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-xl justify-center flex items-center gap-10"
        >
          <motion.svg
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 166.3 161"
            className="w-1/2 stroke-stone-200 stroke-[0.5]"
          >
            <motion.path
              d="M12.2,8.7h142.6c1.7,0,3,0.9,3,2.5v30.3c0,1.7-1.4,3.4-3,3.4l-46.6,0c-2.5,0-4,2.9-2.4,4.9
              l51.5,66.2c0.6,0.8,0.9,1.7,0.9,2.6l-0.2,32.1c0,1.7-1.4,2.6-3,2.5l-70.1,0c-1,0-1.9-0.5-2.5-1.3l-31.1-44.9
              c-1.7-2.4-5.5-1.2-5.5,1.7l0.2,41.9c0,1.7-1.3,2.6-3,2.6H11.2c-1.7,0-3-0.9-3-2.5L8.2,12.7C8.2,10.5,10,8.7,12.2,8.7z"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 1,
                  repeatDelay: 2,
                  repeatType: "reverse",
                },
                fill: {
                  duration: 2,
                  ease: "easeIn",
                  repeat: Infinity,
                  delay: 2,
                  repeatDelay: 1,
                  repeatType: "reverse",
                },
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.section>
      <section className="flex flex-col gap-10 mb-10" ref={containerRef}>
        <motion.h1
          className="text-5xl tracking-wide text-slate-100"
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opactiy: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ ease: "easeOut", delay: 0.3, duration: 1 }}
        >
          Just keep scrolling
        </motion.h1>
        <motion.p
          className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opactiy: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ ease: "easeOut", delay: 0.3, duration: 1 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </motion.p>
        <motion.p
          className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opactiy: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ ease: "easeOut", delay: 0.3, duration: 1 }}
        >
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </motion.p>
      </section>
    </div>
  );
}

export default App;
