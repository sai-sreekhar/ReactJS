import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log('CallBack Value',this.state.count);
    //   }
    // );
    
    this.setState(({count}, props) => ({
        count: count + 1
    }),() => console.log("Callback Value is " + this.state.count))
  }

  incrementFive() {
    // this.setState(
    //     {
    //       count: this.state.count + 5,
    //     },
    //     () => {
    //       console.log('CallBack Value',this.state.count);
    //     }
    //   );
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <h1>Count = {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <br />
        <button onClick={() => this.incrementFive()}>Increment Five</button>
      </div>
    );
  }
}

export { Counter };
