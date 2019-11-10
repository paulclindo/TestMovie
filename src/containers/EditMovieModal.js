import React, { Component } from "react";
import Modal from "./../components/Modal";

class EditMovieModal extends Component {
  state = {
    movie: {
      id: "",
      name: "",
      publishDate: "",
      status: ""
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.movieId !== this.props.movieId) {
      const movie = this.props.getMovieById(this.props.movieId);
      // debugger;
      this.setState({
        movie: {
          id: movie.id,
          name: movie.name,
          publishDate: movie.publishDate,
          status: movie.status
        }
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
    const { id, name, publishDate, status } = this.state.movie;
    const { updateMovie } = this.props;

    const newMovie = {
      id,
      name,
      publishDate,
      status
    };
    // debugger;
    updateMovie(newMovie, this.props.movieId);
    this.props.onCloseModal();
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
            <select
              name="status"
              defaultValue={status}
              onChange={this.handleChange}
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

export default EditMovieModal;
