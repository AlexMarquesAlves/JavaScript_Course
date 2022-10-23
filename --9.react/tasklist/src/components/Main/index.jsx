import React, { Component } from "react";
import "./styles.scss";

// form
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaPlus } from "react-icons/fa";

export default class Main extends Component {
  state = {
    novaTarefa: "",
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="form">
          <input type="text" onChange={this.handleChange} value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
