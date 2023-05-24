import { useState } from "react";
import Navbar from "../Navbar";
const data = [
  {
    id: 1,
    description: ` THE TERMINOLOGY`,
    title: ` LAUNCH VEHICLE`,
    description1: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used
    to carry a payload from Earth's surface to space, usually to Earth
    orbit or beyond. Our WEB-X carrier rocket is the most powerful in
    operation. Standing 150 metres tall, it's quite an awe-inspiring sight
    on the launch pad!`,
    img: `/assets/technology/Bitmap.jpg`,
  },
  {
    id: 2,
    description: `THE TERMINOLOGY`,
    title: `  SPACEPORT`,
    description1: `A spaceport or cosmodrome is a site for launching (or receiving)
    spacecraft, by analogy to the seaport for ships or airport for
    aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
    situated to take advantage of the Earth’s rotation for launch.`,
    img: `/assets/technology/Bitmap (4).png`,
  },
  {
    id: 3,
    description: ` THE TERMINOLOGY`,
    title: `  SPACE CAPSULE`,
    description1: `A space capsule is an often-crewed spacecraft that uses a blunt-body
    reentry capsule to reenter the Earth's atmosphere without wings. Our
    capsule is where you'll spend your time during the flight. It includes
    a space gym, cinema, and plenty of other activities to keep you
    entertained.`,
    img: `/assets/technology/Bitmap (5).png`,
  },
];

const Card = (props) => {
  const { description, title, description1, img } = props;

  return (
    <div className=" d-flex flex-column justify-content-center align-items-center d-lg-flex flex-lg-row   justify-content-lg-between align-items-lg-center  pt-4 ">
      <div
        style={{ marginLeft: "40px", marginTop: "20px" }}
        className="  col-lg-6  col-sm-7 col-7  order-lg-1  order-3 w-80  justify-content-center align-items-center lg:order-1"
      >
        <h6
          style={{ color: "#4d5057", fontFamily: "Bellefair" }}
          className="  "
        >
          {description}
        </h6>
        <h1 style={{ color: "#ffffff", fontFamily: "Bellefair" }}>{title}</h1>
        <p
          style={{
            color: "#D0D6F9",
            fontFamily: "Bellefair",
            fontWeight: "100px",
          }}
        >
          {description1}
        </p>
      </div>
      <div className=" col-lg-5   order-lg-2 order-1 m-5">
        <img
          src={img}
          alt="tech"
          style={{ height: "240px", width: "400px" }}
          className=""
        />
      </div>
    </div>
  );
};

const TechnologyPage = () => {
  const [index, setIndex] = useState(1);
  const myArray = [
    {
      id: 1,
      title: `LAUNCH VEHICLE`,
    },
    {
      id: 2,
      title: `SPACEPORT`,
    },
    {
      id: 3,
      title: ` SPACE CAPSULE`,
    },
  ];

  return (
    <>
      <div
        className="overflow-auto"
        style={{
          backgroundImage: "url('/assets/technology/Bitmap (6).svg')",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <Navbar />
        <div className="   ">
          <h5 className="text-white m-3">
            <span className="">03 </span>
            SPACE LAUNCH 101
          </h5>

          <div className="d-flex w-100  flex-column justify-content-between align-items-center flex-lg-row  ">
            <div
              style={{ marginLeft: "0px", marginTop: "16px" }}
              className="p-3 order-2 order-lg-0"
            >
              <ul className="pt-4 d-flex flex-lg-column col-lg-4">
                {myArray.map((i) => (
                  <li
                    style={{
                      height: "60px",
                      width: "60px",
                      backgroundColor: "transparent",
                    }}
                    onClick={() => setIndex(i?.id)}
                    className={` text-light border border-light rounded-circle m-2 d-flex justify-content-center align-items-center ${
                      index === i?.id ? "bg-white text-black" : ""
                    } `}
                  >
                    {i?.id}
                  </li>
                ))}
              </ul>
            </div>
            <div className="m-[10px] p-[10px]">
              {data?.map((i) => (
                <>
                  {i?.id === index ? (
                    <Card
                      description={i?.description}
                      title={i?.title}
                      description1={i?.description1}
                      img={i?.img}
                    />
                  ) : null}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TechnologyPage;
