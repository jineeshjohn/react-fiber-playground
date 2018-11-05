import React from "react";
 

export default class extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    return this.state.hasError ? <span>error span</span> : this.props.children;
  }
}
