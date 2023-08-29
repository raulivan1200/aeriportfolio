import Grid from "../components/projectos/Grid";
import Exp from "../components/scroll/Exp";
import Skills from "../components/game/Skills";
import Foot from "../components/foot/Foot";
import Menu from "../components/Menu/Menu";
import Transition from "../../src/components/Transition";
import Head from "next/head";
import Header from "../components/header/Head";
import { useRef } from "react";
import { easeInOut, useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import Expgrid from "@/components/game/Expgrid";

function Section({ children, animationProps }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const {
    initialTransform = "translate(-100px, 0)",
    initialOpacity = 0,
    transition = "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  } = animationProps;

  const transformedStyle = {
    transform: isInView ? "none" : initialTransform,
    opacity: isInView ? 1 : initialOpacity,
    transition: easeInOut,
    duration:2,
  };

  return (
    <motion.div ref={ref} style={transformedStyle}>
      {children}
    </motion.div>
  );
}

const Main = () => {
  return (
    <>
      <div style={{overflowX:"hidden",width:"100%"}} >
        <Head>
        <meta name="robots" content="all" />
        <meta name="google" content="nositelinkssearchbox" />

          <title>✨Esmeralda Rivera Ux/Ui✨</title>
          <meta name="description" content="Abril Rivera Experienced UX/UI designer bilingual. View my portfolio and contact me for your design projects." />
        </Head>
        <section id="head-section">
          <Header />
        </section>
        <Transition />
        <section id="menu-section">
          <Menu />
        </section>
        <section id="head-section">
          <Head />
        </section>
        <Section animationProps={{ initialTransform: "translate(0px, -50px)", initialOpacity: 0 }}>
          <motion.div id="grid-section">
            <Grid />
          </motion.div>
        </Section>
        <section  id="exp-section">
            <Exp />
        </section>
        <Section animationProps={{ initialTransform: "translate(0px, -100px)", initialOpacity: 0 }}>
          <motion.div id="skills-section">
            <Expgrid/>
        {/* 
            <Skills />
        */}
          </motion.div>
        </Section>
        <section id="foot-section">
          <Foot />
        </section>
      </div>
    </>
  );
};

export default Main;
