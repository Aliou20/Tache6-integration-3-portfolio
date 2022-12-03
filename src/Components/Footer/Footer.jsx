import "./Footer.css";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import projectImg from "../../Assets/project.svg"
import traitImg from "../../Assets/trait_hori.svg"
import algoImg from "../../Assets/algo.svg"
import consoleImg from "../../Assets/console.svg"
import borderImg from "../../Assets/border.svg"
import portraitImg from "../../Assets/profil.svg"
import waveBottomImg from "../../Assets/wave_bottom.svg"

function Footer() {

  const icons = [
    {image : projectImg , title : "18 projects"},
    {image : algoImg , title : "20 algorithmes"},
    {image : consoleImg , title : "10 console.log()"},
    {image : borderImg , title : "16 border : solid red 1px"},
  ]
  return (
    <div className="footer ">
    <div className="pt-5 px-5 mx-auto">
      <div className="d-flex justify-content-center align-items-center">
        <Row className="footer_icon">
          {
            icons.map(({image , title}) => (
            <Col md={3} className='d-flex align-items-center justify-content-center p-3 flex-column footer_after'>
              <img src={image} alt="icon image" className=""/> 
              <h4 className="fw-bold text-white mt-3 ">{title}</h4>
              {/* <img src={traitImg} alt="img" /> */}
            </Col>
            ))
          }
        </Row>

      </div>
      <h2 className="text-center m-4">RESTONS EN CONTACT</h2>
      <Row className="align-items-center">
        <Col md={6} className="my-4">
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Prenom</Form.Label>
            <Form.Control type="email"  className="input rounded-0" />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="email"  className="input rounded-0"/>
          </Form.Group>
          <Form.Group className="mb-4 " controlId="exampleForm.ControlTextarea1"> 
            <Form.Control as="textarea" rows={8} className="textaria bg-light rounded-0" placeholder="Votre message" />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <button className="footer_btn_envoyer rounded ms-auto">ENVOYEZ</button>
          </div>
        </Col>
        <Col md={6} className=" d-flex justify-content-center align-items-center bg-light">
          <img src={portraitImg} alt="image" />
        </Col>
      </Row>
    </div>
    <img src={waveBottomImg} alt="wave" className="w-100"/>
    </div>
  );
};

export default Footer;
