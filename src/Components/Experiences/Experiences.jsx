import "./Experiences.css";
import React from "react";
import { Col, Row } from "react-bootstrap";

function Experiances() {
  const experiences = [
    {
      title : "Développeur Front-End en alternance ( RNCP niv 6 ),",
      date : "Janvier 2021",
      para : "Pédagogie basée sur la réalisation de projets concrets avec l’accompagnement d’un expert métier chaque semaine. L'alternancepeut débuter à tout moment dans l'année avec 4 jours en entreprise et un jour de formation modulables dans lasemai"
    },
    {
      title : "CS50, Harvard",
      date : "Aout-otocbre 2020",
      para : "Formation en ligne exclusivement dispensée en anglais. Les sujets comprennent l'abstraction, les algorithmes, les structures dedonnées, l'encapsulation, la gestion des ressources, la sécurité, l'ingénierie logicielle et le développement Web. L'ensemble des problèmes est inspiré des domaines du monde réel de la biologie, de la cryptographie, de la finance et des jeux."
    },
    {
      title : "Développeur junior, M2I formation",
      date : "Mars-Juillet 2020",
      para : "Formation à raison de 35h/s à distance. Ce cursus comprend HTML, CSS, Bootstrap, Algorithmie, Javascript, React JS, Redux, LESS/SAAS, Git, Github enseigné par un expert toujours en activité. Cette formation m'a permis de valider ces enseignements par la pratique de plus  d'une douzaine de projets."
    }
  ]
  return (
    <div className="experiences bg-light p-5">
      <h2 className="text-center">MES EXPERIENCES</h2>
      <Row>
      {
        experiences.map(({title , date , para}) => (
          <Col className=" col-12 bg-white p-3 my-4 shadow rounded">
            <h4 className="fw-bold">{title}</h4>
            <p style={{color: "#FE9800"}}>{date}</p>
            <p>{para}</p>
          </Col>
        ))
      }
      </Row>

    </div>
  );
};

export default Experiances;
