import { supabase } from "../client.js";

const CreatePost = () => {

    const createNew = async (event) => {
        event.preventDefault();
        
        const postTitle = document.getElementById("titlePos").value;
        const postContent = document.getElementById("contentPos").value;
        const postImage = document.getElementById("imgPos").value;

        console.log(postTitle, postContent, postImage);

        await supabase
            .from('Posts')
            .insert({title: postTitle, content:postContent, image:postImage})
            .select();
        
      alert("New Post Addedd Successfully");
    }

    return (
        <div className="CreatePost">
            <h3> Create a new post! </h3>
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
                <button onClick={createNew}> Create Post </button>
            </div>
        </div>
    )
}

export default CreatePost;