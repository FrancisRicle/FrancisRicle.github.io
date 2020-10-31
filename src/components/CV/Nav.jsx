import React from "react";
import Styles from "./Nav.module.css";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDownload, faHome } from "@fortawesome/free-solid-svg-icons";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
export default function Nav(){
    const download = () => {
        
        const input = document.querySelector('.CV-module__cv_body--3Hty9');
        html2canvas(input,{useCORS: true})
          .then((canvas) => {
                const pdf = new jsPDF();
                pdf.addImage(canvas.toDataURL(), 'PNG', 0, 0);
                pdf.save("CV_FrancisRicle.pdf");
            })
            .catch(err => console.log(err))
    }
    return(
        <div className={Styles.cv_nav}>
        <button className={Styles.cv_nav_btn}>Menú</button>
        <ul>
            <li>
                <Link to="/">
                    <FontAwesomeIcon icon={faHome}/>
                </Link>
            </li>
            <li>
                <Link to="#about">ACERCA DE</Link>
            </li>
            <li>
                <Link to="#studies">ESTUDIOS</Link>
            </li>
            <li>
                <Link to="#xp">EXPERIENCIA</Link>
            </li>
            <li>
                <Link to="#skills">HABILIDADES</Link>
            </li>
            <li>
                <button>
                    <FontAwesomeIcon icon={faDownload} className={Styles.download} onClick={download}/>
                </button>
            </li>
        </ul>
        </div>
    );
}