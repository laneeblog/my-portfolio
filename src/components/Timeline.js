import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

function Timeline({time, title, desc}) {

    return <div className="timelineItem">
            <div className="timelineDot"><FontAwesomeIcon icon={faSquare} /></div>
            <div className="timelineDescBlock">
                <div className="timelineTime"><span>{time}</span></div>
                <div className="timelineTitle">{title}</div>
                <div className="timelineDesc">{desc}</div>
            </div>
        </div>
}

export default Timeline;