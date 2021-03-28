import React, { useEffect, useState } from 'react';
import '../App.css';
import FirstFrame from '../components/FirstFrame';
import $ from "jquery";
import { motion } from 'framer-motion';
import data from '../Data';
import Timeline from '../components/Timeline';

function About() {
    const timeline = data.timeline;
    const [isLoading, setIsLoading] = useState(true);

    const getTimeline = async () => {
        timeline.sort(function (a, b) {
            return a.time - b.time;
        });
        setIsLoading(false);
    }



    useEffect(() => {
        $('a').css('color', '#fbfffc');
        $('a').css('background-color', '#43a047');
        $('a:contains("About")').css('color', '#43a047');
        $('a:contains("About")').css('background-color', '#fbfffc');

        getTimeline();

    })

    return isLoading ? null : <section>
        <FirstFrame></FirstFrame>
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={data.pageVariants}
            transition={data.pageTransition}
            className="secondFrame"
        >
            <div className="timeline">
                {timeline.map((item, idx) => {
                    return <Timeline key={idx} time={item.time} title={item.title} desc={item.desc}></Timeline>
                })}
            </div>
        </motion.div>
    </section>
}

export default About;