import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SwitchTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Set the initial state to true (light theme)

  useEffect(() => {
    const storedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: light)").matches
        ? "dark"
        : "light");

    setIsDarkTheme(storedTheme === "dark");
  }, []);

  const handleThemeToggle = () => {
    const targetTheme = isDarkTheme ? "light" : "dark";

    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const rotateAndScale = {
    rotate: isDarkTheme ? 360 : 0,
    scale: isDarkTheme ? 1 : .9,
    transition: { duration: 0.3, ease: "linear" },
  };

  return (
    <div className="mr" style={{ cursor: "pointer" }} onClick={handleThemeToggle}>
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={isDarkTheme ? "visible" : "hidden"}
        transition={{ duration: 0.3 }}
        style={{ display: isDarkTheme ? "block" : "none" }}
      >
        <motion.img
        width={48}
        height={48}
          src="/logos/moon.svg"
          className="svcom"
          alt="Dark Theme"
          fill
          animate={rotateAndScale}
          whileHover={{ scale: 1.3, opacity: 0.9 }} // Add whileHover effect

        />
      </motion.div>
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={!isDarkTheme ? "visible" : "hidden"}
        transition={{ duration: 0.3 }}
        style={{ display: !isDarkTheme ? "block" : "none" }}
        onClick={handleThemeToggle}
      >
        <motion.img
                width={48}
                height={48}
          src="/logos/sun.svg"
          className="svcom"
          alt="Light Theme"
          fill
          animate={rotateAndScale}
          whileHover={{ scale: 1.3, opacity: 0.9 }} // Add whileHover effect

        />
      </motion.div>
    </div>
  );
};

export default SwitchTheme;




