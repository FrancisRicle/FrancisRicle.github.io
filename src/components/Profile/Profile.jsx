import React from "react";
import profile from "../../../images/photo.png";
import banner from "../../../images/Banner.png";
import cv from "../../../images/curriculum.png";
import briefcase from "../../../images/briefcase.png";
import henry from "../../../images/henry_certificate.jpg";
import About from "../About/About.jsx";
import Styles from "./Profile.module.css";
import {Link} from "react-router-dom";
export default function Profile(){
    return(
        <div className={Styles.profile}>
            <img src={banner} className={Styles.banner}/>
            <img src={profile} className={Styles.profile_photo}/>
            <About/>
            <div className={Styles.certificates}>
                <img src={henry} alt=""/>
            </div>
            <div className={Styles.more}>
                <Link to="/cv" className={Styles.links}>
                   <h1>CV</h1>
                    <img src={cv}/>
                </Link>
                <Link to="/projects" className={Styles.links}>
                   <h1>Proyectos</h1>
                    <img src={briefcase}/>
                </Link>
            </div>
        </div>
        );
    }
