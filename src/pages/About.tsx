import React from "react";
import Wrapper from "../sections/Wrapper";
import { avatarImage } from "../utils/imageImport"
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h2 className="profile-text">Made By</h2>
      <h1 className="profile-text">JoyBoy</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
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
