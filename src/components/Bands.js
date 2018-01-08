import React, { Component } from "react";

class Bands extends Component {
  render() {
    const bandNames = this.props.store
      .getState()
      .bands.map(band => <li>{band}</li>);
    return <ul>{bandNames}</ul>;
  }
}

export default Bands;
