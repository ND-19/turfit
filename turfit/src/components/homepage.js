import React from "react";
import {} from "mdbreact";
import Header from "./header/header";
import Gallery from "./Gallery/Gallery";
import AboutUs from "./AboutUs/aboutUs";
import FAQ from "./FAQ";
import Pricing from "./Pricing/pricing";
import Footer from "./footer"
export default function homepage() {
  return (
    <div style={{paddingTop:"51px"}}>
      <Header />
      <AboutUs />
      <hr></hr>
      <Gallery />
      <hr></hr>
      <Pricing />
      <hr></hr>
      <FAQ />
      <hr></hr>
    </div>
  );
}
