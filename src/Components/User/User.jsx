import { Link } from "react-router-dom";


const User = ({user}) => {

    const {id, firstname, email, phone} = user;
    console.log(user)

   

    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>Name: {firstname}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to ={`/user/${id}`}>
                <button style={userStyle} >Click me</button>
            </Link>
        </div>
    );
};

export default User;