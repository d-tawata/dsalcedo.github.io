import React from "react";
import { Link } from "react-router-dom";
// import ADT from "../images/projects/ADT_2019.jpg";

export default class Projects extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <div class="content">
                <Link to={`/projects/1`}>
                </Link>
                {/* <a
                  href="https://unsplash.com/photos/HkTMcmlMOUQ"
                  target="_blank"
                > */}
                  <div class="content-overlay"></div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/projects/AME441.png`}
                    className="rounded mx-auto d-block my-2"
                    alt="..."
                  ></img>
                  <div class="content-details fadeIn-top">
                    <h6>This is a title</h6>
                    <p>This is a short description</p>
                  </div>
                </a>
              </div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/projects/Boeing Freshman.jpg`}
                className="rounded mx-auto d-block my-2"
                alt="..."
              ></img>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/projects/CSatSC.png`}
                className="rounded mx-auto d-block my-2"
                alt="..."
              ></img>
            </div>
            <div className="col">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/projects/RTX.svg`}
                className="rounded mx-auto d-block my-2"
                alt="..."
              ></img>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/projects/SCwordfish.png`}
                className="rounded mx-auto d-block my-2"
                alt="..."
              ></img>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/projects/Dryden Research.jpeg`}
                className="rounded mx-auto d-block my-2"
                alt="..."
              ></img>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/projects/LCDC.png`}
                className="rounded mx-auto d-block my-2"
                alt="..."
              ></img>
            </div>
            <div className="col">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/projects/Glider Project.jpg`}
                className="rounded mx-auto d-block my-2"
                alt="..."
              ></img>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/projects/SHPE Sponsorship.png`}
                className="rounded mx-auto d-block my-2"
                alt="..."
              ></img>
            </div>
            <div className="col">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/projects/AME261.png`}
                className="rounded mx-auto d-block my-2"
                alt="..."
              ></img>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/projects/NGHSIC.png`}
                className="rounded mx-auto d-block my-2"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </>
    );
  }
}
