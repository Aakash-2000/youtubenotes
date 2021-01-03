import  React from "react";
class  Items extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { details } = this.props;
        
        return(<div>{details.map(a=>{return(<div className="card-panel" style={{borderRadius:"20px"}}>{a.text}</div>)})}</div>)
    }



}
export default Items;