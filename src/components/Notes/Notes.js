import React from "react";
import "../Styles.css";
import Individualnotes from "./Individualnotes";
import { addnotes } from "../../actions/actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { Redirect } from "react-router-dom";
import favicon  from "../images/favicon.png"
var notes_array=[];
var url="";
var i=0;


class Notes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:null,
            notes:[],
            prompt:""
        };
        this.submit=this.submit.bind(this);
        this.Edit=this.Edit.bind(this);
    }
    componentDidMount(){
       let id=this.props.match.params.id;
       this.setState({
           id
       });
        
    }
    submit=(event)=>{
        
        event.preventDefault();
        i=i+1
        var text = document.getElementById("icon_prefix2").value;
        const note = [...this.state.notes,{text:text,note_no:i}];
        this.setState({
            notes:note
        });
        document.getElementById("icon_prefix2").value="";
        
    }
    Edit=(text,no)=>{
      

        var etext=prompt("Edit",text);
        console.log(no);
        var edited_notes=[]
        this.state.notes.map(note=>{
            if(note.note_no===no){
                    
                    note.text=etext;
                
            }
            edited_notes.push(note);
           

        });
        this.setState({
            notes:edited_notes
        });
        

    }
    clear=(event)=>{
        
        event.preventDefault();
        
        
    }
    addn=()=>{
        var title=prompt("Title for the current notes:");
        if(title!==""){
            this.props.add(this.state,title);
           
            
        }else{
        
        }
        
        
        
    }
    render(){
        const { auth } = this.props;
        if(!auth){
            return <Redirect to="/login"></Redirect>
        }
        
        url="https://www.youtube.com/embed/"+this.state.id;
        const initial=this.state.notes.length===0? <li className="collection-item"><img className="responsive-img" src={favicon}></img><p>Click the save button to add notes..</p></li>:null;
        return(
            <div>
                <div className="row">
                    <div className="col s12 m8">
                        <div className="row">
                            <div className="container">
                                <div className="video-container center" style={{marginTop:"50px",width:"100%"}}>   
                                    <iframe src={url} ></iframe>
                                </div> 
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="container">
                                <div class="input-field col s12">
                                        <i className="material-icons prefix" style={{color:"#2962ff"}}>mode_edit</i>
                                        <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                                        <label htmlFor="icon_prefix2">Add your thoughts</label>
                                        
                                </div>
                            </div>
                            
                            
                                
                        </div>
                        <div className="row">
                            <div className="container right-align">
                                <button className="savebtn" onClick={this.submit}>Save</button>
                                <button className="cancelbtn" onClick={this.clear}>Cancel</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col s12 m4" style={{marginTop:"20px"}}>
                        <div className="notes_container">
                            <ul className="collection">
                                <div>
                                <li className="collection-item"><div>Notes<Link  to ="/profile" className="secondary-content btn-floating white-text" style={{backgroundColor:"#2962ff"}}  title="View all notes"><i className="material-icons">notes</i></Link><Link  className="secondary-content btn-floating white-text" style={{backgroundColor:"#2962ff",marginLeft:"10px"}} onClick={this.addn} title="Save"><i className="material-icons">text_snippet</i></Link></div></li>
                                </div>
                                
                                {initial}
                                <Individualnotes Notes={this.state.notes} edit={this.Edit}/>
                                
                            </ul>
                        </div>

                    </div>
                </div>
    
                

            </div>);
    }
} 
const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth.uid
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        add: (a,b)=>dispatch(addnotes(a,b))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Notes);