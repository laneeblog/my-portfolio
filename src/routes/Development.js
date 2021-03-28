import React, { useEffect } from 'react';
import '../App.css';
import FirstFrame from '../components/FirstFrame';
import $ from "jquery";
import { motion } from 'framer-motion';
import data from '../Data';

function Development() {

    useEffect(() => {
        $('a').css('color', '#fbfffc');
        $('a').css('background-color', '#43a047');
        $('a:contains("Development")').css('color', '#43a047');
        $('a:contains("Development")').css('background-color', '#fbfffc');
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
        >Development</motion.div>
    </section>
}

export default Development;