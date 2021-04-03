import React from 'react';

function sendMail() {
    window.location.href = "mailto:laneeblog@gmail.com"
}

let imgRoot = ""
if(window.location.href.indexOf("laneeblog.github.io") !== -1) {
    imgRoot = "/my-portfolio";
}

function FirstFrame() {
    return <div className="firstFrame">
        <div className="firstFrameImg"><img src={imgRoot + "/images/정사각형.jpg"} alt="나의사진" title="나의사진"></img></div>
        <div className="firstFrameDesc">
            <h2>LANEEBLOG</h2>
            <h4>컨텐츠 및 웹앱 개발자</h4>
            <h4>@ 동네가게</h4>
            <div className="contactFF" onClick={sendMail}>CONTACT</div>
        </div>
        
    </div>
}

export default FirstFrame;