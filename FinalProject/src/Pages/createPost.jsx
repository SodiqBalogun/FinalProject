const CreatePost = () => {
    return (
        <div className="CreatePost">
            <h3> Create a new post! </h3>
            <div className="postSel">
                <div className="postTitle">
                    <input type="text" placeholder="Title (Required)" /> 
                </div>
                <div className="postContent">
                    <input type="text" placeholder="Post Content (Optional)" /> 
                </div>
                <div className="postImage">
                    <input type="text" placeholder="Image Url (Optional)" /> 
                </div>
                <button> Create Post </button>
            </div>
        </div>
    )
}

export default CreatePost;