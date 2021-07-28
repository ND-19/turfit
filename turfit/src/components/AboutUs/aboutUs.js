import React from "react";
import "./about.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBTypography,
  MDBIframe,
} from "mdb-react-ui-kit";
export default function AboutUs() {
  return (
    <MDBContainer>
      <MDBTypography variant="h1">About Us</MDBTypography>
      <MDBContainer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MDBRow className="aboutusback">
          <MDBCol size="12" md="6" className="about">
        <MDBTypography variant="h5" style={{ marginLeft: "2rem" }}>
          <p class="text-start lh-sm">TurF-it is a sports infrastructure and development company that builds,
          owns and operates sports facilities for grassroots development of
          sports in India. TurF-it ,aims to be the premier player in the Sports
          Infrastructure and Education sector in India.</p>
          <p className="text-start lh-sm"><u>VISION:</u> We aim to be the leading Sports Infrastructure and Education company in India, empowering India to become a sporting powerhouse.</p>
          <p className="text-start lh-sm"><u>MISSION:</u> We want to provide young footballers across the country with the best sporting facilities and education to hone their game, thus enabling and encouraging them to embrace a sporting culture.</p>
          <p className="text-start lh-sm"><u>MISSION:</u> We want to provide young footballers across the country with the best sporting facilities and education to hone their game, thus enabling and encouraging them to embrace a sporting culture.</p>
        </MDBTypography>
        </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
}
