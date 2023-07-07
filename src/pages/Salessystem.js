import { Sfs } from "../components/examples/Sfs";
import Image from "next/image";
import Head from 'next/head';
import Foot from '../components/foot/Foot'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const sfsale = () => {
    return (  
        <>
        <div className="pm">
     <Head>
     <meta name="robots" content="all" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta
  name="description"
  content="Design of a system for sales, Ux Ui, persona, scalable and maintainable"
/>
        <title>📈 Sales System</title>
      </Head>
      <ParallaxBanner style={{height:"100vh",width:"100vw",objectFit:"scale-down"}}>
      <ParallaxBannerLayer image="/images/Portfolio/Sshead.png" speed={-20} />
      </ParallaxBanner>        <Sfs/>
        <Foot/>

    </div>
    </>
 
    );
}
 
export default sfsale;