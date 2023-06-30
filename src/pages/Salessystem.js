import { Sfs } from "../components/examples/Sfs";
import Image from "next/image";
import Ssh from "../../public/images/Portfolio/Sshead.png"
import Head from 'next/head';
import Foot from '../components/foot/Foot'

const sfsale = () => {
    return (  
        <>
        <div className="pm">
     <Head>
        <title>📈 Sales System</title>
      </Head>
    <Image src={Ssh} height={1080} width={1920} style={{objectFit:"scale-down !important", height:"auto", width:"100vw",backgroundColor:"white !important"}} alt='sales system sales app sales design ux ui abril rivera portfolio'/>
        <Sfs/>
        <Foot/>

    </div>
    </>
 
    );
}
 
export default sfsale;