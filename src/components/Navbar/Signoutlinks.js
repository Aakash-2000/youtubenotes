import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../actions/actions.js";
class Signoutlinks extends React.Component{
  
    render(){
        
        return (
        <div>
              <li><NavLink to="/" className="grey-text" onClick={this.props.Signout}>Log out</NavLink></li>  
              
        </div>);
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        Signout:()=>dispatch(logout())
    }
}
export default connect(null,mapDispatchToProps)(Signoutlinks);