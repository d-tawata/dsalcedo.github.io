import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {},
      skills: [],
      count: 0,
      bulletPts: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.projectID;
    fetch(`https://dsalcedopierce-api.herokuapp.com/api/projects/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          project: json,
          skills: json.skills,
          bulletPts: json.bulletPoints,
          isLoading: false,
        });
      })
      .then(() => {
        document.title = "DS | " + this.state.project.title || "DS | Project";
      });
    document.title = "DS | " + this.state.project.title || "DS | Project";
  }

  renderURLButton() {
    if (this.state.project.url != "") {
      return (
        <div className="text-center">
          <button className="btn-url mb-3" role="button">
            <a href={this.state.project.url} target="_blank">
              Click here for more
            </a>
          </button>
        </div>
      );
    }
  }

  render() {
    return this.state.isLoading ? (
      <Loading />
    ) : (
      <>
        <div className="container">
          <div className="row">
            <div className="column3 text-center">
              <Link to={`/`}>
                <button className="btn-return" role="button">
                  <FontAwesomeIcon icon={faArrowLeft} /> Return to portfolio
                </button>
              </Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/projects/${this.state.project.imgURL}`}
                className="rounded mx-auto d-block my-2"
                alt="..."
              ></img>
            </div>
            <div className="column3">
              <h2>{this.state.project.title}</h2>
              <h6>{this.state.project.description}</h6>
              <p></p>
              <ul className="tags">
                {this.state.skills.map((skill) => {
                  this.state.count++;
                  return (
                    <li className="tag" key={this.state.count}>
                      {skill}
                    </li>
                  );
                })}
              </ul>
              <p>{this.state.project.body}</p>
              <ul>
                {this.state.bulletPts.map((pts) => {
                  this.state.count++;
                  return <li key={this.state.count}>{pts}</li>;
                })}
              </ul>
              {this.renderURLButton()}
            </div>
          </div>
          <div className="row">
            {this.state.project.images.map((image) => {
              this.state.count++;
              return (
                <div className="column2" key={this.state.count}>
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/projects/AME441/${image.url}`}
                      className="mx-auto d-block mt-2"
                      alt="..."
                    ></img>
                    <div className="content-details fadeIn-top">
                      {/* <h6>{project.title}</h6>*/}
                      <p>{image.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
