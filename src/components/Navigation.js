import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import $ from "jquery";

function navToggle() {                
    $('.navigation').toggle('slow')
}

function Navigation(props) {

    useEffect(() => {
        
        if(window.innerWidth < 950) {
            $('.navigation').hide();  
            $(".navigation").css({  
                "top" : "75px",
                "right" : "25px"
             });
            document.querySelector('.navBar').addEventListener('click', navToggle)            
        }

        $(window).resize(function() { 
            document.querySelector('.navBar').removeEventListener("click", navToggle);
            if(window.innerWidth < 950) {
                $('.navigation').hide();    // 일단 감추고
                $(".navigation").css({      // 위치 지정하고
                    "top" : "75px",
                    "right" : "25px"
                 });
                document.querySelector('.navBar').addEventListener('click', navToggle)            
            }else {
                $('.navigation').show();  
                $(".navigation").css({     
                    "top" : "30%",
                    "right" : "25px"
                 });
            }      
        });

    })
    
    return <div className="navBar">
        <div className="navigationBtn"><FontAwesomeIcon icon={faBars} /></div>
        <div className="navigation">
            <Link to="/" className="link">Home</Link>
            <Link to="/timeline" className="link">Timeline</Link>
            <Link to="/development" className="link">Development</Link>
            <Link to="/others" className="link">Others</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/contact" className="link">Contact</Link>
        </div>
    </div>
}

export default Navigation;