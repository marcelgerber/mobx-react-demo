import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { action, computed, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";

@observer
class App extends React.Component {
  @observable accessor count = 0;

  @action.bound increment() {
    this.count += 1;
  }

  @computed get doubleCount() {
    return this.count * 2;
  }

  constructor(props: Record<string, unknown>) {
    super(props);
    makeObservable(this);
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
          <button onClick={this.increment}>count is {this.doubleCount}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }
}

export default App;
