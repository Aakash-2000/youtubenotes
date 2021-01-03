import React from "react";
import {Link} from "react-router-dom";
import main from "../images/main.jpg";
import "../Styles.css";
import { Redirect } from "react-router-dom";
import {connect} from "react-redux";
class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { auth } = this.props;
        if(!auth){
            return <Redirect to="/login"></Redirect>
        }
        return(
        <div>
            <div >
                <div className="row" id="homerow" style={{marginTop:"100px"}}>
                    
                    <div className="col s12 m4" id="hometext">
                        <p style={{padding:"50px"}}>
                            <p><h5 className="flow-text" style={{lineHeight: "100%"}}>Start taking notes for youtube videos</h5></p>
                            <br/>
                            <Link to="/search" ><button id="start">Get started</button></Link>

                        </p>
                    </div>
                    <div className="col s12 m8">
                        <img src={main} className="responsive-img"  style={{borderRadius:"20px"}}></img>
                    </div>
                </div>
            </div>
            
            
           


        </div>)
    }
}
const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth.uid
    }
}
export default connect(mapStateToProps)(Home);