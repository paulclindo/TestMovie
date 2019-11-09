import React, { Component } from "react";
import TableHeader from "./TableHeader";

class TableMovies extends Component {
  render() {
    const { movies } = this.props;
    const { length: count } = movies;

    if (count === 0) return <p>Oh no! No tenemos peliculas! </p>;
    return (
      <React.Fragment>
        <div className="Table">
          <p>Total de Peliculas - {count} </p>
          <hr />
          <table>
            <TableHeader></TableHeader>
            <tbody>
              {movies.map(movie => [
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>{movie.name}</td>
                  <td>{movie.publishDate}</td>
                  <td>{movie.state ? "Active" : "Inactive"}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.viewMovie(movie);
                      }}
                    >
                      Editar
                    </button>
                    <button onClick={() => this.props.deleteMovie(movie)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ])}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default TableMovies;
