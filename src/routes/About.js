import React, { useEffect, useState } from 'react';
import FirstFrame from '../components/FirstFrame';
import Skillset from '../components/Skillset';
import '../App.css';
import data from '../Data';
import $ from "jquery";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function About() {
    const timeline = data.timeline;
    const [isLoading, setIsLoading] = useState(true);

    const getTimeline = async () => {
        timeline.sort(function (a, b) {
            return b.time - a.time;
        });
        setIsLoading(false);
    }

    useEffect(() => {
        getTimeline();
        $('a').css('color', '#fbfffc');
        $('a').css('background-color', '#43a047');
        $('a:contains("About")').css('color', '#43a047');
        $('a:contains("About")').css('background-color', '#fbfffc');
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
            <div className="aboutContainer">
                <div className="aboutTitle">About <span className="textEmp1">Me</span></div>
                    <div style={{marginTop: "30px"}}>언제나 고민해왔던 것이 있습니다.</div>
                <div className="aboutContainerBlock">
                    
                    <div className="aboutContainerBlockDesc">
                        <span className="textEmp2">스페셜리스트가 되어야 할까, 제너럴리스트가 되어야 할까?<FontAwesomeIcon icon={faQuoteRight} className="quotAbout" /></span>
                    </div>
                    <div className="aboutContainerBlockBox">
                        Specialist<br />
                        &nbsp;&nbsp;&nbsp;vs Generalist
                    </div>
                </div>
                하지만 제 삶은 늘 제너럴리스트의 방향으로 흘러왔던 것 같습니다.
                <div className="aboutContainerBlock" style={{borderBottom: "1px solid #43a047"}}>
                    <div className="aboutContainerBlockBox" style={{marginBottom: "40px"}}>
                        Programmer<br />
                        &nbsp;&nbsp;&nbsp;as a Generalist
                    </div>
                    <div className="aboutContainerBlockDesc" style={{textAlign: "center", paddingBottom: "30px"}}>
                        <span className="textEmp2">이제는 <span className="textEmp1">프로그래머로서의 제너럴리스트</span>를 꿈꿉니다.</span>
                    </div>
                </div>
                <Skillset></Skillset>
            </div>
        </motion.div>
    </section>
}

export default About;

