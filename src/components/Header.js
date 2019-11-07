import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <div className="Menu">
        <div className="Menu__photo">
          <img
            src="https://content-stage.likewiseapp.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg"
            alt=""
          />
        </div>
        <div className="Menu__username">
          <span>Paul Ccari</span>
          <strong>Administrador</strong>
        </div>
      </div>
    </div>
  );
};

export default Header;
