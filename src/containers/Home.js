import React from "react";

const Home = () => {
  return (
    <section className="Home">
      <div className="Home__header">
        <h1 className="Home__title">Mis Peliculas</h1>
        <button className="button button--add">Nueva Pelicula</button>
      </div>
      <div className="Table">
        <table>
          <thead>
            <th>Name</th>
            <th>Occupation</th>
            <th>Occupation</th>
            <th>Occupation</th>
          </thead>
          <tbody>
            <tr>
              <td>April Douglas</td>
              <td>Health Educator</td>
              <td>Health Educator</td>
              <td>Health Educator</td>
            </tr>
            <tr>
              <td>Salma Mcbride</td>
              <td>Salma Mcbride</td>
              <td>Salma Mcbride</td>
              <td>Mental Health Counselor</td>
            </tr>
            <tr>
              <td>Kassandra Donovan</td>
              <td>Kassandra Donovan</td>
              <td>Kassandra Donovan</td>
              <td>Makeup Artists</td>
            </tr>
            <tr>
              <td>Yosef Hartman</td>
              <td>Theatrical and Performance</td>
              <td>Theatrical and Performance</td>
              <td>Theatrical and Performance</td>
            </tr>
            <tr>
              <td>Ronald Mayo</td>
              <td>Plant Etiologist</td>
              <td>Plant Etiologist</td>
              <td>Plant Etiologist</td>
            </tr>
            <tr>
              <td>Trey Woolley</td>
              <td>Trey Woolley</td>
              <td>Trey Woolley</td>
              <td>Maxillofacial Surgeon</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Home;
