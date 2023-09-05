import { useState } from 'react';
import React from 'react';
import { motion } from "framer-motion";

const Rollexp = React.memo(({ text }) => {
  const repeatedText = Array(30).fill(text).join('  '); // Repeat 'text' 30 times with double spaces

  return (
    <h6 className='wh' style={{ marginTop: "5px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
      <motion.div
        style={{ display: "inline-block", whiteSpace: "nowrap", width:"80%",textAlign:"center"}}
        initial={{ x: -200 }}
        animate={{ x: -15000 }}
        drag={false} // Disable drag property
        transition={{ duration: 300, ease: "linear", repeat: Infinity }}
      >
        {repeatedText}
      </motion.div>
    </h6>
  );
});

export default Rollexp;
