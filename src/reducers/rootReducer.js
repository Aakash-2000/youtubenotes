import authReducer from "./authReducer";
import {combineReducers} from "redux";
import dataReducer from "./dataReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer} from "react-redux-firebase";
const rootReducer=combineReducers({
    auth:authReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    data:dataReducer
})
export default rootReducer;