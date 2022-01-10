import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
// import ADT from "../images/projects/ADT_2019.jpg";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("https://dsalcedopierce-api.herokuapp.com/api/projects?_sort=id")
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((json) => {
        // console.log(json);
        this.setState({
          projects: json,
          isLoading: false,
        });
      });

    document.title = "DS | Portfolio";
    // console.log(this.state.projects);
  }

  render() {
    return this.state.isLoading ? (
      <Loading />
    ) : (
      <>
        <div className="container">
          <div className="row">
            <div className="column">
              {this.state.projects.map((project) => {
                if (project.column == 0) {
                  return (
                    <div className="content" key={project.id}>
                      <Link to={`/${project.id}`}>
                        <div className="content-overlay"></div>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/projects/${project.imgURL}`}
                          className="mx-auto d-block mt-2"
                          alt="..."
                        ></img>
                        <div className="content-details fadeIn-top">
                          <h6>{project.title}</h6>
                          <p>{project.date}</p>
                        </div>
                      </Link>
                    </div>
                  );
                } else {
                  return;
                }
              })}
            </div>
            <div className="column">
              {this.state.projects.map((project) => {
                if (project.column == 1) {
                  return (
                    <div className="content" key={project.id}>
                      <Link to={`/${project.id}`}>
                        <div className="content-overlay"></div>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/projects/${project.imgURL}`}
                          className="mx-auto d-block mt-2"
                          alt="..."
                        ></img>
                        <div className="content-details fadeIn-top">
                          <h6>{project.title}</h6>
                          <p>{project.date}</p>
                        </div>
                      </Link>
                    </div>
                  );
                } else {
                  return;
                }
              })}
            </div>
            <div className="column">
              {this.state.projects.map((project) => {
                if (project.column == 2) {
                  return (
                    <div className="content" key={project.id}>
                      <Link to={`/${project.id}`}>
                        <div className="content-overlay"></div>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/projects/${project.imgURL}`}
                          className="mx-auto d-block mt-2"
                          alt="..."
                        ></img>
                        <div className="content-details fadeIn-top">
                          <h6>{project.title}</h6>
                          <p>{project.date}</p>
                        </div>
                      </Link>
                    </div>
                  );
                } else {
                  return;
                }
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
