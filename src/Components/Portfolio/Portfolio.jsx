import "./Portfolio.css";
import React from "react";
import {Row, Col} from "react-bootstrap"
import volkenoImg from "../../Assets/volkeno.svg"
import fewnuImg from "../../Assets/fewnu.svg"
import fewnuMobileImg from "../../Assets/fewnu_mobile.svg"
import volkeno2Img from "../../Assets/volkeno2.svg"
import bakeliImg from "../../Assets/bakeli.svg"
import fewnuMixteImg from "../../Assets/fewnu_mixte.svg"

function Portfolio() {

  const cards = [
    {image : volkenoImg , title  : "Volkeno" },
    {image : fewnuImg , title  : "Fewnu" },
    {image : fewnuMobileImg , title  : "Fewnu mobile" },
    {image : volkeno2Img , title  : "Volkeno" },
    {image : bakeliImg , title  : "Bakeli payement" },
    {image : fewnuMixteImg , title  : "Fewnu Mixte" },
  ];
  return (
    <div className="portfolio bg-light" id="portfolio">
      <h2 className="py-4 text-center">MON PORTFOLIO</h2>
      <div className="portfolio_conteneur_row">
        <Row className="align-items-center justify-content-center  portfolio_row pb-5">
          {
            cards.map(({image , title}) => (
              <Col md={3} className='bg-white rounded mx-4 my-4 p-4 portfolio_col' >
                <div className="portfolio-conteneur-cards">
                  <div className="portfolio_cards">
                    <div className="mx-auto">
                      <img src={image} alt="image" className="mx-auto"/>
                    </div>
                    <h3 className="portfolio_card-title text-center">{title}</h3>
                    <p className="text-center">
                      Créer un équivalent Netflix de 
                      Disney. Pour l'anecdote ce site a 
                      été fait avant la création de Disney+. 
                      #React #API #Redux
                    </p>
                    <buttton className="portfolio_cards_btn rounded">Voir le projet github</buttton>
                  </div>
                </div>
              </Col>

            ))
          }
        </Row>

      </div>
    </div>
  );
};

export default Portfolio;
