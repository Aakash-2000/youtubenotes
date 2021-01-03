import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import youtube from "../images/YouTube.png";
import {connect} from "react-redux";
import "../Styles.css";
class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            query:null,
            v_limit:10,
            videos:[]
            
        }

    }
    
    videolimit=()=>{
        var videolimits=prompt("Video Limit:");
        console.log(videolimits);
        this.setState({
            v_limit:videolimits
        });
        console.log(this.state);
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.id]:event.target.value
        });
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        
       
        
        this.setState({
            videos:[]
        })
        axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCBmkzRR-qB33chrmGs7m2A_i_n29qA-Uc&type=video&maxResults="+this.state.v_limit+"&q="+this.state.query).then(data=>{
            
           
            
            data.data.items.forEach(video => {
                this.setState({
                    videos:[...this.state.videos,video]
                })
            });
            console.log(this.state)
            
            
           
        })
        
        
       
        

    }
    render(){
        const { auth } = this.props;
        if(!auth){
            return <Redirect to="/login"></Redirect>
        }
        const videos =this.state.query? this.state.videos.map(element=>{
                    
            var link_id="/notes/"+element.id.videoId;
            return(<Link to={link_id}><img style={{marginLeft:"10px"}} src={element.snippet.thumbnails.medium.url} alt="no image"/></Link>)
        }) : <p><img src={youtube} className="responsive-img" style={{height:"300px"}}></img><p><h4>Search videos from YouTube</h4></p></p>
        
        return(
        <div>
            <div className="container" style={{marginTop:"20px"}}>
                <form className="col s12" onSubmit={this.handleSubmit}>
                    
                    <div className="row" id="searchbar">
                        <div className="col s2" >
                            <p className="right-align"><icon onClick={this.videolimit} className="material-icons">settings</icon></p>
                            
                        </div>
                        <div className="col s8">
                            <input  type="text" id="query" onChange={this.handleChange}/>
                        </div>
                        <div className="col s2">
                            <button type="submit" className="btn" id="search">Search</button>
                        </div>
                    
                        
                        
                    </div>
                </form>
            </div>
            <div className="container">
                <div className="row">
                    {videos}
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
export default connect(mapStateToProps)(Search)