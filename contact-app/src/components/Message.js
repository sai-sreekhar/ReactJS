import React, { Component } from "react";

class Message extends React.PureComponent { //purecomponet does shallow compare (first level compare). no ned to write shouldcompupdate. It automatically does shallow comp
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  // shouldComponentUpdate(nextProps,nextState) {
  //     if (this.state.message === nextState.message) {
  //       return false;
  //     }
  //     return true;
  // }

  changeMessage() {
    this.setState({
      message: "Thank you For Subscribing",
    });
  }
  render() {
    console.log("rendering message comp ");
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          Subscribe
        </button>
      </div>
    );
  }
}

export { Message };
