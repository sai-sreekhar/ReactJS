import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const {name,post} = this.props;
    return (
      <h1>
        Welcome {name}. Post is {post}
      </h1>
    );
  }
}

export { Welcome };
