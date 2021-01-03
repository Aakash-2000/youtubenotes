import React from "react";
import {firestoreConnect, firebaseConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import {compose} from "redux";
import {Link} from "react-router-dom";
import firebase from "../../config/config";
import { Redirect } from "react-router-dom";
import Notesdetails from "../profile/Notesdetails";
import "../Styles.css";

var i=0;
var details=[];
class Profile extends React.Component{
   constructor(props){
       super(props);
       this.state={
            id:[],
           notes:[]
       }
      
   }
   componentDidMount(){
    try{
        
       const { uid } = this.props;
       
       const db = firebase.firestore();
        db.collection("Usernotes").doc(uid).collection("notes").get().then(a=>{
            a.forEach(b=>{
                this.setState({notes:[...this.state.notes,b.data()]});
               this.setState({id:[...this.state.id,b.id]})
                
                
            })}).catch(err=>{console.log(err)})}
    catch(err){
                
       
        }
        
        
    }

    render(){
        const { uid } = this.props;
        if(!uid){
            return <Redirect to="/search"></Redirect>
        }
   
    const card = this.state.notes.map((a, index) =>{
        const link = this.state.id[index];
        
        return(<Link to={link}>
        <Notesdetails details={a}/></Link> );}
       
    )
    console.log(details)
    
    
    return(<div><div ><p className="left-align grey-text" style={{marginLeft:"100px"}}>Your Notes</p></div><div className="container" ><div className="row">{card}</div></div></div>);
    }
}
const mapStateToProps=(state)=>{
    
    return{
        uid :state.firebase.auth.uid
        
    }

}

export default compose(connect(mapStateToProps),firestoreConnect([{collection:"Usernotes"}]))(Profile);