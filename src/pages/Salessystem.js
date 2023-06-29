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
    <Image src={Ssh} height={1080} width={1920} style={{objectFit:"scale-down !important", height:"auto", width:"100vw",backgroundColor:"white !important"}} alt='restaurant ux ui designer Abril Rivera woffles wofflles wofles'/>
        <Sfs/>
        <Foot/>

    </div>
    </>
 
    );
}
 
export default sfsale;