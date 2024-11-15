import { supabase } from "../client.js";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [posts, setPosts] = useState([]); // Store the posts
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        const { data, errorT } = await supabase
            .from('Posts')
            .select('*'); 

        if (errorT) {
            console.error("Error fetching posts:", errorT);
            setError(errorT.message);
        } else {
            setPosts(data); 
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []); 

    return (
        <div className="HomePage">
            <div className="filtersFull">
                <h3> Order by: </h3>
                <div className="filters">
                    <button className="newFilter"> Newest </button>
                    <button className="popFilter"> Most Popular </button>
                </div>
            </div>
            {error && <p>Error: {error}</p>} {/* Display error if exists */}
            {posts.length === 0 ? (
                <p>No posts available.</p> // Show message when no posts are available
            ) : (
                <div>
                    {posts.map((post) => (
                        <div key={post.id} className="post">
                            <Link to={`/post/${post.id}`}>
                                <p>Posted at: {new Date(post.created_at).toLocaleString()}</p> 
                                <h2>{post.title}</h2>
                                <p> {post.upvotes} upvotes </p>
                            </Link>
                        </div>
                    )).reverse()}
                </div>
            )}
        </div>
    )
}

export default HomePage;