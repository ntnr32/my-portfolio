import React from "react";
import Blob from "./Blob";
import { AnimatePresence, motion } from "framer-motion";
import TextLoop from "../text-loop/TextLoop";

const Loading = () => {
  return (
    <div className="z-50 top-0 fixed w-30 h-30 bg-black sm:pr-5 h-screen w-screen">
      <AnimatePresence>
        <motion.div
          className="relative grid place-content-center h-screen overflow-hidden"
          exit={{
            opacity: 0,
            height: 0,
            transition: {
              ease: "easeInOut",
              duration: 0.3,
              delay: 1.2,
            },
          }}
        >
          <div className="absolute grid justify-center items-center w-screen h-screen text-3xl md:text-4xl">
            <TextLoop />
          </div>
          <motion.div
            className="grid grid-flow-col"
            animate={{
              x: [-1000, 1000, -1000],
              y: [-200, 200, 400, -200],
              rotate: [0, 270, 360],
              scale: [1, 2, 2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Blob className="w-96 fill-pink-500 animate-pulse blur-3xl" />
          </motion.div>
          <motion.div
            className="grid grid-flow-col"
            animate={{
              x: [-1000, 1000, -1000],
              y: [-200, 50, 100, -200],
              rotate: [0, 270, 360],
              scale: [1, 2, 2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Blob className="w-96 fill-violet-500 animate-pulse blur-3xl" />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Loading;

Loading.displayName = "Loading";
