import React, { useEffect, useState } from 'react';
import '../App.css';
import FirstFrame from '../components/FirstFrame';
import $ from "jquery";
import { motion } from 'framer-motion';
import data from '../Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStepForward, faStepBackward, faPause, faQuoteRight } from '@fortawesome/free-solid-svg-icons';


var arr = [new Audio('/audio/3연음발라드.mp3'), new Audio('/audio/고향의봄.mp3'), new Audio('/audio/마리아독창.mp3'), new Audio('/audio/바운스.mp3'), new Audio('/audio/산토끼.mp3'), new Audio('/audio/알엔비발라드.mp3'), new Audio('/audio/하망연.mp3'), new Audio('/audio/spotlight.mp3')];
var audio;
var audioBefore;
const audioRandomPick = () => {
    audio = arr[Math.floor(Math.random() * 8)];
}
audioRandomPick();

function Others() {
    const [playPause, setPlayPause] = useState(true);

    const audioPlay = () => {
        audio.play();
        setPlayPause(false);
    }
    const audioPause = () => {
        audio.pause();
        setPlayPause(true);
    }
    const audioNext = () => {
        audioBefore = audio;
        audio.pause();
        audio.currentTime = 0;
        audioRandomPick();
        audio.play();
        setPlayPause(false);
    }
    const audioPrev = () => {
        if (audio && audioBefore) {
            audio.pause();
            audio.currentTime = 0;
            audioBefore.play();
            audio = audioBefore;
            setPlayPause(false);
        }
    }


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
        >
            <div className="itemContainer">
                <div className="othersIntroduction">
                    <div className="othersTitle">Books</div>                    
                    <br /><br />
                    <div className="othersDesc">
                        <div className="quotBook">
                            <div>
                                <div className="quotTitle">번역은 반역이다</div>
                                <div className="quotDesc">- 로베스 에스카르피</div>
                            </div>
                            <div><FontAwesomeIcon icon={faQuoteRight} className="quotRight" /></div>
                        </div>
                        <br /><br />
                        프랑스의 유명한 사회학자의 말을 빌려 나를 위한 변명과 함께, 제가 번역한 책을 소개합니다. 😉
                    </div>
                </div>
                <div className="books">
                    <div className="bookItem">
                        <div className="bookImg"><img src="/images/math.jpg" alt="수학을 요리하다"></img></div>
                        <div className="bookTitle">수학을 요리하다</div>
                        <div className="bookPublisher">처음북스</div>
                        <div className="bookTime">2016년 3월</div>
                    </div>
                    <div className="bookItem">
                        <div className="bookImg"><img src="/images/viet.jpg" alt="맛있는 베트남"></img></div>
                        <div className="bookTitle">맛있는 베트남</div>
                        <div className="bookPublisher">처음북스</div>
                        <div className="bookTime">2015년 8월</div>
                    </div>
                    <div className="bookItem">
                        <div className="bookImg"><img src="/images/chef.jpg" alt="위, 셰프"></img></div>
                        <div className="bookTitle">위, 셰프</div>
                        <div className="bookPublisher">처음북스</div>
                        <div className="bookTime">2015년 5월</div>
                    </div>
                    <div className="bookItem">
                        <div className="bookImg"><img src="/images/mad.jpg" alt="미치광이 예술가의 부활절 살인"></img></div>
                        <div className="bookTitle">미치광이 예술가의 부활절 살인</div>
                        <div className="bookPublisher">처음북스</div>
                        <div className="bookTime">2014년 10월</div>
                    </div>
                </div>
                <div className="othersIntroduction">
                    <div className="othersTitle">Music</div>
                    <div className="othersDesc">끄적끄적 취미 삼아 만들었던 음악들이에요. <br />믹싱은 고사하고 가사도 붙이지 못한 곡이 태반이지만, 그저 심심할 때 한 번씩 꺼내 듣고 있어요. 😄</div>
                </div>
                <div className="music">
                    <div className="playerContainer">
                        <div className="player">
                            <FontAwesomeIcon icon={faStepBackward} className="backward" onClick={audioPrev} />
                            {playPause ? <FontAwesomeIcon icon={faPlay} className="play" onClick={audioPlay} /> : <FontAwesomeIcon icon={faPause} className="play" onClick={audioPause} />}
                            <FontAwesomeIcon icon={faStepForward} className="forward" onClick={audioNext} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
}

export default Others;