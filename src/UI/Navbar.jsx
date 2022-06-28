import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

const buttonRef = React.createRef();

  const [toggleStatus, setToggleStatus ] = useState(false);


  const handleClick = () => {
    buttonRef.current.click();
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand text-primary" to="/" onClick={handleClick}>
        نئو بانک هزاره
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={buttonRef}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={handleClick}>
              <Link to="/account" className="nav-link ">
                سرویس های حساب
              </Link>
            </li>
            <li className="nav-item" onClick={handleClick}>
              <Link to="/card" className="nav-link">
                سرویس های کارت
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fish" className="nav-link" onClick={handleClick}>
                چاپ فیش بانکی 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
