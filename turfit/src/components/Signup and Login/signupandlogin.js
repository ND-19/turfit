import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './authentication.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login";
import SignUp from "./signup";
function Form() {
  return (<Router>
    <div className="Form">
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container" style={{marginLeft:"0px"}}>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav" style={{marginLeft:"20px"}}>
              <img src={logoturfit} height={35} width={80}/>
              <li className="nav-item">
                <Link className="nav-link " to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default Form;