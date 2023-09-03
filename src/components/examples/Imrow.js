import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import {useState} from 'react'
import { useRef } from "react";


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
    <div style={{height:"fit-content"}}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "32px", width:"100%", justifyItems:"center", margin:"0 auto", paddingTop:"5%"}}>
        <h1 style={{color:"var(--black)"}}>More projects</h1>

      </div>


      <Slider  ref={sliderRef} {...settings}>
          <div className="img-wrapper">
   <a href="/Woffles"><img src="/images/Portfolio/woffleshead.png" alt="restaurant waffles food comida mexico menu diseno ux ui" className='rsimg'/></a>
</div>
        <div className="img-wrapper">
   <a href="/Imagikids"><img src="/images/Portfolio/imagikidsheader.png"  alt="kids toys design ux ui" className='rsimg'/></a>
</div>
        <div className="img-wrapper">
   <a href="/Teko"><img src="/images/Portfolio/tekohead.png"  alt="ux ui design studio" className='rsimg'/></a>
</div>
        <div className="img-wrapper">
   <a href="/Salessystem"><img src="/images/Portfolio/Sshead.png"  alt="sales store market ux ui" className='rsimg'/></a>
          </div>
        <div className="img-wrapper">
   <a href="/Billsplitter"><img src="/images/Portfolio/billhead.png" alt="ux ui bill" className='rsimg' /></a>
</div>
        </Slider>

    </div>
  )
}