import React, { Component } from "react";
import "./styles.scss";

// form
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaPlus } from "react-icons/fa";

// tarefas
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaEdit, FaWindowClose } from "react-icons/fa";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: ["Preparar chá", "Beber chá", "Estudar"],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="form">
          <input type="text" onChange={this.handleChange} value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
