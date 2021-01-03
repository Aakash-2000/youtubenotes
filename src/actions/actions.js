var i=0;
export const login=(details)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase =  getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            
                details.email,
                details.password
            
        ).then(()=>{dispatch({type:"LOGIN_SUCCESS"})}).catch((err)=>{dispatch({type:"LOGIN_FAILURE",err})});
    }
}
export const logout=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase =  getFirebase();
        firebase.auth().signOut().then(()=>{dispatch({type:"SIGNOUT_SUCCESS"})});
            
       
    }
}
export const SignIn =(details)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase =  getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            details.email,
            details.password

        ).then(resp=>{
            return firestore.collection("users").doc(resp.user.uid).set({
                Name:details.name
            });
        }).then(()=>{dispatch({type:"SIGNIN_SUCCESS"})}).catch((err)=>{dispatch({type:"SIGNIN_FAILURE",err})});
    }
    
}
export const addnotes=(notes,t)=>{
    return(dispatch,getState,{getFirestore,getFirebase})=>{
        var firestore = getFirestore();
        var firebase =getFirebase();
        var uid= getState().firebase.auth.uid;
        
        firestore.collection("Usernotes").doc(uid).collection("notes").add({
            
            
            video_id:notes.id,
            title:t,
            notes_arr:notes.notes,
            date: new Date() 
        }).then(()=>{dispatch({type:"DATA_SUCCESS"})}).catch((err)=>{dispatch({type:"DATA_ERROR"},err)})
    }

}