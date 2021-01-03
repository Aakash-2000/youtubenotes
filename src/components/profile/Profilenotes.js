import React from "react";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from "react-redux";
import Items from "./Items";
import { Redirect } from "react-router-dom";
import firebase from "../../config/config";
class Profilenotes extends React.Component{
    constructor(props){
        super(props)
        this.state={ 
            notes:[],
            video_id:"",
            title:"",
            date:''
        }
    }
    componentDidMount(){
    
        const { uid } = this.props;
        const { id } = this.props;
        try{
        const db = firebase.firestore();
         db.collection("Usernotes").doc(uid).collection("notes").get().then(a=>{
             a.forEach(b=>{
                 if(b.id===id){
                    this.setState({notes:[...this.state.notes,b.data()]});
                    this.setState({
                        video_id:b.data().video_id,
                        title:b.data().title
                       
                    })
                 }
                
                 
             })}).catch(err=>{console.log(err)})
             
        }
        catch(err){
            return <Redirect to="/login"></Redirect>
            
        }

         
     }
    render(){
    const items = this.state.notes.map(a=>{return(<Items details={a.notes_arr}/>)})
    return(<div><div className="container" style={{marginTop:"70px"}}>
        
        <div className="row"><div className="col s12 m4" ><div className="card-panel" style={{borderRadius:"20px",backgroundColor:"#2962ff"}}><div class="card-content black-text" >
    
    <p> <span style={{color:"white"}}>Title : {this.state.title}</span><br/>
  
    <span style={{color:"white"}}>Video link :<a href={"https://www.youtube.com/embed/"+this.state.video_id} style={{color:"white"}}>{this.state.video_id}</a> </span>
       </p>
  </div></div></div><div className="col s12 m8">{items}</div></div></div></div>);
    }
}
const mapStateToProps = (state,ownProps)=>{
    let id=ownProps.match.params.id
    
    return{
        id:id,
        uid:state.firebase.auth.uid
    }

}
export default compose(connect(mapStateToProps),firestoreConnect([{
    collection:"Usernotes"
}]))(Profilenotes) 