import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";
import "./header.css";

import src1 from "../../resources/images/Website_slider-(1).png";
import src2 from "../../resources/images/Website_slider-(2).png";
import src3 from "../../resources/images/Website_slider-(3).png";
import src4 from "../../resources/images/Website_slider-(4).png";
import src5 from "../../resources/images/Website_slider-(5).png";

export default function Carousel() {
  return (
    <MDBCarousel>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement className="carousel-images"  src={src1} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement className="carousel-images"  src={src2} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement className="carousel-images"  src={src3} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <MDBCarouselElement className="carousel-images"  src={src4} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={4}>
          <MDBCarouselElement className="carousel-images"  src={src5} alt="..." />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}
