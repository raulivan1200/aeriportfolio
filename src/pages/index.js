  import Grid from "@/components/projectos/Grid"
  import Exp from "@/components/scroll/Exp";
  import Skills from "@/components/game/Skills";
  import Foot from "@/components/foot/Foot";
  import Menu from "@/components/Menu/Menu";
  import Transition from "../../src/components/Transition"
  import Head from 'next/head';
  import Header from "@/components/header/head"

  const Main = () => {   

    return (
      <>
      <div className="backgc">
      <Head>
        <title>✨Esmeralda Rivera Ux/Ui✨</title>
      </Head>
      <Header/>
        <Transition/>
        <section id="menu-section">
          <Menu />
        </section>
        <section id="head-section">
          <Head />
        </section>
        <section id="grid-section">
          <Grid />
        </section>
        <section id="exp-section">
          <Exp />
        </section>
        <section id="skills-section">
          <Skills />
        </section>
        <section id="foot-section">
          <Foot />
        </section>
      </div>
      </>
    );
  };
  
  export default Main;