import React from "react";
import format from "./education.jpg";

function Formation() {
  return (
    <div className="formation-1">
      <img src={format} alt="formation" />
      <div>
        <div className="formation-2">
          <div className="mydate">
            
            <p>2021</p>
          </div>
          <p>
            Diplôme de mastère professionnelle en Technologies des Réseaux et
            des Télécommunications
          </p>
        </div>
        <hr></hr>
        <div className="formation-2">
          <div className="mydate">
            
            <p>2018</p>
          </div>
          <p>
            Diplôme en licence appliquée en Science et Technologies de
            l’Information et de Télécommunications
          </p>
        </div>
        <hr></hr>
        <div className="formation-2">
          <div className="mydate">
            
            <p>2015</p>
          </div>

          <p>Baccalauréat en Sciences Expérimentales</p>
        </div>
      </div>
    </div>
  );
}

export default Formation;
