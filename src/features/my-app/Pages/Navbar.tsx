import { Await, Link } from "react-router-dom";
import {auth} from "../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from 'firebase/auth';


const Navbar = () => {
    const [user]=useAuthState(auth);
    const signUserOut =async()=>{
        await signOut(auth);
    }

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Counter">Counter</Link>
                {!user?
                    (<Link to="/Login">Login</Link>):
                    (<div className="users menu">
                        <Link to="/CreatePost">CreatePost</Link>
                        <Link to="/Contact">Contact</Link>
                    </div>)
                } 
                           
            </div>
            {user&&(
                <div className="user">
                    <p>
                        {user?.displayName}
                        <img src={user?.photoURL || ""} width="20" height="20" alt="user image" />
                        <button onClick={signUserOut}>Log Out</button>
                    </p>
                </div> )}
            <hr />
        </div>
    );
};

export default Navbar;