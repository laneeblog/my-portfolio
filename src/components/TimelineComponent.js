import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faLink } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faAppStore } from '@fortawesome/free-brands-svg-icons';
import $ from "jquery";

function TimelineComponent({ time, title, desc, link1, link2, link3 }) {

    useEffect(() => {
        $(".timelineItem").hide()
        let timeouts = [];
        setTimeout(() => {
            $('.timeline').css('border-left', '5px solid #97e298');
            for (let idx = 0; idx < $(".timelineItem").length; idx++) {
                let timeout = setTimeout(() => {
                    $(".timelineItem").eq(idx).show(1500)
                }, 2000 * idx);            
                timeouts.push(timeout)
            }    
        }, 3000);        

        $('.timelineItem').hover(function () {
            $(this).children(":first").css('transform', 'rotate(-45deg)');
            $(this).children(":first").css('color', '#2e7d32');
            $(this).children(":eq(1)").css('color', '#2e7d32');
            $(this).children(":eq(1)").children(":eq(0)").children(":eq(0)").css('background-color', '#2e7d32');
        }, function () {
            $(this).children(":first").css('transform', 'rotate(45deg)');
            $(this).children(":first").css('color', '#43a047');
            $(this).children(":eq(1)").css('color', '#43a047');
            $(this).children(":eq(1)").children(":eq(0)").children(":eq(0)").css('background-color', '#43a047');
        });

        return () => {
            for(let idx2 = 0; idx2 < timeouts.length; idx2++) {
                clearTimeout(timeouts[idx2]);
            }
        }
    }, [])

    return <div className="timelineItem">
        <div className="timelineDot"><FontAwesomeIcon icon={faSquare} /></div>
        <div className="timelineDescBlock">
            <div className="timelineTime"><span>{time}</span></div>
            <div className="timelineTitle">{title}</div>
            <div className="timelineDesc">
                {desc}
                <div className="timelineLink">
                    {link1 ? <a href={link1} target="blank"><FontAwesomeIcon icon={faLink} /></a> : null}
                    {link2 ? <a href={link2} target="blank"><FontAwesomeIcon icon={faAndroid} /></a> : null}
                    {link3 ? <a href={link3} target="blank"><FontAwesomeIcon icon={faAppStore} /></a> : null}
                </div>
            </div>
            
        </div>
    </div>
}

export default TimelineComponent;