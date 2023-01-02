import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {signin} from "../Actions/authAction";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem("user");
    const {isAuthenticated,error,showAlert,alertType} = useSelector(state=>state.loginDetails)
    // console.log(user)
    // if ( Object.keys(user).length === 0|| {}) {
    //     return <Navigate to="/landing" />;
    //   }
    if ( !user) {
      return <Navigate to="/landing" />;
    }
      return children;
}

export default ProtectedRoute
