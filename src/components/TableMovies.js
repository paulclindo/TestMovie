import React, { Component } from "react";
import TableHeader from "./TableHeader";

const TableMovies = props => {
  const { movies } = props;
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
                <td>{movie.status ? "Active" : "Inactive"}</td>
                <td>
                  <button
                    onClick={() => {
                      props.updateMovie(movie, movie.id);
                    }}
                  >
                    Editar
                  </button>
                  <button onClick={() => props.deleteMovie(movie)}>
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
};

export default TableMovies;
