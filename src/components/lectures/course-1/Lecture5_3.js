import React from "react";
import ReactPlayer from "react-player/youtube";
import "../../style.css";
import "../../bootstrap.css";
import { Link } from "react-router-dom";
import ppt from "./Unit V/3.mysql experiment.pptx";

function Lecture5_3() {
  return (
    <>
      <section id="popular-courses" class="courses">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Lecture .3 - (JDBC Connectivity)</h2>
            <br></br>
            <p>download files for this lecture</p>
            <br></br>
            <ul>
              <li>
                <a href={ppt}>
                  <h5>Download PPT</h5>
                </a>
                <br></br>
              </li>
              {/* <li>
                  <a><h5>download PDF</h5></a><br></br>
                </li> */}
            </ul>

            <h2>Video on Java Basics</h2>
            <br></br>
            <ReactPlayer
              controls
              volume
              url="https://www.youtube.com/watch?v=aqHhpahguVY"
            />
            {/* <button class="btn btn-primary"> Submit Assignment</button> */}
            <button class="btn btn-primary hell"> Attend Quiz </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lecture5_3;
