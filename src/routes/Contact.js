import React, { useEffect } from 'react';
import '../App.css';
import FirstFrame from '../components/FirstFrame';
import $ from "jquery";
import data from '../Data'
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelopeOpen, faHeart } from '@fortawesome/free-solid-svg-icons';

function sendEmail(e) {
    e.preventDefault();
    if($('input[name=from_name]').val() === "" || $('input[name=from_email]').val() === "" || $('input[name=message]').val() === "") {
        alert("양식을 모두 입력해 주세요 😄")
        return;
    }
    emailjs.sendForm('service_qyfxwh8', 'template_rv4lyz4', e.target, 'user_qMpQ8EuPVJQHaiCyP0xT7')
        .then(() => {  
            $('#form')[0].reset();
            alert("전송 완료! 😄");
        }, () => {
            alert("전송에 실패했어요. CONTACT 버튼을 이용해 보시겠어요?");
        });
}

function Contact() {

    useEffect(() => {
        $('a').css('color', '#fbfffc');
        $('a').css('background-color', '#43a047');
        $('a:contains("Contact")').css('color', '#43a047');
        $('a:contains("Contact")').css('background-color', '#fbfffc');
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
                <div className="contactCommentTitle">Contact</div>
                <div className="contact">
                    <div className="contactComment">                        
                        <div className="contactCommentBox">
                            <div className="contactCommentBoxEach">
                                <div><FontAwesomeIcon icon={faMapMarkerAlt} className="contactIcon" /></div>
                                <div>Seoul</div>
                            </div>
                            <div className="contactCommentBoxEach">
                                <div><FontAwesomeIcon icon={faEnvelopeOpen} className="contactIcon" /></div>
                                <div>laneeblog@gmail.com</div>
                            </div>
                            <div className="contactCommentBoxEach">
                                <div><FontAwesomeIcon icon={faHeart} className="contactIcon" /></div>
                                <div>Always Available</div>
                            </div>
                        </div>
                    </div>
                    <div className="contactForm">
                        <form onSubmit={sendEmail} id="form">
                            <label>Name</label><br />
                            <input type="text" name="from_name" /><br />
                            <label>Email</label><br />
                            <input type="email" name="from_email" /><br />
                            <label>Message</label><br />
                            <textarea name="message" /><br />
                            <input type="submit" value="Send" />
                        </form>
                    </div>                
                </div>
            </div>
        </motion.div>
    </section>
}

export default Contact;