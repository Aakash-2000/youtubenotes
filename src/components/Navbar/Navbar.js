import React from "react"
import {Link } from "react-router-dom";
import Navlinks from "./navlinks";
import logo from "./logo.png";
class Navbar extends React.Component{
    render(){
        return(
            <div>
                 <nav className="nav-wrapper transparent">
                    <div className="container">
                    <div className="left-align">
                        <Link to="/" className="brand-logo left"  ><img src={logo} style={{height:"70px"}}/></Link>
                    </div>
                    <ul id="nav-mobile" className="right">
                       <Navlinks/>
                    </ul>
                    </div>
                </nav>
                
                
            
            
            </div>
        );
    }
}
export default Navbar;