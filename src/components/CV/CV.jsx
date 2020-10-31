import React, {useEffect, useRef} from "react";
import profile from "../../../images/photo.png";
import Styles from "./CV.module.css";
import About from "../About/About.jsx";
import Nav from "./Nav.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAddressCard as fasFaAddressCard, faBirthdayCake, faHome, faBriefcase, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard as farFaAddressCard, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {useLocation} from "react-router-dom";
export default function CV(){
    const location = useLocation();
    const about = useRef(null);
    const xp = useRef(null);
    const studies = useRef(null);
    const skills = useRef(null);
    const hashRoute = {
        "#about": about,
        "#xp": xp,
        "#studies": studies,
        "#skills": skills,
    }
    useEffect(()=>{
        if(!!hashRoute[location.hash])hashRoute[location.hash].current.scrollIntoView();
    },[location]);
    
    return(
        <div className={Styles.cv}>
            <Nav/>
            <div className={Styles.cv_body}>
                <div className={Styles.cv_data_contact}>
                    <img src={profile}/>
                    <p>
                        <FontAwesomeIcon icon={fasFaAddressCard}/> 42344578
                    </p>
                    <p>
                        <FontAwesomeIcon icon={farFaAddressCard}/> 20-42344578-6
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faBirthdayCake}/> 21/12/1999
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faHome}/> A. Aguiar 221, Campana, Provincia de Buenos Aires
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope}/> francisricleruiz@gmail.com
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faGithub}/> <a href="https://github.com/FrancisRicle">github.com/FrancisRicle</a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faLinkedin}/> <a href="https://www.linkedin.com/in/francis-ricle-9191b6175/">linkedin.com/in/francis-ricle-9191b6175/</a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faBriefcase}/> <a href="https://francisricle.github.io/#/projects">francisricle.github.io/#/projects</a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhone}/> +54 9 3489 690596
                    </p>
                </div>
                <div className={Styles.cv_info}>
                    <About ref={about} className={Styles.about}/>
                    <hr size="1"/>
                    <div ref={studies} className={Styles.studies}>
                        <h1>ESTUDIOS</h1>
                        <ul>
                            <li><b>Técnico Informático</b> - Escuela Secundaria Técnica N°1 Campana - (2012-2018)</li>
                            <li><b>Full Stack Developer</b> - Henry (<a href="https://soyhenry.com">soyhenry.com</a>) - (2020)</li>
                        </ul>
                    </div>
                    <hr size="1"/>
                    <div ref={xp} className={Styles.xp}>
                        <h1>ESPERIENCIA LABORAL</h1>
                        <ul>
                            <li><b>Electricista</b> (Ayudante) - Techint (2018/01 - 2018/02)</li>
                            <li><b>Electricista</b> (Ayudante) - Techint (2020/01 - 2020/02)</li>
                        </ul>
                    </div>
                    <hr size="1"/>
                    <div ref={skills} className={Styles.skills}>
                        <h1>HABILIDADES</h1>
                        <h3>TÉCNICO INFORMÁTICO</h3>
                        <ul>
                            <li>Armado y reparacíon de PCs</li>
                            <li>Instalación y configuración de Sistemas</li>
                            <li>Instalación de Redes</li>
                            <li>Carpintería</li>
                            <li>Electricisad Básica</li>
                            <li>Montaje de proyectos Arduino</li>
                        </ul>
                        <h3>FULLSTACK DEVELOPER</h3>
                        <h4>BACK-END</h4>
                        <ul>
                            <li>PHP</li>
                            <li>NodeJs</li>
                            <li>Sequelize</li>
                            <li>PostgreSQL</li>
                            <li>MySQL</li>
                        </ul>
                        <h4>FRONT-END</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>ReactJs(WEB) Hooks</li>
                            <li>ReduxJs</li>
                        </ul>
                        
                    </div>
                </div>
            </div> 
            <canvas crossorigin="anonymous" id="cv_francis_ricle"></canvas>
        </div>
    );
}
