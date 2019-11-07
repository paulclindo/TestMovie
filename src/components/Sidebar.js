import React from "react";
import AdminIcon from "../assets/static/admin-icon.svg";
import DashboardIcon from "../assets/static/dashboard-icon.svg";
import LogoutIcon from "../assets/static/logout-icon.svg";
import MoviesIcon from "../assets/static/movies-icon.svg";
import PerfilIcon from "../assets/static/perfil-icon.svg";
import TimeIcon from "../assets/static/time-icon.svg";

const Sidebar = () => {
  return (
    <section className="Sidebar">
      <div className="Sidebar__logo">
        <img
          src="https://res.cloudinary.com/poolzmooth/image/upload/v1573099460/MovieTest.png"
          alt=""
        />
        <span>TestMovie</span>
      </div>
      <ul className="Sidebar__menu">
        <li className="Sidebar__menu__items">
          <a href="#">
            <DashboardIcon></DashboardIcon>
            <span>Dashboards</span>
          </a>
        </li>

        <li className="Sidebar__menu__items">
          <a href="#">
            <MoviesIcon></MoviesIcon>
            <span>Peliculas</span>
          </a>
        </li>
        <li className="Sidebar__menu__items">
          <a href="#">
            <TimeIcon></TimeIcon>
            <span>Turnos</span>
          </a>
        </li>
        <li className="Sidebar__menu__items">
          <a href="#">
            <AdminIcon></AdminIcon>
            <span>Administrador</span>
          </a>
        </li>
        <li className="Sidebar__menu__items">
          <a href="#">
            <PerfilIcon></PerfilIcon>
            <span>Perfil</span>
          </a>
        </li>
        <li className="Sidebar__menu__items">
          <a href="#">
            <LogoutIcon></LogoutIcon>
            <span>Cerrar Sesion</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
