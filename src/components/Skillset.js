import React, { useEffect } from 'react';
import '../App.css';
import $ from "jquery";

function Skillset() {

    useEffect(() => {
        $('a').css('color', '#fbfffc');
        $('a').css('background-color', '#43a047');
        $('a:contains("Skill Set")').css('color', '#43a047');
        $('a:contains("Skill Set")').css('background-color', '#fbfffc');
    })

    return <div className="skillsetIntroduction">
        <div className="skillsetBlock">
            <div className="skillsetTitle">Skill Set</div>
            <div className="potions">
                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>HTML
                                    </div>
                    </div>
                </div>
                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>CSS
                                    </div>
                    </div>
                </div>
                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>JavaScript
                                    </div>
                    </div>
                </div>
                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>React
                                    </div>
                    </div>
                </div>

                <br />

                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>Java
                                    </div>
                    </div>
                </div>
                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>Python
                                    </div>
                    </div>
                </div>
                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>MySQL
                                    </div>
                    </div>
                </div>

                <br />

                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>Spring
                                    </div>
                    </div>
                </div>
                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>RN
                                    </div>
                    </div>
                </div>
                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>GCP
                                    </div>
                    </div>
                </div>
                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>Firebase
                                    </div>
                    </div>
                </div>
            </div>
            <div className="skillsetLine"></div>
        </div>
        <div className="skillsetBlock">
            <div className="potions second">
                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>PremierePro
                                    </div>
                    </div>
                </div>
                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>AfterEffects
                                    </div>
                    </div>
                </div>
                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>InDesign
                                    </div>
                    </div>
                </div>

                <br />

                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>Sonar
                                    </div>
                    </div>
                </div>
                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>Logic
                                    </div>
                    </div>
                </div>

                <br />

                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>SDLTrados
                                    </div>
                    </div>
                </div>
                <div className="flask">
                    <div className="containing">
                        <div className="liquid">
                            <div className="bubbles"></div>Across
                                    </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
}

export default Skillset;