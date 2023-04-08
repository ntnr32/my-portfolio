import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    content: "Hello",
  },
  {
    id: 2,
    content: "Bonjour",
  },
  {
    id: 3,
    content: "Hola",
  },
  {
    id: 4,
    content: "Zdravstvuyte",
  },
  {
    id: 5,
    content: "Salve",
  },
  {
    id: 6,
    content: "Konnichiwa",
  },
  {
    id: 7,
    content: "Goedendag",
  },
  {
    id: 8,
    content: "Namaste",
  },
];

const TextLoop = () => {
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const id = setInterval(() => {
      setIndex((state) => {
        if (state == items.length - 1) {
          clearInterval(id);
          return state;
        }
        return state + 1;
      });
    }, 300);
    return () => clearInterval(id);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative">
      <AnimatePresence>
        <motion.div
          className="absolute"
          key={items[index].id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
        >
          {items[index].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextLoop;
