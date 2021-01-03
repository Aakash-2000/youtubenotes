import React from "react";
import favicon from "../images/favicon.png";

class Notesdetails extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { details } =this.props;
        return(
            <div className="col s12 m4">
                
                <div class="card small">
                        <div class="card-image">
                            <img src={favicon} className="responsive-img"/>
                        </div>
                        <div class="card-content">
                            <span className="card-title black-text">{details.title}</span>
                            <br/>
                            
                         
                        </div>
                        
                    </div>

            </div>
            );
    }
}
export default Notesdetails;