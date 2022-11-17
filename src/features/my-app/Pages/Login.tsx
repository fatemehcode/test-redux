import {signInWithPopup} from "firebase/auth";
import { auth, provider } from "../config/firebase";
import { useNavigate } from "react-router-dom";


export const Login = () => {     
    const signInWithGoogle=async()=>{
      const result=await signInWithPopup(auth,provider);
      console.log(result);     
    };
    return (
        <div>
          <h1>Login Page</h1>          
          <button onClick={signInWithGoogle}>Sign In with Google</button><br />
                 
        </div>
    );
};

