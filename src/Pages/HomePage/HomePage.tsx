import { useRef } from "react";
import base from "@/assets/base.svg";
import data from "./HomeContent.json";
import { motion, useScroll, useTransform } from "framer-motion";

const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Create parallax transforms for different layers
  const leftY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div ref={ref} className="w-full overflow-hidden p-4 sm:p-6 md:p-8">
      {/* Stack vertically on mobile, horizontally on md+ */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        {/* Left - Greeting & Name */}
        <motion.section
          className="w-full md:w-1/3 flex flex-col items-center md:items-end md:text-right text-center gap-1 sm:gap-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: leftY }}
        >
          <div className="text-lg sm:text-xl md:text-2xl font-switzer text-foreground">
            {data.HomeContent.Greeting}
          </div>
          <div className="text-3xl sm:text-5xl md:text-7xl font-boska text-foreground">
            {data.HomeContent.Name}
          </div>
        </motion.section>

        {/* Center - Image */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ y: imageY, scale: imageScale }}
        >
          <img
            src={base}
            alt="Description"
            loading="lazy"
            className="max-w-full h-auto drop-shadow-lg"
          />
        </motion.div>

        {/* Right - Roles */}
        <motion.div
          className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left gap-1 sm:gap-2 font-boska"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: rightY }}
        >
          <p className="text-lg sm:text-xl md:text-xl">Roles I'm confident in:</p>
          {data.HomeContent.titles.map((title, index) => (
            <p key={index} className="text-lg sm:text-xl md:text-2xl font-switzer text-foreground">
              {title}
            </p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;