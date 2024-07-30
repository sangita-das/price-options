import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();  
    const {firstname, website} = user;
    return (
        <div>
            <h2>This is userDetails page </h2>
            <p>{user.length}</p>
            <h3>User Name: {firstname}</h3>
            <p>Visit us- {website}</p>
        </div>
    );
};

export default UserDetails;