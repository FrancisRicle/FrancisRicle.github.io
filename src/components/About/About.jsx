import React from "react";
const About = React.forwardRef((props, ref) => (
        <div ref={ref} {...props}>
         <h1>FRANCIS RICLE</h1>
         <h3>FULLSTACK WEB DEVELOPER | TÉCNICO INFORMÁTICO</h3>
         <p>
             Técnico Informático orientado hacia la programación, apasionado por el desrrollo de software. Mis conocimientos actualmente son: HTML, CSS, JavaScript, NodeJS, PHP, ReactJs, Redux, JQuery, React Hooks, MySQL, PostgreSQL, Sequelize, ExpressJs
         </p>
        </div>
    )
)
export default About;
