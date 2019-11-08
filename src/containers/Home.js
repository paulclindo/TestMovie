import React, { Component } from "react";
import TableMovies from "./../components/TableMovies";
import CreateMovieModal from "../containers/CreateMovieModal";

class Home extends Component {
  state = {
    loading: true,
    modalIsOpen: false
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };
  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  render() {
    console.log(this.state);
    return (
      <section className="Home">
        <div className="Home__header">
          <h1 className="Home__title">Mis Peliculas</h1>
          <button className="button button--add" onClick={this.handleOpenModal}>
            Nueva Pelicula
          </button>
        </div>
        <TableMovies />
        <CreateMovieModal
          modalIsOpen={this.state.modalIsOpen}
          onOpenModal={this.handleOpenModal}
          onCloseModal={this.handleCloseModal}
        />
      </section>
    );
  }
}

export default Home;
