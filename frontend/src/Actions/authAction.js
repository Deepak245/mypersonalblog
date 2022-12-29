import {SIGN_IN_SUCCESS,SIGN_IN_BEGIN,SIGN_IN_FAIL,DISPLAY_ALERT} from "../Constants/authConstants"
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
        
        dispatch({
          type:SIGN_IN_SUCCESS,
          payload:data.user
        })
      } catch (error) {
       
        dispatch({
            type: SIGN_IN_FAIL,
            payload: error.response.data.msg,
            
          });
        dispatch({type:DISPLAY_ALERT})
      }
}