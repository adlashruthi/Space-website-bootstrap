import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavIcon from "../NavIcon";
const Navbar = () => {
  const [click, setClick] = useState(0);

  return (
    <>
      <div className="pt-md-5 " onClick={() => setClick((prev) => !prev)}>
        <div className="d-md-none ">
          <div
            style={{ backgroundColor: "#0B0D17" }}
            className="d-flex justify-content-lg-center justify-content-between pt-2"
          >
            <div className="m-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                <g fill="none" fill-rule="evenodd">
                  <circle cx="24" cy="24" r="24" fill="#FFF" />
                  <path
                    fill="#0B0D17"
                    d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                  />
                </g>
              </svg>
            </div>

            <div className="m-4">
              {click ? (
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Group">
                    <rect
                      id="Rectangle Copy"
                      x="2.5752"
                      y="0.954102"
                      width="24"
                      height="3"
                      transform="rotate(45 2.5752 0.954102)"
                      fill="#D0D6F9"
                    />
                    <rect
                      id="Rectangle Copy 3"
                      x="0.454102"
                      y="17.9246"
                      width="24"
                      height="3"
                      transform="rotate(-45 0.454102 17.9246)"
                      fill="#D0D6F9"
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="21"
                  viewBox="0 0 24 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="3" fill="#D0D6F9" />
                  <rect y="9" width="24" height="3" fill="#D0D6F9" />
                  <rect y="18" width="24" height="3" fill="#D0D6F9" />
                </svg>
              )}
            </div>
          </div>
        </div>

        <nav className="d-none d-lg-flex justify-content-lg-center d-md-flex justify-content-md-between">
          <div className="m-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fill-rule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path
                  fill="#0B0D17"
                  d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                />
              </g>
            </svg>
          </div>

          <div
            style={{
              backgroundColor: "#979797",
              height: "2px",
              width: "280px",
              marginTop: "40px",
              marginLeft: "150px",
              flex: "none",
            }}
            className="d-sm-none d-lg-block "
          ></div>
          <ul
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              listStyle: "none",
              textDecoration: "none",
              borderBottomColor: "white",
            }}
            className=" d-flex  "
          >
            <Link to="/">
              <li className="p-4 text-white ">
                <span className=""> 00 </span> HOME
              </li>
            </Link>
            <Link to="/destination">
              <li className="m-4 text-white">
                <span className=" ">01 </span> DESTINATION
              </li>
            </Link>
            <Link to="/crew">
              <li className="m-4 text-white">
                <span className=" ">02 </span>
                CREW
              </li>
            </Link>
            <Link to="/technology ">
              <li className="m-4 text-white">
                <span className=" ">03 </span>
                TECHNOLOGY
              </li>
            </Link>
          </ul>
        </nav>
        <div style={{ marginRight: "60px" }}>{click && <NavIcon />}</div>
      </div>
    </>
  );
};

export default Navbar;
