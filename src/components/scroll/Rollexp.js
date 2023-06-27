'use client';
import { useState } from 'react';
import React from 'react';
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Rollexp = ({ text }) => {
  return (
    <h6 className='wh' style={{marginTop:"5px"}}>
      <motion.div
        style={{ display: "inline-block", whiteSpace: "nowrap", width:"80%",textAlign:"center"}}
        initial={{ x: -200  }}
        animate={{ x:-15000 }}
        drag={false} // disable drag property
        transition={{ duration: 100, ease:"linear",repeat: Infinity }}
      >
        {text}   {text}  {text}  {text}  {text}   {text}   {text}  {text}  {text}  {text} 
        {text}   {text}  {text}  {text}  {text}   {text}   {text}  {text}  {text}  {text} 
        {text}   {text}  {text}  {text}  {text}   {text}   {text}  {text}  {text}  {text} 

      </motion.div>
    </h6>
  );
};

export default Rollexp;