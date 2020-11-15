import React from "react";
import profile from "../../images/cv_image.png";
import nodejs from "../../images/nodejs.png";
import git from "../../images/git.png";
import php from "../../images/php.png";
import redux from "../../images/redux.png";
import react from "../../images/react.png";
import pgsql from "../../images/pgsql.png";
import mysql from "../../images/mysql.png";
import Styles from "./Profile.module.css";
import {Link} from "react-router-dom";
export default function Profile(){
    return(
        <div className={Styles.profile}>
	    <img src={profile}/>
	    <div className={Styles.desc}>
	    	<h1>Francis Ricle</h1>
	    	<h3>Full Stack Developer | Técnico Informático</h3>
	    	<p>
	    		Técnico Informático orientado hacia la programación, apasionado por el desrrollo de software. Mis conocimientos actualmente son:
	    	</p>
	    	<img src={php}/>	
	    	<img src={nodejs}/>	
	    	<img src={mysql}/>	
	    	<img src={pgsql}/>	
	    	<img src={react}/>	
	    	<img src={redux}/>	
	    	<img src={git}/>	
	    </div>
        </div>
        );
    }
