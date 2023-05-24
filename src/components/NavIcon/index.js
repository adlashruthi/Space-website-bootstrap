import React from "react";
import { Link } from "react-router-dom";

const NavIcon = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#0B0D17",
      }}
      className="d-sm-none  d-flex flex-column text-center pt-5  "
    >
      <ul style={{ listStyle: "none", textDecoration: "none" }} className="">
        <Link to="/">
          <li className="pb-3">
            <span className=" ">00 </span> Home
          </li>
        </Link>
        <Link to="/destination">
          <li className="pb-3">
            <span className=" ">01 </span> DESTINATION
          </li>
        </Link>
        <Link to="/crew">
          <li className="pb-3">
            <span className=" ">02 </span>
            CREW
          </li>
        </Link>
        <Link to="/technology">
          <li className="pb-3">
            <span className=" ">03 </span>
            TECHNOLOGY
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavIcon;
