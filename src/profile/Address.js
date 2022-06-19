import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faMap } from "@fortawesome/free-regular-svg-icons";
function Address() {
  return (
    <div>
      <p>
        <FontAwesomeIcon icon={faEnvelopeOpen} />
        oumayma1357@gmail.com
      </p>
      <p>
        {" "}
        <FontAwesomeIcon icon={faMap} /> Mnihla, Ariana, Tunis
      </p>
    </div>
  );
}

export default Address;
