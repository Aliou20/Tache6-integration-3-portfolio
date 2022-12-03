import "./Competences.css";
import React from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";

function Competences() {
  
  const parts = [
    {
      title1 : "OUTILS" ,
      title2 : "LANGUES" ,
      progress :  [
        { value : 100 , name : "BOOSTRAP"},
        { value : 75 , name : "LARAVEL"},
        { value : 75 , name : "REACT"},
        { value : 75 , name : "DIANGO"}
      ],
      langues : ["FRANCAIS","ANGLAIS","POULAAR",],
      id : 1
   },
    {
      title1 : "LANGUAGE" ,
      title2 : "HOBBIES" ,
      progress :  [
        { value : 100 , name : "HTML"},
        { value : 75 , name : "CSS"},
        { value : 75 , name : "JAVASCRIPT"},
        { value : 75 , name : "PHP"}
      ],
      langues : ["Créatrice du blog « Mon job de dev »",
      "Le développement web en général",
      "PWA",
      "Calculs distribués"
      ],
      id : 2
   }
  ]
  return (
    <div className="competences" id = "competence">
      <h2 className="text-center my-4" >Mes Competences</h2>
      <Row style={{width : "97%"}} className="mx-auto">
        {
          parts.map(({title1,title2,progress, langues , id},index) => (
            <Col md={6} className="my-5">
              <h4 className={id === 2 ? "text-md-start text-center p-3  bg-light" : "text-md-end text-center p-3 text-end bg-light"} style={{color : "#09998B"}}>{title1}</h4>
                {
                  progress.map(({value , name}) => (
                    <div className= {id === 2 ? "d-flex align-items-center justify-content-center justify-md-content-start ms-5" : "d-flex align-items-center justify-md-content-end justify-content-center"}>
                      <ProgressBar className={id === 2 ? "order-2 w-50 rounded-0 me-4" : "order-1 w-50 rounded-0 me-4"} now={value} label={`${value}%`}/>
                      <p className= {id === 2  ? "order-1 w-25" : "order-2 w-25"}>{name}</p>
                    </div>
                  ))
                }
                <div className={id === 2  ? "d-flex justify-content-center justify-md-content-center flex-column align-md-items-start align-items-center ms-0 ms-md-5" : "d-flex justify-content-center justify-md-content-end flex-column align-items-center align-md-items-end ms-md-5 me-0"}>
                  <h4 className={id === 2 ? "text-md-start text-center my-2 my-md-5" : "text-md-end text-center my-md-5 my-2"} style={{color : "#09998B"}}>{title2}</h4>
                  {
                    langues.map(langue => (
                      <p className={id === 2 ? "ms-5" : "me-5"}>{langue}</p>
                    ))
                  }
                </div>
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default Competences;
