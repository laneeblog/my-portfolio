import React, { useEffect } from 'react';
import '../App.css';
import FirstFrame from '../components/FirstFrame';
import $ from "jquery";
import data from '../Data'
import { motion } from 'framer-motion';

function Careers() {

    useEffect(() => {
        $('a').css('color', '#fbfffc');
        $('a').css('background-color', '#43a047');
        $('a:contains("Careers")').css('color', '#43a047');
        $('a:contains("Careers")').css('background-color', '#fbfffc');
    })

    return <section>
        <FirstFrame></FirstFrame>
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={data.pageVariants}
            transition={data.pageTransition}
            className="secondFrame"
        >Careers</motion.div>
    </section>
}

export default Careers;