import React, { Component } from "react";

class BandInput extends Component {
  state = { text: "" };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({ type: "ADD_BAND", band: this.state.text });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name={"text"}
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input type={"submit"} />
      </form>
    );
  }
}

export default BandInput;
