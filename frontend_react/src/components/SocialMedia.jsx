import React from "react";


import { AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <AiFillLinkedin onClick={()=> window.open("https://www.linkedin.com/in/aginelsalvador/", "_blank")} />
      </div>
    </div>
  );
};

export default SocialMedia;