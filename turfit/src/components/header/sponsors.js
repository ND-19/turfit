import React from "react";
import Slider from "react-slick";
import src1 from "../../resources/images/image1.png";
import src2 from "../../resources/images/image2.png";
import src3 from "../../resources/images/image3.png";
import src4 from "../../resources/images/image4.png";
import src5 from "../../resources/images/image5.png";
import src6 from "../../resources/images/image6.png";
import src7 from "../../resources/images/image7.png";
import src8 from "../../resources/images/image8.png";
import src9 from "../../resources/images/image9.png";
import src10 from "../../resources/images/image10.png";
import src11 from "../../resources/images/image11.png";
import src12 from "../../resources/images/image12.png";
import "./header.css";

export default function Sponsors() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 3,
  };
  return (
    <Slider {...settings}>
      <img src={src1} style={{ height: "10vh", width: "10vw" }} alt="..." />
      <img src={src2} style={{ height: "10vh", width: "10vw" }} alt="..." />
      <img src={src3} style={{ height: "10vh", width: "10vw" }} alt="..." />
      <img src={src4} style={{ height: "10vh", width: "10vw" }} alt="..." />
      <img src={src5} style={{ height: "10vh", width: "10vw" }} alt="..." />
      <img src={src6} style={{ height: "10vh", width: "10vw" }} alt="..." />
      <img src={src7} style={{ height: "10vh", width: "10vw" }} alt="..." />
      <img src={src8} style={{ height: "10vh", width: "10vw" }} alt="..." />
      <img src={src9} style={{ height: "10vh", width: "10vw" }} alt="..." />
      <img src={src10} style={{ height: "10vh", width: "10vw" }} alt="..." />
      <img src={src11} style={{ height: "10vh", width: "10vw" }} alt="..." />
      <img src={src12} style={{ height: "10vh", width: "10vw" }} alt="..." />
    </Slider>
  );
}
