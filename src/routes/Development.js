import React, { useEffect } from 'react';
import '../App.css';
import FirstFrame from '../components/FirstFrame';
import $ from "jquery";
import { motion } from 'framer-motion';
import data from '../Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faAppStore } from '@fortawesome/free-brands-svg-icons';

let imgRoot = ""
if (window.location.href.indexOf("laneeblog.github.io") !== -1) {
    imgRoot = "/my-portfolio";
}

const devItem = data.devItem;
const getDevItem = () => {
    devItem.sort(function (a, b) {
        return b.time - a.time;
    });
}
getDevItem();

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
        >
            <div className="itemContainer">
                <div className="devItemTitle">Development</div>
                {
                    devItem.map((item, idx) => {
                        return <div className="devItem" key={idx}>
                            <div className="devImg"><img src={imgRoot + item.img} alt={item.title}></img></div>
                            <div className="devDescBlock">
                                <div className="devTitle">{item.title}</div>
                                <div className="devConcept">{item.concept}</div>
                                <div className="devSkillset">{item.skillset}</div>
                                {item.desc ? <div className="devDesc">{item.desc}</div> : null}
                                <div className="devLink">
                                    {item.link1 ? <a href={item.link1} target="blank"><FontAwesomeIcon icon={faLink} /></a> : null}
                                    {item.link2 ? <a href={item.link2} target="blank"><FontAwesomeIcon icon={faAndroid} /></a> : null}
                                    {item.link3 ? <a href={item.link3} target="blank"><FontAwesomeIcon icon={faAppStore} /></a> : null}
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </motion.div>
    </section>
}

export default Development;