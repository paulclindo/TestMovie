import React, { Component } from "react";
import TableMovies from "./../components/TableMovies";
import CreateMovieModal from "../containers/CreateMovieModal";
import EditMovieModal from "./EditMovieModal";
class Home extends Component {
  state = {
    modalIsOpen: false,
    modalEditOpen: false,
    movieSelected: {
      id: null,
      name: "",
      publishDate: "",
      state: false
    },
    movieData: [
      {
        id: 1,
        name: "Jason Bourne",
        publishDate: "2017-10-03",
        state: true
      },
      {
        id: 2,
        name: "Alicia en el Pais de las Maravillas",
        publishDate: "2013-12-21",
        state: false
      },
      {
        id: 3,
        name: "Tarzan la leyenda",
        publishDate: "2019-02-13",
        state: false
      },
      {
        id: 4,
        name: "Mi buen Amigo Gigante",
        publishDate: "2017-10-23",
        state: true
      },
      {
        id: 5,
        name: "Avengers",
        publishDate: "2010-10-12",
        state: true
      },
      {
        id: 6,
        name: "Jocker",
        publishDate: "2017-10-03",
        state: true
      }
    ]
  };
  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };
  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };
  handleCloseEditModal = () => {
    this.setState({ modalEditOpen: false });
  };
  handleOpenEditModal = () => {
    this.setState({ modalEditOpen: true });
  };

  handleDelete = movie => {
    const movies = this.state.movieData.filter(m => m.id !== movie.id);
    this.setState({
      movieData: movies
    });
  };

  addMovie = movie => {
    const { movieData } = this.state;
    movie.id = movieData.length + 1;
    this.setState({ movieData: [...movieData, movie], modalIsOpen: false });
    alert("Pelicula ha sido agregada");
  };

  viewMovie = movie => {
    this.setState({
      modalEditOpen: true,
      movieSelected: movie
    });
  };

  render() {
    return (
      <section className="Home">
        <div className="Home__header">
          <h1 className="Home__title">Mis Peliculas</h1>
          <button className="button button--add" onClick={this.handleOpenModal}>
            Nueva Pelicula
          </button>
        </div>
        <TableMovies
          movies={this.state.movieData}
          deleteMovie={this.handleDelete}
          onOpenEditModal={this.handleOpenModal}
          viewMovie={this.viewMovie}
        />
        <EditMovieModal
          movieSelected={this.state.movieSelected}
          modalIsOpen={this.state.modalEditOpen}
          onOpenModal={this.handleOpenEditModal}
          onCloseModal={this.handleCloseEditModal}
          updateMovie={this.updateMovie}
        />
        <CreateMovieModal
          movies={this.state.data}
          modalIsOpen={this.state.modalIsOpen}
          onOpenEditModal={this.handleOpenModal}
          onCloseModal={this.handleCloseModal}
          addMovie={this.addMovie}
        />
      </section>
    );
  }
}

export default Home;
