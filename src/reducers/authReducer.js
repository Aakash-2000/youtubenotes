const initState={
    authError:null
}

const authReducer=(state=initState,action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            return{
                state
            }
        case "LOGIN_FAILURE":
            return{
                ...state,
                authError:action.err.message
            }
        case "SIGNIN_FAILURE":
            console.log("err");
            return{
                
                ...state,
                authError:action.err.message
               
            }
        case "SIGNIN_SUCCESS":
            console.log("SIGNIN_SUCCESS");
            return{
                ...state
            }
        
            
        case "SIGNOUT_SUCCESS":
            return{
               ...state
            }
       
        default:
            return{
                ...state
            }

    }

}
export default authReducer;
