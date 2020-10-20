import React from "react";
import profile from "../../../images/cv_image.jpg";
import Styles from "./Profile.module.css";
export default function Profile(){
    console.log(__dirname, __filename);
    return(
        <img src={profile} className={Styles.profile}/>
    );
}
