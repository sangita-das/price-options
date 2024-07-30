import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './user.css'



const Users = () => {
    const users = useLoaderData()
    return (
        <div >
        <h2>Our users: {users.length}</h2>
          <h2>This is users page</h2>
          <div className="users">
            {     
          users.map(user => <User
          user = {user}
          key={user.id}
          >

          </User>
          )
            }
          </div>
    
        </div>
    );
};

export default Users;