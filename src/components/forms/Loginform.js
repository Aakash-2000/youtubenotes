import React from "react";
import "../Styles.css"
import { login } from "../../actions/actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
            this.setState({
                [e.target.id]:e.target.value
            })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.login(this.state);
        document.getElementById("email").value="";
        document.getElementById("password").value="";
        
    }
    render(){
        
        const {auth,authError} = this.props;
        if(auth.uid){return <Redirect to="/search"/>}
        
        
        return(
            <div className="signup">
                   <div >
                    
                       <div className="container">
                           <div className="red-text center">
                                {authError?<p>{authError}</p>:null}
                           </div>
                           <form className=" col s12">
                                
                               <div className="row">
                                    <div className="input-field col s12">
                                        <input type="email" id="email" onChange={this.handleChange} />
                                        <label for="email">Email</label>
                                    </div>
                               </div>
                               <div className="row">
                                    <div className="input-field col s12">
                                            <input type="password" onChange={this.handleChange} id="password"/>
                                            <label for="password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    
                                    <button type="submit" onClick={this.handleSubmit} className="btn grey" >log in</button>         
                                    
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
        login: (details)=>dispatch(login(details))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login); 