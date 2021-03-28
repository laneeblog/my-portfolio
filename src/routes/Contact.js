import React, { useEffect } from 'react';
import '../App.css';
import FirstFrame from '../components/FirstFrame';
import $ from "jquery";
import data from '../Data'
import { motion } from 'framer-motion';

function Contact() {

    useEffect(() => {
        $('a').css('color', '#fbfffc');
        $('a').css('background-color', '#43a047');
        $('a:contains("Contact")').css('color', '#43a047');
        $('a:contains("Contact")').css('background-color', '#fbfffc');
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
        >Contact</motion.div>
    </section>
}

export default Contact;