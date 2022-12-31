import {SIGN_IN_SUCCESS,SIGN_IN_BEGIN,CLEAR_ERRORS,SIGN_IN_FAIL,DISPLAY_ALERT} from "../Constants/authConstants"


export const loginReducer =(state={user:{}},action)=>{
    switch (action.type){
        case SIGN_IN_BEGIN:
            return {
                
                isAuthenticated:false
            }
        case SIGN_IN_SUCCESS:
            // console.log(action.payload.email    )
            
            return {
                ...state,   
                isAuthenticated:true,
                user:action.payload.email,
                showAlert:false,
                error:null
            }
        case SIGN_IN_FAIL:
            localStorage.setItem("user", ""); 
            return {
            ...state,
            
            isAuthenticated: false,
            user: {},
            error: action.payload,
            };
        
        case DISPLAY_ALERT:
                return {
                    ...state,
                    showAlert:true,
                    alertType:"error",
    
                }
        case CLEAR_ERRORS:
            return {
                ...state,
                showAlert:false,
                    alertType:"",
                    user:{},
                    error:null
            }
        default:
            return state;
    }
}

