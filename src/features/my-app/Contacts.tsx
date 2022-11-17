import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export const Contacts = () => {
    const username=useSelector((state:any)=>state.user.value.username);
    console.log({username});
    if(username) {return (
        <div>
          <h1>Hello {username}</h1>  
        </div>
    );}else{
        return (
            <div>
              <Link to="/Login">please Login</Link>  
            </div>
        );
    }
    
};
