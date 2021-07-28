import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBTypography } from "mdb-react-ui-kit";
import logoturf from "../../src/resources/images/logoturfit.png";
import "./footer.css"

const FooterPage = () => {
  return (
    <MDBFooter color="white" className="font-small pt-4 mt-4 bg-dark">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol size="12" md="4" >
            <img className="image" src={logoturf} style={{width:"10vw"}}/>
            <MDBTypography variant="h6" style={{ marginLeft: "2rem" }}>
          <p className="text-start lh-md">TurF-it is a sports infrastructure and development company that builds,
          owns and operates sports facilities for grassroots development of
          sports in India. TurF-it ,aims to be the premier player in the Sports
          Infrastructure sector in India.</p>

        </MDBTypography>
          </MDBCol>
          <MDBCol size="6" md="2" className="lh-lg">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">AboutUs</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Book Now!</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Gallery</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Terms & Conditions</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol size="6" md="3">
          <h5 className="title" >Contact us</h5>
          <ul>
              <li className="list-unstyled">
                Phone Number:
              </li>
              <li className="list-unstyled">
                +91 8787878787
              </li>
              <br></br>
              <li className="list-unstyled">
                Email address:
              </li>
              <li className="list-unstyled">
                example@gmail.com
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 ">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> TurFit.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
