import React from 'react';
import "./App.css";
import Homepage from "./components/homepage";
import Form from './components/Signup and Login/signupandlogin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from "./components/footer"
function App() {
  return (
    <Router>
         <div className="App">
           <NavBar></NavBar>
           
              <Switch>
           <Route exact path="/" component={Homepage}/>
             <Route exact path="/home" component={Homepage}/>
             <Route exact path="/login" component={Form}/>
             <Route exact path="/booknow" component={Booking}/>
             <Route exact path="/pricing" component={Pricing}/>
             <Route exact path="/contactus" component={Contact}/>
           </Switch>
      {/* <Booking></Booking>
      <Homepage></Homepage> */}
      {/* <Navbar></Navbar> */}
      <Footer></Footer>
      </div>
      </Router>
     
      
    
  );
}

export default App;
