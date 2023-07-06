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
        <title>📈 Sales System</title>
      </Head>
      <ParallaxBanner >
      <ParallaxBannerLayer image="/images/Portfolio/Sshead.png" speed={-20} />
      </ParallaxBanner>        <Sfs/>
        <Foot/>

    </div>
    </>
 
    );
}
 
export default sfsale;