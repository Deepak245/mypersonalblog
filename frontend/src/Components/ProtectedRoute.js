import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {signin} from "../Actions/authAction";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {isAuthenticated,user,error,showAlert,alertType} = useSelector(state=>state.loginDetails)
    console.log(isAuthenticated)
    // if ( Object.keys(user).length === 0|| {}) {
    //     return <Navigate to="/landing" />;
    //   }
    if ( isAuthenticated) {
      return <Navigate to="/landing" />;
    }
      return children;
}

export default ProtectedRoute
