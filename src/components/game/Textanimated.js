import { motion, useAnimation } from 'framer-motion';

import { useEffect, useState } from 'react';
import  styles from "../../styles/Skills.module.css"

const headings = ['Minami Design', 'Teko Studio', 'Kidsy'];
const texts = [
  <>
  <p>Successfully participated in UX/UI projects that resulted in increased economic benefits for over 14 companies, estimated at around $1.2 million, over a year and a half period.</p>
  <p>Assisted in improving the design process by 56%, utilizing agile methodologies such as SCRUM, Lean design, among others.</p>
  <p>Collaborated with the team to develop an adaptable base design system, increasing project development speed by 64%.</p>
  <p>Designed intuitive and appealing interfaces, enhancing the user experience and increasing customer satisfaction and retention by 36%.</p>
</>,

<>
<p>Successfully participated in UX/UI projects that resulted in increased economic benefits for over 14 companies, estimated at around $1.2 million, over a year and a half period.</p>
<p>Assisted in improving the design process by 56%, utilizing agile methodologies such as SCRUM, Lean design, among others.</p>
<p>Collaborated with the team to develop an adaptable base design system, increasing project development speed by 64%.</p>
<p>Designed intuitive and appealing interfaces, enhancing the user experience and increasing customer satisfaction and retention by 36%.</p>
</>,
<>
<p>Successfully participated in UX/UI projects that resulted in increased economic benefits for over 14 companies, estimated at around $1.2 million, over a year and a half period.</p>
<p>Assisted in improving the design process by 56%, utilizing agile methodologies such as SCRUM, Lean design, among others.</p>
<p>Collaborated with the team to develop an adaptable base design system, increasing project development speed by 64%.</p>
<p>Designed intuitive and appealing interfaces, enhancing the user experience and increasing customer satisfaction and retention by 36%.</p>
</>,
];

const Textan = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 2, type: 'spring' }
      });
      await new Promise(resolve => setTimeout(resolve, 5000));
      await controls.start({
        y: -100,
        opacity: 0,
        transition: { duration: 2, type: 'spring', stiffness: 200 }
      });
      await controls.start({
        y: 100,
        opacity: 0,
        transition: { duration: 0 }
      });

      // Update the current text index to show the next text
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
    };

    sequence();
  }, [controls, currentTextIndex]);

  return (
    <>
    <motion.div
      key={currentTextIndex}
      animate={controls}
      initial={{ y: -100, opacity: 0, color: 'var(--black)', textAlign: 'left' }}
      transition={{ duration: 0.5 }}
    >
      <h4 className={styles.t4}>{headings[currentTextIndex]}</h4>
      <h3 className={styles.t3}>{texts[currentTextIndex]}</h3>
    </motion.div>
    </>
  );
};

export default Textan;