import React, { Component } from "react";
import Modal from "../components/Modal";

class CreateMovieModal extends Component {
  state = {
    loading: false,
    error: null,
    movie: {
      name: "",
      publishDate: "",
      status: null
    }
  };
  handleChange = e => {
    this.setState({
      movie: {
        ...this.state.movie,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.movie);
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <Modal isOpen={this.props.modalIsOpen} onClose={this.props.onCloseModal}>
        <div className="CreateMovieModal">
          <h1>Agregar una Pelicula</h1>
          <div className="d-flex flex-direction-columns">
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
                <select name="status" id="" onChange={this.handleChange}>
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
          </div>
        </div>
      </Modal>
    );
  }
}

export default CreateMovieModal;
