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

  render() {
    return <div>Hello, MobX! Counter: {this.count}</div>;
  }
}
