import "./Header.css";
import React from "react";
import NavBar from "../NavBar/NavBar";
import traitImg from '../../Assets/trait.svg'
import { Col, Row } from "react-bootstrap";
import telImg from "../../Assets/tel.svg"
import emailImg from "../../Assets/email.svg"
import placeImg from "../../Assets/place.svg"
import nameImg from "../../Assets/lieu.svg"
import portraitImg from "../../Assets/profil.svg"
import waveImg from "../../Assets/wave.svg"


function Header() {
  const contact = [
    {image : telImg , name : "76 605 84 14" , id : 1},
    {image : emailImg , name : "gninguealiou@102email.com" , id: 2},
    {image : placeImg , name : "Liberté 6 Dakar", id: 3 },
    {image : nameImg , name : "Volkeno" , id: 4},
  ]
  return (
    <div className="header">
    <div className="header_opacity">
      <NavBar />
      <img src={traitImg} alt="trait" className="header_trait w-100"/>
      <div className="banner">
        <Row className="align-items-center">
          <Col md={8} className="">
            <h1 className="header_title text-white text-md-start text-center">Hello ! je suis <span className="header_name">HOUSSEYNOU KENDE</span> <br />Développeur backend senior à Volkeno</h1>
            <div className="header_conteneur_contact mx-auto">
              <Row className="align-items-center justify-content-arrow py-4 mx-auto " style={{width : `100%`}}>
                {
                  contact.map(({image , name , id} , index) => (
                    <Col className={id === 2  ? "d-flex my-md-0 my-2 align-items-center col-md-4 col-12 " : "d-flex my-md-0 my-2 align-items-cente col-md-2 col-12"}>
                      <img src={image} alt="icon" />
                      <div className="text-white ms-2">{name}</div>
                    </Col>
                  ))
                }
              </Row>
            </div>
          </Col>
          <Col md={4} className="">
            <img src={portraitImg} alt="profil" className="img-fluid w-100 "/>
          </Col>
        </Row>
      </div>
      <div className="header_wave">
        <img src={waveImg} alt='wave'className="w-100 banner_protrait" />
      </div>
    </div>
    </div>
  );
};

export default Header;
