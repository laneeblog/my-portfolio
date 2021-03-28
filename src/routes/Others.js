import React, { useEffect } from 'react';
import '../App.css';
import FirstFrame from '../components/FirstFrame';
import $ from "jquery";
import { motion } from 'framer-motion';
import data from '../Data'

function Others() {

    useEffect(() => {
        $('a').css('color', '#fbfffc');
        $('a').css('background-color', '#43a047');
        $('a:contains("Others")').css('color', '#43a047');
        $('a:contains("Others")').css('background-color', '#fbfffc');
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
        >Others</motion.div>
    </section>
}

export default Others;