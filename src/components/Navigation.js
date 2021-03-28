import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import $ from "jquery";

function Navigation(props) {

    useEffect(() => {
        if(window.innerWidth < 800) {
            $('.navigation').hide();    // 일단 감추고
            $(".navigation").css({      // 위치 지정하고
                "top" : $('.navigationBtn').offset().top + 55,
                "right" : "25px"
             });
            // 클릭 이벤트
            document.querySelector('.navBar').addEventListener('click', function(){                
                $('.navigation').toggle('slow');
            })            
        }


    })



    return <div className="navBar">
        <div className="navigationBtn"><FontAwesomeIcon icon={faBars} /></div>
        <div className="navigation">
            <Link to="/about" className="link">About</Link>
            <Link to="/development" className="link">Development</Link>
            <Link to="/others" className="link">Others</Link>
            <Link to="/careers" className="link">Careers</Link>
            <Link to="/contact" className="link">Contact</Link>
        </div>
    </div>
}

export default Navigation;