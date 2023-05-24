import React from "react";
import { useState } from "react";
import Navbar from "../Navbar";
const data = [
  {
    id: 1,
    img: `/assets/destination/Bitmap.png`,
    title: `MOON`,
    description: `   See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11landing sites.`,
    distance: `384,400 km`,
    time: `3 days`,
  },
  {
    id: 2,
    img: `/assets/destination/Bitmap (1).png`,
    title: `Mars`,
    description: ` Don't forget to pack your hiking boots.You'll need them to tackle
    Dlympus Mons,the tallest planetry mountain in our solar system.It's
    two and half times the size of Everest!.`,
    distance: ` 225 Mll KM`,
    time: `9 Months`,
  },
  {
    id: 3,
    img: `/assets/destination/Bitmap (2).png`,
    title: ` Europa`,
    description: `The smallest of the four Galilean moons orbiting Jupiter,Europa is a
    winter lover's dream. With an icy surface, it's perfect for bit of ice
    skating,curling,hockey or simple relaxation innyour snug wintery
    cabin.`,
    distance: ` 628 MIL KM`,
    time: `3 YEARS`,
  },
  {
    id: 4,
    img: `/assets/destination/Bitmap (3).png`,
    title: `Titan`,
    description: ` The only moon known to have a dense atmosphere other than Earth, Titan
    is a home away from home (just a few hundred degrees colder!).As a
    bonus you get striking views of the Rings of Saturn.`,
    distance: `1.6 BIL. km`,
    time: `7 years`,
  },
];
const Card = (props) => {
  const { img, title, description, distance, time } = props;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center flex-sm-col flex-lg-row col-md-12">
      <div className="col-md-5 text-center">
        <img
          className="text-white"
          style={{ height: "190px", width: "210px" }}
          src={img}
          alt="moon"
        />
      </div>
      <div className="text-white text-center text-lg-start col-md-7">
        <h1 className="text-white">{title}</h1>

        <p className="text-white">{description}</p>
        <hr />
        <div className="d-flex flex-column justify-content-center d-md-flex flex-md-row justify-content-lg-start    text-lg-start  ">
          <div className=" my-3 mx-5  ">
            <h6 className="text-white">AVG. DISTANCE</h6>
            <p className="text-white">{distance}</p>
          </div>
          <div className="text-white my-3 ml-3 ">
            <h6 className="text-white">Est. travel time</h6>
            <p className="text-white">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DestinationPage = () => {
  const [index, setIndex] = useState(1);
  const myArray = [
    {
      id: 1,
      title: `Moon`,
    },
    {
      id: 2,
      title: `Mars`,
    },
    {
      id: 3,
      title: "Europa",
    },
    {
      id: 4,
      title: `Titan`,
    },
  ];
  return (
    <div
      style={{
        backgroundImage: "url('/assets/destination/Bitmap (4).svg')",
        backgroundSize: "cover",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Navbar />
      <div className="container ">
        <div className="row">
          <h3 className="text-white text-center text-lg-start my-4 ">
            <span style={{ color: "#4d5057", fontWeight: "400" }} className="">
              01
            </span>{" "}
            Pick your destination
          </h3>
          <div className="col-12 w-90 ">
            <nav className="text-white">
              <ul className="d-flex justify-content-center align-items-center  ">
                {myArray.map((i) => (
                  <li
                    style={{ listStyle: "none", padding: "10px" }}
                    className={`mx-2  ${
                      index === i?.id
                        ? "font-weight-bold text-decoration-underline "
                        : ""
                    }`}
                    onClick={() => setIndex(i?.id)}
                  >
                    {i?.title}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-3">
            {data?.map((i) => (
              <>
                {i?.id === index ? (
                  <Card
                    img={i?.img}
                    title={i?.title}
                    description={i?.description}
                    distance={i?.distance}
                    time={i?.time}
                  />
                ) : null}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
