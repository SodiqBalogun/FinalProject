import { supabase } from "../client.js";

const EditPost = () => {
    return (
        <div className="EditPost">
            <h3> Editing Post </h3>
            <div className="postSel">
                <div className="postTitle">
                    <input type="text" placeholder="Title (Required)" className="smallInp" id="titlePos" /> 
                </div>
                <div className="postContent">
                    <input type="text" placeholder="Post Content (Optional)" className="bigInp" id="contentPos" /> 
                </div>
                <div className="postImage">
                    <input type="text" placeholder="Image Url (Optional)" className="smallInp" id="imgPos" /> 
                </div>
                <button onClick> Update Post </button>
            </div>
        </div>
    )
}

export default EditPost;