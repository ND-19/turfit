import React from "react";
import "./Navbar.css";
import logoturf from "../resources/images/logoturfit.png";
import {Navbar, Nav, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  NavLink
} from "react-router-dom";
export default function NavBar(){

  return (
    <Navbar expand="lg" light style={{padding:"0px", position:"fixed", width:"100%", zIndex:1}}>
      <Container fluid style={{background: "#444444"}}>
    <Navbar.Brand href="/"><img src={logoturf} style={{width:"6vw"} } alt="turf-logo"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <NavLink to="/home" className="text-white links" activeStyle={{borderBottom:"2px solid white"}}>Home</NavLink>
      <NavLink to="/booknow" className="text-white links" activeStyle={{borderBottom:"2px solid white"}}>Book Now</NavLink>
      <NavLink to="/pricing" className="text-white links" activeStyle={{borderBottom:"2px solid white"}}>Pricing</NavLink>
      <NavLink to="/contactus" className="text-white links" activeStyle={{borderBottom:"2px solid white"}}>Contact us</NavLink>
      <NavLink to="/login" className="text-white links" activeStyle={{borderBottom:"2px solid white"}}>Login</NavLink>
    </Nav>
    </Navbar.Collapse>
    </Container>
    
  </Navbar>
    // <Navbar >
    //   
    //     <Navbar.Brand href="#"></Navbar.Brand>
    //     <MDBNavbarToggler
    //       type="button"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //       onClick={() => setShowNav(!showNav)}
    //     >
    //       <MDBIcon icon="bars" fas />
    //     </MDBNavbarToggler>
    //     <MDBCollapse navbar show={showNav}>
    //       <MDBNavbarNav className="justify-content-end" >
    //         <MDBNavbarItem >
    //           <MDBNavbarLink active aria-current="page" href="/" className="text-white spacing" >
    //             Home
    //           </MDBNavbarLink>
    //         </MDBNavbarItem>
    //         <MDBNavbarItem>
    //           <MDBNavbarLink href="/booknow" className="text-white spacing" >Book Now</MDBNavbarLink>
    //         </MDBNavbarItem>
    //         <MDBNavbarItem>
    //           <MDBNavbarLink href="/pricing" className="text-white spacing"  >Pricing</MDBNavbarLink>
    //         </MDBNavbarItem>
    //         <MDBNavbarItem>
    //           <MDBNavbarLink href="/contactus" className="text-white spacing" >Contact Us</MDBNavbarLink>
    //         </MDBNavbarItem>
    //         <MDBNavbarItem >
    //           <MDBNavbarLink href="/login" className="text-white spacing"><div id="login">Login</div></MDBNavbarLink>
    //         </MDBNavbarItem>
    //       </MDBNavbarNav>
    //     </MDBCollapse>
    //   </MDBContainer>
    // </MDBNavbar>
  );
  
}
