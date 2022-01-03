import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import SignOut from "../SignOut/SignOut";

const Navbar = (props) => {
  const { clientId } = props;
  return (
    <>
      <ul className="nav-container">
        <li className="nav-li">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-li">
          <Link to="/meditate">Meditate</Link>
        </li>
        <li className="nav-li">
          <Link to="/learn">Learn</Link>
        </li>
        <li className="nav-li">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-li">
          {/* <Link to="/placeholder">SignOut</Link> */}
          <Link to="/">
            <SignOut clientId={clientId} />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
