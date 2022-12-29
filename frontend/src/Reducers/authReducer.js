import {SIGN_IN_SUCCESS,SIGN_IN_BEGIN,CLEAR_ERRORS,SIGN_IN_FAIL,DISPLAY_ALERT} from "../Constants/authConstants"


export const loginReducer =(state={user:{},alertdet:{}},action)=>{
    switch (action.type){
        case SIGN_IN_BEGIN:
            return {
                
                isAuthenticated:false
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isAuthenticated:true,
                user:action.payload
            }
        case SIGN_IN_FAIL:
               
            return {
            ...state,
            
            isAuthenticated: false,
            user: null,
            error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        case DISPLAY_ALERT:
                return {
                    ...state,
                    showAlert:true,
                    alertType:"error",
    
                }
        default:
            return state;
    }
}

