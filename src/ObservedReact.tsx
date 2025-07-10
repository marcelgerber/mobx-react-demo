import React from "react";

export abstract class ObservedReact<P> extends React.Component<P> {
  protected observedProps: P = this.props;
}
