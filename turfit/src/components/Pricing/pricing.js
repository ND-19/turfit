import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
export default function Pricing() {
  return (
    <BrowserRouter>
      <MDBNav className="justify-content-center">
        <MDBNavItem>
          <MDBNavLink active to="#!">
            KIDS
          </MDBNavLink>
        </MDBNavItem>
        {/* <MDBNavItem>
            <MDBNavLink to="#!">CORPOR</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!">Link</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink disabled to="#!">
              Disabled
            </MDBNavLink>
          </MDBNavItem> */}
      </MDBNav>
    </BrowserRouter>
  );
}
