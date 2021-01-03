import React from "react";
import Signlinks from "./Signlinks";
import Signoutlinks from "./Signoutlinks";
import {connect} from "react-redux";
class Navlinks extends React.Component{
    
    render(){
        const {auth} = this.props;
        const link = auth.uid? <Signoutlinks/>:<Signlinks/>;
        return (<div>
                {link}
        </div>);
    }
}
const mapStateToProps=(state)=>{
    return {
        auth: state.firebase.auth
    }

}
export default connect(mapStateToProps)(Navlinks);