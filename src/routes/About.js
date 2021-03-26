import React, { useEffect, useState } from 'react';
import '../App.css';
import FirstFrame from '../components/FirstFrame';

function About() {
    return <section>
        <FirstFrame></FirstFrame>
        <div className="secondFrame">About</div>
    </section>
}

export default About;