import React from "react";
import { Link } from "react-router-dom";

export default class About extends React.Component {
  render() {
    document.title = "DS | About";
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="column4">
              <div className="content2 mb-4">
                <h3 className="mb-2">About</h3>
                <p className="mb-2 about-me">
                  Hello! I’m{" "}
                  <a
                    href="https://www.linkedin.com/in/diana-salcedo-pierce/"
                    target="_blank"
                  >
                    Diana Salcedo-Pierce
                  </a>
                  . I’m an an aspiring engineer. I will graduate USC in May 2022
                  with a Bachelor of Science in aerospace engineering and a
                  minor in computer programming.
                </p>
                <p className="mb-2">
                  I have experience in{" "}
                  <strong>manufacturing, program management, and coding</strong>
                  , with 2 internships at Raytheon Technologies and as the
                  current program manager for an international award-winning
                  student design team.
                </p>
                <p>
                  I’m seeking a full-time entry-level position at an innovative
                  and engaging company.
                </p>
              </div>
            </div>
            <div className="column4">
              <div className="content2 mb-4">
                <div
                  className="badge-base LI-profile-badge"
                  data-locale="en_US"
                  data-size="large"
                  data-theme="dark"
                  data-type="VERTICAL"
                  data-vanity="diana-salcedo-pierce"
                  data-version="v1"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
