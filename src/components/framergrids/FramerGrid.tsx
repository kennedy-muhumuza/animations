import { motion, useScroll } from "framer-motion";
import ScrollProgress from "../scroll-progress/ScrollProgress";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const FramerGrid = () => {
  const { scrollYProgress: completionProgress } = useScroll();
  console.log("completionProgress", completionProgress);
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <ScrollProgress />
      {/* <motion.div className=" w-full aspect-square bg-gray-900 rounded-sm fixed h-3">
        <motion.div
          className="w-full bg-gray-300 rounded-sm origin-bottom h-3"
          //   className={`w-${completionProgress} bg-gray-300 rounded-xl origin-bottom h-7`}
          style={{ scaleX: completionProgress }}
        ></motion.div>
      </motion.div> */}
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        {/* FADE UP  */}
        <motion.div
          variants={gridSquareVariants}
          className=" bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className=" w-20 h-20 bg-stone-100 rounded-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          ></motion.div>
          <motion.div
            className=" w-20 h-20 bg-stone-100 rounded-full"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          ></motion.div>
        </motion.div>
        {/* SHAPE SIFTING */}
        <motion.div
          variants={gridSquareVariants}
          className=" bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className=" w-1/3 h-1/3 shadow-md bg-rose-400"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: 2,
              repeatDelay: 1,
            }}
          ></motion.div>
        </motion.div>
        {/* HOVER AND TAP */}
        <motion.div
          variants={gridSquareVariants}
          className=" bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
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
        {/* DRAG */}
        <motion.div
          variants={gridSquareVariants}
          className=" bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className=" w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grab"
            drag
            dragConstraints={{ top: -125, right: 125, bottom: 125, left: -125 }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          ></motion.div>
        </motion.div>
        {/* SCROLL PROGRESS */}
        <motion.div
          variants={gridSquareVariants}
          className=" bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div className=" w-40 aspect-square bg-gray-50/20 rounded-xl">
            <motion.div
              className=" w-full bg-gray-400 rounded-xl h-full origin-bottom"
              style={{ scaleY: completionProgress }}
            ></motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className=" bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
      </motion.section>
    </div>
  );
};

export default FramerGrid;
