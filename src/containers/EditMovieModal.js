import React, { Component } from "react";
import Modal from "./../components/Modal";

class EditMovieModal extends Component {
  state = {
    movie: {
      name: "",
      publishDate: "",
      status: ""
    }
  };
  componentDidUpdate(prevProps, prevState) {
    const moviecurrent = this.props.movieSelected;
    if (prevProps.movieSelected.id !== moviecurrent.id) {
      this.setState({
        movie: moviecurrent
      });
    }
  }
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
    const { movie } = this.state;
    const newMovie = JSON.stringify(this.state.movie);
    alert(newMovie);
  };

  render() {
    const { name, publishDate, status } = this.state.movie;
    const { modalIsOpen, onCloseModal } = this.props;
    return (
      <Modal
        isOpen={modalIsOpen}
        onClose={onCloseModal}
        titleModal="Editar Pelicula"
      >
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre de la Pelicula:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Fecha de Publicacion
            <input
              type="date"
              name="publishDate"
              onChange={this.handleChange}
              value={publishDate}
            />
          </label>
          <label>
            Estado
            <select name="status" id="" onChange={this.handleChange}>
              <option trueValue={true}>Active</option>
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

export default EditMovieModal;
