import React from 'react';

function sendMail() {
    window.location.href = "mailto:laneeblog@gmail.com"
}

// var background = document.getElementById("background");
// document.addEventListener('mousemove', event => {
//   var posX = event.clientX - window.innerWidth/2;
//   var posY = event.clientY - window.innerHeight/2;  
//   background.style.transform = "translate("+posX*0.01+"%, "+posY*0.01+"%)"; 
// });
// <img src="http://localhost:3000/images/%EC%A0%95%EC%82%AC%EA%B0%81%ED%98%95.jpg" id="background"></img>

function FirstFrame() {
    return <div className="firstFrame">
        <div className="firstFrameImg"><img src="/images/정사각형.jpg" alt="나의사진" title="나의사진"></img></div>
        <div className="firstFrameDesc">
            <h2>LANEEBLOG</h2>
            <h4>컨텐츠 및 웹앱 개발자</h4>
            <h4>@ 동네가게</h4>
            <div className="contactFF" onClick={sendMail}>CONTACT</div>
        </div>
        
    </div>
}

export default FirstFrame;