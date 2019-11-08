import React, { Component } from "react";

class TableHeader extends Component {
  state = {};
  render() {
    return (
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>F. Publicacion</th>
          <th>Estado</th>
          <th></th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
