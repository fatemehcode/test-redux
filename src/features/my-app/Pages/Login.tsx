import { useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import {signInWithPopup} from "firebase/auth";
import { auth, provider } from "../config/firebase";
import { useNavigate } from "react-router-dom";


export const Login = () => {   
    const username=useSelector((state:any)=>state.user.value.username);
    const navigate=useNavigate();
    
    
    const signInWithGoogle=async()=>{
      const result=await signInWithPopup(auth,provider);
      console.log(result);
      navigate("/");
    };
    return (
        <div>
          <h1>Login Page</h1>          
          <button onClick={signInWithGoogle}>Sign In with Google</button><br />
                 
        </div>
    );
};

