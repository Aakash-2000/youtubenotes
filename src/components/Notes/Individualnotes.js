import React from "react";
class Individualnotes extends React.Component{
  
    constructor (props){
        super(props);

    }
    edit=(j)=>{
        var text=document.getElementById(j).innerText;
        
        this.props.edit(text,j);
        

        
    }
    render(){
        console.log(this.props.Notes);
        const note = this.props.Notes.map(ind=>{
            if(ind.text.length!==0){return(<li className="collection-item" key={ind.note_no} ><a className="secondary-content"   onClick={()=>this.edit(ind.note_no)} ><icon className="material-icons" style={{color:"#2962ff"}}>edit</icon></a><p id={ind.note_no} >{ind.text}</p></li>)
        }})
        return(<div>{note}</div>)
    }
}
export default Individualnotes;