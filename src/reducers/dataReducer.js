const initState={
    
}

const dataReducer=(state=initState,action)=>{
    switch(action.type){
       
        case "DATA_SUCCESS":
            return{
               ...state
            }
        case "DATA_ERROR":
            console.log(action.err);
            return{
                   ...state
            }
           
        default:
            return{
                ...state
            }

    }

}
export default dataReducer;
