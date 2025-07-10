import { autorun, computed, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";

interface Manager {
  count: number;
}

interface Props {
  manager: Manager;
}

@observer
export class MyComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    makeObservable(this);
  }

  get manager() {
    return this.props.manager;
  }

  get count() {
    console.log("count");
    return this.manager.count;
  }

  get halfCount() {
    return Math.floor(this.count / 2);
  }

  get quarterCount() {
    console.log("quarter");
    return Math.floor(this.halfCount / 2);
  }

  render() {
    console.log("render");
    return <div>Hello, MobX! Counter: {this.quarterCount}</div>;
  }
}
