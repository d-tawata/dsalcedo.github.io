import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class LinkedIn extends Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <script
            src="https://platform.linkedin.com/badges/js/profile.js"
            async
            defer
            type="text/javascript"
          ></script>
        </Helmet>
      </div>
    );
  }
}
