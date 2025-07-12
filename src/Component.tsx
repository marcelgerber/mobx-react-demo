import { computed } from "mobx";
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
  @computed get manager() {
    return this.props.manager;
  }
  @computed get count() {
    return this.manager.count;
  }

  @computed get halfCount() {
    return Math.floor(this.count / 2);
  }

  @computed get quarterCount() {
    console.log("quarterCount recomputed");
    return Math.floor(this.halfCount / 2);
  }

  render() {
    return <div>Hello, MobX! Quarter Count: {this.quarterCount}</div>;
  }
}
