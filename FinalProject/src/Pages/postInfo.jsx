import { supabase } from "../client.js";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import thumbsUp from "../assets/thumbsUp.png";

const PostInfo = () => {
    const { id } = useParams(); 
    const [post, setPost] = useState([]);

    const fetchPost = async () => {
        const { data, error } = await supabase
            .from('Posts')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            console.error("Error fetching post:", error);
        } else {
            setPost(data);
        }
    };

    const upVote = async () => {
        const { data, error } = await supabase
            .from('Posts')
            .update({upvotes: post.upvotes + 1})
            .eq("id", id);

        if (error) {
            console.error("Error fetching post:", error);
        }
        console.log("Upvoted!");
        fetchPost();
    }

    useEffect(() => {
        fetchPost();
    }, [id]);

    console.log(post);

    return (
        <div className="PostInfo">
            <div className="postD">
                <h3>Posted at: {new Date(post.created_at).toLocaleString()}</h3>
                <h2> {post.title} </h2>
                <h3> {post.content} </h3>
                {post.image && <img src={post.image} height="200px" />}
                
                <div className="upvotes" onClick={upVote}>
                    <img src={thumbsUp} alt="Thumbs Up" height="25px" /> 
                    <p> {post.upvotes} upvotes </p>
                </div>
            </div>

            
        </div>
    )
}

export default PostInfo;