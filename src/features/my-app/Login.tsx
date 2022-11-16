import { useState } from "react";
import {login,logout} from "../../app/store2";
import { useDispatch,useSelector} from "react-redux";


export const Login = () => {
    const [newUsername,setNewUsername] =useState("");
    const dispatch=useDispatch();
    const username=useSelector((state:any)=>state.user.value.username);
    return (
        <div>
          <h1>Login Page user name :{username}</h1>
          <input type="text" onChange={(e)=>setNewUsername(e.target.value)}/>  
          <button onClick={()=>dispatch(login({username:newUsername}))}>Login</button>
          <button onClick={()=>dispatch(logout())}>Logout</button>
        </div>
    );
};

