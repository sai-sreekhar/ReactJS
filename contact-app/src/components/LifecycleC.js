import React, { Component } from "react";
import LifecylceD from "./LifecycleD";

class LifecycleC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sai Sreekar",
    };
    console.log("LifecycleC constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleC getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleC DidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleC shouldComponentUpdate ");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifecylceC getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleC componentDidUpdate");
  }

  onClickHandler = () => {
    this.setState({
      name: "Sridhar",
    });
  };

  render() {
    console.log("LifecycleC render");
    return (
      <div>
        <div>Lifecycle C {this.state.name}</div>
        <button onClick={this.onClickHandler}></button>
        <LifecylceD></LifecylceD>
      </div>
    );
  }
}

export default LifecycleC;
