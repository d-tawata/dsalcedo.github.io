import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default class NoMatch extends React.Component {
  render() {
    return (
      <>
        <div className="container no-match">
          <Link to={`/`}>
            <button className="btn-return" role="button">
              <FontAwesomeIcon icon={faArrowLeft} /> Return to portfolio
            </button>
          </Link>
          <div id="main">
            <div class="fof">
              <h1>Error 404</h1>
              <p>Page not found.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
