import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/giphy.gif";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">I am Prashant Kumar Yadav</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        I created this Project with the help of youtube and github.
      </h4>
      <div className="profile-links">
        <a href="https://github.com/0PrashantYadav0" className="github">
          <FaGithub />
        </a>
        <a href="https://www.youtube.com/" className="Youtube">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/in/prashantyadav097/" className="linkedin">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
