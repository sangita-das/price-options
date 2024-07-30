import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Post.css'




const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2 >This is all post page</h2>
            <h2>Post{posts.length}</h2>

       <div className="post">
             {
                posts.map(post => <Post 
                post = {post}
                key={post.id}
                >

                </Post>)
            }
       </div>
        </div>
    );
};

export default Posts;