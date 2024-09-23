import { RiReactjsLine } from "react-icons/ri";
import { DiPython, DiJavascript1, DiCss3, DiHtml5 } from "react-icons/di";
import { SiC, SiFlask, SiDjango, SiPhp, SiLaravel } from "react-icons/si"; // Include PHP and Laravel icons
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y:-10},
  animate: {y: [10, -10], transition: {duration:duration, ease: "linear", repeat: Infinity, repeatType: "reverse"}},
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{opacity: 1, x:0 }} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">

        {/* Python */}
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiPython className="text-7xl" style={{ color: "#306998" }} /> {/* Python blue color */}
        </motion.div>

        {/* Flask */}
        <motion.div variants={iconVariants(2.25)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFlask className="text-7xl" style={{ color: "#008080" }} /> {/* Flask teal color */}
        </motion.div>

        {/* Django */}
        <motion.div variants={iconVariants(1.75)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDjango className="text-7xl" style={{ color: "#092E20" }} /> {/* Django green */}
        </motion.div>

        {/* HTML */}
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiHtml5 className="text-7xl" style={{ color: "#E34F26" }} /> {/* HTML orange */}
        </motion.div>

        {/* CSS */}
        <motion.div variants={iconVariants(1.25)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiCss3 className="text-7xl" style={{ color: "#1572B6" }} /> {/* CSS blue */}
        </motion.div>

        {/* JavaScript */}
        <motion.div variants={iconVariants(2.25)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJavascript1 className="text-7xl" style={{ color: "#F7DF1E" }} /> {/* JavaScript yellow */}
        </motion.div>

        {/* React */}
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl" style={{ color: "#61DBFB" }} /> {/* React cyan */}
        </motion.div>

        {/* C */}
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiC className="text-7xl" style={{ color: "#00599C" }} /> {/* C language blue */}
        </motion.div>

        {/* PHP */}
        <motion.div variants={iconVariants(1.25)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPhp className="text-7xl" style={{ color: "#8993BE" }} /> {/* PHP gray color */}
        </motion.div>

        {/* Laravel */}
        <motion.div variants={iconVariants(2.25)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiLaravel className="text-7xl" style={{ color: "#FF2D20" }} /> {/* Laravel red color */}
        </motion.div>
        
      </motion.div>
    </div>
  );
};

export default Technologies;
