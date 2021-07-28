import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import src1 from "../../resources/images/IMG-20180728-WA0022.jpg";
import src2 from "../../resources/images/IMG-20180923-WA0016.jpg";
import src3 from "../../resources/images/IMG-20180923-WA0019.jpg";
import src4 from "../../resources/images/IMG_20180728_122047.jpg";
import src5 from "../../resources/images/IMG_20180807_191045.jpg";
import src6 from "../../resources/images/IMG_20180811_145943.jpg";
import src7 from "../../resources/images/IMG_20180811_150015.jpg";
import src8 from "../../resources/images/IMG_20180811_152041.jpg";
import src9 from "../../resources/images/IMG_20180811_154136.jpg";
import "./Gallery.css";
function Gallery() {
  return (
    <div>
      <MDBContainer className="about-container">
        <h1>Gallery</h1>
        <MDBRow>
          <MDBCol size="4">
            <img src={src1} className="about-images" alt="about images" />
          </MDBCol>
          <MDBCol size="4">
            <img src={src2} className="about-images" alt="about images" />
          </MDBCol>
          <MDBCol size="4">
            <img src={src3} className="about-images" alt="about images" />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol size="4">
            <img src={src4} className="about-images" alt="about images" />
          </MDBCol>
          <MDBCol size="4">
            <img src={src5} className="about-images" alt="about images" />
          </MDBCol>
          <MDBCol size="4">
            <img src={src6} className="about-images" alt="about images" />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol size="4">
            <img src={src7} className="about-images" alt="about images" />
          </MDBCol>
          <MDBCol size="4">
            <img src={src8} className="about-images" alt="about images" />
          </MDBCol>
          <MDBCol size="4">
            <img src={src9} className="about-images" alt="about images" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Gallery;
