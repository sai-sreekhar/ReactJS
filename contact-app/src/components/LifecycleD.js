import React, { Component } from "react";

class LifecycleD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sai Sreekar",
    };
    console.log("LifecycleD constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleD getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleD DidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleD shouldComponentUpdate ");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifecylcleD getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleD componentDidUpdate");
  }

  render() {
    console.log("LifecycleD render");
    return (
      <div>
        <div>Lifecycle D</div>
      </div>
    );
  }
}

export default LifecycleD;
