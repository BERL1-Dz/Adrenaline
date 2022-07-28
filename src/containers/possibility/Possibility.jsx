import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="Possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Demandez un accès anticipé pour commencer</h4>
        <h1 className="gradient-text">
          Les possibilités dépassent votre imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Demandez un accès anticipé pour commencer</h4>
      </div>
    </div>
  );
};

export default Possibility;