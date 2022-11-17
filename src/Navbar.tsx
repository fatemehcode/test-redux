import { Await, Link } from "react-router-dom";
import {auth} from "./features/my-app/config/firebase";
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
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/Counter">Counter</Link></li> */}
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
           
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