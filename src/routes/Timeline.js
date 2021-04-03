import React, { useEffect } from 'react';
import FirstFrame from '../components/FirstFrame';
import TimelineComponent from '../components/TimelineComponent';
import '../App.css';
import data from '../Data';
import $ from "jquery";
import { motion } from 'framer-motion';


const timeline = data.timeline;
const getTimeline = () => {
    timeline.sort(function (a, b) {
        return b.time - a.time;
    });
}
getTimeline();

function Timeline() {

    useEffect(() => {
        $('a').css('color', '#fbfffc');
        $('a').css('background-color', '#43a047');
        $('a:contains("Timeline")').css('color', '#43a047');
        $('a:contains("Timeline")').css('background-color', '#fbfffc');

        setTimeout(() => {
            $('.drawTimeline').css('width', '100%');    
        }, 1000);
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
        >
            <div className="itemContainer">
                <div className="othersTitle">Timeline</div>
                <div className="drawTimeline"></div>
            </div>
            <div className="timeline">
                {timeline.map((item, idx) => {
                    let time = item.time + "";
                    let year = time.substring(0, 4);
                    let month = time.substring(4, 6);
                    switch (month) {
                        case "01":
                            month = "January";
                            break;
                        case "02":
                            month = "February";
                            break;
                        case "03":
                            month = "March";
                            break;
                        case "04":
                            month = "April";
                            break;
                        case "05":
                            month = "May";
                            break;
                        case "06":
                            month = "June";
                            break;
                        case "07":
                            month = "July";
                            break;
                        case "08":
                            month = "August";
                            break;
                        case "09":
                            month = "September";
                            break;
                        case "10":
                            month = "October";
                            break;
                        case "11":
                            month = "November";
                            break;
                        case "12":
                            month = "December";
                            break;
                        default:
                            break;
                    }
                    return <TimelineComponent key={idx} time={month + ", " + year} title={item.title} desc={item.desc} link1={item.link1} link2={item.link2} link3={item.link3}></TimelineComponent>
                })}
            </div>
        </motion.div>
    </section>
}

export default Timeline;

