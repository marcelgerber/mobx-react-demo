import React from "react";

export abstract class ObservedReact<P> extends React.Component<P> {
  observedProps: P;

  constructor(props: P) {
    super(props);
    this.observedProps = props;
  }
}
