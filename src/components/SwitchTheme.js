import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
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
<head>
<link
    rel="preload"
    href="./logos/moon.svg"
    as="image"
  />
  <link
    rel="preload"
    href="./logos/sun.svg"
    as="image"
  />
</head>
  return (
    <div className="mr" style={{ cursor: "pointer",marginTop:"0",paddingTop:"0" }} onClick={handleThemeToggle}>
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
          src="./logos/moon.svg"
          className="svco"
          alt="Dark Theme"
          fill
          animate={rotateAndScale}

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
          className="svco"
          alt="Light Theme"
          fill
          animate={rotateAndScale}

        />
      </motion.div>
    </div>
  );
};

export default SwitchTheme;




