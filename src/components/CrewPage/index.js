import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "../Navbar";

const data = [
  {
    id: 1,
    img: `/assets/crew/image-removebg-preview(289).png`,
    heading: ` Commander`,
    title: `Douglas Hurley`,
    description: ` Douglas Gerald Hurley is an American engineer, former Marine Corps
    pilot and former NASA astronaut. He launched into space for the third
    time as commander of Crew Dragon Demo-2.`,
  },
  {
    id: 2,
    img: `/assets/crew/image-removebg-preview(262).png`,
    heading: `  Mission Specialist`,
    title: `MARK SHUTTLEWORTH`,
    description: `  Mark Richard Shuttleworth is the founder and CEO of Canonical, the
    company behind the Linux-based Ubuntu operating system. Shuttleworth
    became the first South African to travel to space as a space tourist.`,
  },
  {
    id: 3,
    img: `/assets/crew/image-removebg-preview(265).png`,
    heading: `PILOT`,
    title: ` Victor Glover`,
    description: `  Pilot on the first operational flight of the SpaceX Crew Dragon to the
    International Space Station. Glover is a commander in the U.S. Navy
    where he pilots an F/A-18.He was a crew member of Expedition 64, and
    served as a station systems flight engineer.`,
  },
  {
    id: 4,
    img: `/assets/crew/image-removebg-preview(288).png`,
    heading: ` Flight Engineer`,
    title: ` Anousheh Ansari`,
    description: ` Anousheh Ansari is an Iranian American engineer and co-founder of
    Prodea Systems. Ansari was the fourth self-funded space tourist, the
    first self-funded woman to fly to the ISS, and the first Iranian in
    space.`,
  },
];
//

const CrewCard = (props) => {
  const { img, heading, title, description } = props;

  return (
    <div className="d-lg-flex d-flex flex-column flex-lg-row justify-content-center align-items-center d-md-flex flex-md-column">
      <div className="col-lg-6 col-md-8  order-md-1 order-2 ">
        <h1
          style={{
            fontFamily: "Bellefair",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "32px",
            lineHeight: "37px",
            color: "#4d5057",
          }}
          className="pt-5 text-md-center text-lg-start"
        >
          {heading}
        </h1>
        <h5
          style={{
            fontFamily: "Bellefair",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "36px",
            lineHeight: "64px",
            color: "#FFFFFF",
          }}
          className=""
        >
          {title}
        </h5>
        <p className="text-white">{description}</p>
      </div>

      <div className=" col-lg-4 col-md-5 col-12 order-md-2 order-1 ">
        <img
          src={img}
          alt="img"
          style={{ height: "300px", width: "200px", marginLeft: "60px" }}
        />
      </div>
    </div>
  );
};

const Crew = () => {
  const settings = {
    dots: false,
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div
      className="overflow-auto"
      style={{
        backgroundImage: "url('/assets/crew/Bitmap (5).svg')",
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
      }}
    >
      <Navbar />
      <div className="container">
        <div className="row">
          <h3 className="text-lg-start my-4 text-white">
            <span style={{ color: "#4d5057", fontWeight: "900" }} className=" ">
              02
            </span>{" "}
            Meet Your Crew
          </h3>
        </div>

        <div className=" m-6 w-[90%] z-30 ">
          <Slider {...settings}>
            {data?.map((item, index) => (
              <CrewCard
                key={index}
                img={item?.img}
                heading={item?.heading}
                title={item?.title}
                description={item?.description}
              />
            ))}
          </Slider>
        </div>
        {/* <Dots/> */}
      </div>
    </div>
  );
};
export default Crew;
