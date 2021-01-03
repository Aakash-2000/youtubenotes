import React from "react";
import "../Styles.css";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { SignIn } from "../../actions/actions";
class Signin extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            name:" ",
            email:" ",
            password:" "
        }
    }
    handleChange=(e)=>{
       
        this.setState({
            [e.target.id]:e.target.value
        });
        
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.SignIn(this.state);
       
        document.getElementById("email").value="";
        document.getElementById("password").value="";
        document.getElementById("name").value="";
    }
    render(){
        
        const {authError,auth} = this.props;
        if(auth.uid){return <Redirect to="/search"/>}
        return(
            <div className="signup">
                   <div >
                        
                       <div className="container">
                            <div className="red-text center">
                                {authError?<p>{authError}</p>:null}
                           </div>

                           <form className="white col s12">
                           <div className="row">
                                <div className="input-field col s12">
                                        <input type="text" onChange={this.handleChange}  id="name" />
                                        <label for="name">Name</label>
                                </div>
                                </div>
                               <div className="row">
                                    <div className="input-field col s12">
                                        <input type="email"  onChange={this.handleChange} id="email" />
                                        <label for="email">Email</label>
                                        
                                    </div>
                               </div>
                               <div className="row">
                                    <div className="input-field col s12">
                                            <input type="password" onChange={this.handleChange} id="password" />
                                            <label for="password">Password</label>
                                            
                                    </div>
                                </div>
                                <div className="row">
                                    
                                    <button type="submit" onClick={this.handleSubmit} className="btn grey" >Sign in</button>
                                            
                                            
                                    
                                </div>

                           </form>
                       </div>
                   </div>
            </div>);
        }

    
}
const mapStateToProps=(state)=>{
    return{
        authError:state.auth.authError,
        auth:state.firebase.auth
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        SignIn: (details)=>dispatch(SignIn(details))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signin); 
