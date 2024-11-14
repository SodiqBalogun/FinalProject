import { supabase } from "../client.js";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import thumbsUp from "../assets/thumbsUp.png";

const PostInfo = () => {
    const { id } = useParams(); 
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

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
            setComments(data.comments);
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

    const createComment = async () => {
        const userComment = document.getElementById("commentInput").value;
        if (!userComment.trim()) return; 
        const updatedComments = post.comments ? [...post.comments, userComment] : [userComment];

        const { data, error } = await supabase
            .from('Posts')
            .update({ comments: updatedComments })
            .eq("id", id);

        if (error) {
            console.error("Error updating comments:", error);
        } else {
            alert("Commented!");
            setComments(updatedComments);
            fetchPost(); 
        }
    }

    useEffect(() => {
        fetchPost();
    }, [id]);

    console.log(post);
    console.log(comments);

    return (
        <div className="PostInfo">
            <div className="postD">
                <h3>Posted at: {new Date(post.created_at).toLocaleString()}</h3>
                <h2> {post.title} </h2>
                <h3> {post.content} </h3>
                {post.image && <img src={post.image} height="200px" />}
                
                <div className="upvotes" >
                    <img src={thumbsUp} alt="Thumbs Up" height="25px" onClick={upVote}/> 
                    <p onClick={upVote}> {post.upvotes} upvotes </p>
                </div>
            </div>

            <div className="comments">
                <div className="commentPosting">
                    <input type="text" placeholder="Leave a Comment..." id="commentInput" />
                    <button className="postComment" onClick={createComment}> Post </button>
                </div>
                {comments && comments.map((comment) => (
                   <div key={comment.id} className="commentLone">
                        <p> - {comment} </p>
                    </div>
                )).reverse()}
            </div>
        </div>
    )
}

export default PostInfo;