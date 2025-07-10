import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { action, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import { MyComponent } from "./Component";

@observer
class App extends React.Component {
  @observable count = 0;

  constructor(props: Record<string, unknown>) {
    super(props);
    makeObservable(this);
  }

  @action.bound increment() {
    this.count += 1;
  }

  render() {
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={this.increment}>count</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <MyComponent manager={this} />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }
}

export default App;
