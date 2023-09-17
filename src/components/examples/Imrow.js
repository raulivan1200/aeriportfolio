import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import {useState} from 'react'
import { useRef } from "react";
import Image from 'next/image'
import wof from "../../../public/images/Portfolio/woffleshead.png"
import imk from "../../../public/images/Portfolio/imagikidsheader.png"
import teko from "../../../public/images/Portfolio/tekohead.png"
import Ssh from "../../../public/images/Portfolio/Sshead.png"
import billh from "../../../public/images/Portfolio/billhead.png"

export const Imrow = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const scaleStyle = {
    transform: "scaleX(-1)",
  };

  const settings = {
    rows: 1,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay:true,
    speed:500,
    arrows:false,
    dots: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 2,
    cssEase: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    responsive: [
      
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          rows: 1
        }
      },
      {
        rows:1,
        breakpoint: 568,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='mfif' style={{height:"fit-content",    width: "100vw",    position: "absolute"}}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "0", width:"90%", justifyItems:"center", margin:"0 auto", paddingTop:"5%"}}>

      </div>


      <Slider  ref={sliderRef} {...settings}>
          <div className="img-wrapper">
   <a href="/Woffles"><Image width={400} height={0} placeholder={'blur'} src={wof} alt="restaurant waffles food comida mexico menu diseno ux ui" className='rsimg'/></a>
</div>
        <div className="img-wrapper">
   <a href="/Imagikids"><Image width={400} height={0} placeholder={'blur'} src={imk}  alt="kids toys design ux ui" className='rsimg'/></a>
</div>
        <div className="img-wrapper">
   <a href="/Teko"><Image width={400} height={0} placeholder={'blur'} src={teko}  alt="ux ui design studio" className='rsimg'/></a>
</div>
        <div className="img-wrapper">
   <a href="/Salessystem"><Image width={400} height={0} placeholder={'blur'} src={Ssh}  alt="sales store market ux ui" className='rsimg'/></a>
          </div>
        <div className="img-wrapper">
   <a href="/Billsplitter"><Image width={400} height={0} placeholder={'blur'} src={billh} alt="ux ui bill" className='rsimg' /></a>
</div>
        </Slider>

    </div>
  )
}
