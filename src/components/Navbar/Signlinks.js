import React from "react";
import {NavLink} from "react-router-dom";
class Signlinks extends React.Component{
   
    
    render(){
        
        return (
        <div>
              <li><NavLink to="/signin" className="grey-text">Sign in</NavLink></li>  
              <li><NavLink to="/login" className="grey-text">Log in</NavLink></li>  
        </div>);
    }
}
export default Signlinks;