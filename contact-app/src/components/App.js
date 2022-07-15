import React, { Component } from "react";
import "./App.css";
// import Inline from "./Inline";
// import NameList from "./NameList";
// import Stylesheet from "./Stylesheet";
// import EventBind from "./EventBind";
// import ParentComponent from "./ParentComponent";
// import UserGreeting from "./UserGreeting";
// import ClassClick from "./ClassClick";
// import FunctionClick from "./FunctionClick";
// import { Greet } from "./Greet";
// import { Message } from "./Message";
// import { Welcome } from "./Welcome";
// import { Counter } from "./Counter";
// import '../appStyles.css'
// import styles from '../appStyles.module.css'
// import Form from './Form'
// import LifecycleA from "./LifecycleA";
import LifecycleC from "./LifecycleC";

class App extends Component {
  render() {
    return (
      <div className="App">
      <LifecycleC></LifecycleC>
        {/* <LifecycleA></LifecycleA> */}
        {/* <Form></Form> */}
        {/* <Inline></Inline> */}
        {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
        {/* <Stylesheet primary={true}></Stylesheet> */}
        {/* <NameList></NameList> */}
        {/* <UserGreeting></UserGreeting> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <EventBind></EventBind> */}
        {/* <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}
        {/* <Counter></Counter> */}

        {/* <Greet name="Sai Sreekar" post="First Post">
          <p>Learning React JS children props</p>
        </Greet>
        <Greet name="Sridhar" post="Hello" />
        <button>Action</button> */}

        {/* <Welcome name="Sai Sreekar" post="First Post" />
        <Welcome name="Sridhar" post="Hello" /> */}

        {/* <Message>

        </Message> */}
      </div>
    );
  }
}

export default App;
