import "./Presentation.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
// import waveImg from "../../Assets/wave.svg"

function Presentation() {
  const presentation = [
    {num  : 1 , title : "Capacité d'appretissage" } ,
    {num  : 2 , title : "Collaboration" } ,
    {num  : 3 , title : "Resonsabilité" } ,
    {num  : 4 , title : "Prise de décision" } ,
    {num  : 5 , title : "Gestion du temps" } 
  ]
  return (
    <div className="presentation mt-4 mb-5" id="presentation">
    <h2 className="text-center fw-bold">PRESENTATION</h2>
    <Row className="align-items-center mx-4 my-4">
      <Col md={7} className="">
      {
        presentation.map(({num , title}) => (
          <div className="d-flex align-items-center my-2">
            <div className="presentation_num me-4 ">{num}</div>
            <div>{title}</div>
          </div>
        ))

      }
      </Col>
      <Col md={5}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
        <p> remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Col>
    </Row>
    </div>
  );
};

export default Presentation;
