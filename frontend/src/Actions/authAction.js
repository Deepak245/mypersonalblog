import {SIGN_IN_SUCCESS,SIGN_IN_BEGIN,SIGN_IN_FAIL,DISPLAY_ALERT,CLEAR_ERRORS} from "../Constants/authConstants"
import axios from "axios";

export const signin =(email,password)=>async(dispatch)=>{
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        dispatch({ type: SIGN_IN_BEGIN })
        
        const {data} = await axios.post("/api/v1/auth/login",{email,password},config)
        console.log(data)
        dispatch({
          type:SIGN_IN_SUCCESS,
          payload:data.user
        })
      } catch (error) {
        console.log(error)
        dispatch({
            type: SIGN_IN_FAIL,
            payload: error.response.data.msg,
            
          });
        dispatch({type:DISPLAY_ALERT})
      }
}


export const clearAlert = ()=> async(dispatch)=>{
   try {
     console.log("In Clear Error action")
     dispatch({type:CLEAR_ERRORS})
    
   } catch (error) {
      console.log(error)
   }
      
}