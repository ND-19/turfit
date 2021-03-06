import React, { Component } from "react";
import './form.css';
import Signup from "./signup";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block"> Submit</button>
                <p className="forgot-password text-right">
                    Don't have an account<Link className="nav-link" to={"/sign-up"}>Signup?</Link>
                </p>
                <Switch>
            <Route path="/sign-up" component={Signup} />
             </Switch>
            </form>
        );
    }
}