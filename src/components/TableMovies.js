import React, { Component } from "react";
import TableHeader from "./TableHeader";

class TableMovies extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "Jason Bourne",
        publishDate: "06/02/17",
        state: true
      },
      {
        id: 2,
        name: "Alicia en el Pais de las Maravillas",
        publishDate: "03/01/18",
        state: false
      },
      {
        id: 3,
        name: "Tarzan la leyenda",
        publishDate: "07/04/19",
        state: false
      },
      {
        id: 4,
        name: "Mi buen Amigo Gigante",
        publishDate: "10/04/16",
        state: true
      },
      {
        id: 5,
        name: "Nada es lo que parece",
        publishDate: "07/26/15",
        state: true
      },
      {
        id: 6,
        name: "Jocker",
        publishDate: "06/02/17",
        state: true
      }
    ]
  };

  handleDelete = movie => {
    const movies = this.state.data.filter(m => m.id !== movie.id);
    console.log(movies);
    this.setState({
      data: movies
    });
  };

  render() {
    const { data } = this.state;
    const { length: count } = data;
    if (count === 0) return <p>Oh no! No tenemos peliculas! </p>;
    return (
      <div className="Table">
        <p>Total de Peliculas - {count} </p>
        <hr />
        <table>
          <TableHeader></TableHeader>
          <tbody>
            {data.map(movie => [
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.name}</td>
                <td>{movie.publishDate}</td>
                <td>{movie.state ? "Active" : "Inactive"}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => this.handleDelete(movie)}>
                    Delete
                  </button>
                </td>
              </tr>
            ])}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableMovies;
