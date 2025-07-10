import { autorun, computed, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { ObservedReact } from "./ObservedReact";

interface Manager {
  count: number;
}

interface Props {
  manager: Manager;
}

@observer
export class MyComponent extends ObservedReact<Props> {
  constructor(props: Props) {
    super(props);
    makeObservable(this);
  }

  @computed get manager() {
    return this.observedProps.manager;
  }

  @computed get count() {
    console.log("count");
    return this.manager.count;
  }

  @computed get halfCount() {
    return Math.floor(this.count / 2);
  }

  @computed get quarterCount() {
    console.log("quarter");
    return Math.floor(this.halfCount / 2);
  }

  render() {
    console.log("render");
    return <div>Hello, MobX! Counter: {this.quarterCount}</div>;
  }
}
