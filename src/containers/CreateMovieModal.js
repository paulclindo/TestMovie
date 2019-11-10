import React, { Component } from "react";

import Modal from "../components/Modal";

class CreateMovieModal extends Component {
  state = {
    movie: {
      id: "",
      name: "",
      publishDate: "",
      status: true
    }
  };
  handleChange = e => {
    this.setState({
      movie: {
        ...this.state.movie,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, publishDate, status } = this.state.movie;
    if (!name || !publishDate || !status) {
      alert("Ingrese todos los campos, por favor");
      return;
    }
    const { addMovie } = this.props;

    const newMovie = {
      name,
      publishDate,
      status
    };
    addMovie(newMovie);
    this.setState(this.state);
    this.props.onCloseModal();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onClose={this.props.onCloseModal}
        titleModal="Crear Pelicula"
      >
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre de la Pelicula:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>
            Fecha de Publicacion
            <input
              type="date"
              name="publishDate"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Estado
            <select
              name="status"
              id=""
              onChange={this.handleChange}
              placeholder=" Eliga su estado"
            >
              <option value={true}>Active</option>
              <option value={false}>Inactive</option>
            </select>
          </label>
          <div className="Modal__footer">
            <button
              onClick={this.props.onCloseModal}
              className="btn btn-default"
            >
              Cancel
            </button>
            <button className="btn btn-save">Guardar</button>
          </div>
        </form>
      </Modal>
    );
  }
}

export default CreateMovieModal;
