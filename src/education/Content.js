import React from "react";
import imjs from "./reactjs.JPG";
import imjsX from "./reactjsx.JPG";
import imcomp from "./reactcomponent.JPG";
import imgport from "./reactportfolio.JPG";

function Content() {
  return (
    <div>
      <h2>Mes creations en react </h2>
      <div  className="information">
        <div className="subinfo">
          <img src={imjs} alt="projet1" />
          <a href="https://github.com/oumaymamachraoui/ReactJs">
            {" "}
            Projet React Js{" "}
          </a>
        </div>
        <div className="subinfo">
          <img src={imjsX} alt="projet2" />
          <a href="https://github.com/oumaymamachraoui/ReactJSX">
            Projet React Jsx
          </a>
        </div>
        <div className="subinfo">
          <img src={imcomp} alt="projet3" />
          <a href="">
            {" "}
            Projet React Component <br />{" "}
          </a>
        </div>
        <div className="subinfo">
          <img src={imgport} alt="projet4" />
          <a href="">
            Projet React Portfolio 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Content;
