import React, { useContext } from "react";
import "./Works.css";
import Linkedin from "../../img/LinkedinLogo.png";
import Machinehack from "../../img/Machinehack.png";
import Kaggle from "../../img/kagglenew.png";
import Git from "../../img/git.png";
import leetcode from "../../img/leetcode.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Online Presence 
          </span>
          <span>Hackathons & Awards</span>
          <spane>
            Kaggle, Github, Machine Hack, LinkedIn, Leetcode
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Linkedin} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Git} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Kaggle} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Machinehack} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={leetcode} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
