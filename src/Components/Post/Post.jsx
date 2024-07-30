import { Link, useNavigate } from 'react-router-dom';
import '../../Components/Posts/Post.css'


const Post = ({post}) => {

    const{ id, title } = post;
    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }


    return (
        <div className="singlePost">
            <h2>This is single post page</h2>
            <h4>Post of ID : {id}</h4>
            <p>{title}</p>

            {/* one way to go to another page */}
            <Link to={`/post/${id}` }  className="bg-white">Post Details</Link>
            {/* 2nd way to go to another page */}
            <Link to = {`/post/${id}`}
            ><button className="btn btn-primary">Show Details</button></Link>
            {/* 3rd way to go to another page */}
            <button className='text-xl font-bold bg-yellow-50 rounded p-2' onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;