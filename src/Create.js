import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {

    const[title,setTitle]=useState("")
    const[body,setBody]=useState("")
    const[description,setDescription]=useState("")
    const[category,setCategory]=useState("mario")
    const[author,setAuthor]=useState("mario")
    const[isPending,setIsPending]=useState("false");
    const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={id:50,title,description, body, author,category};
        setIsPending(true)

        fetch("http://127.0.0.1:8000/blog",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false)
            //history.go(-1);
            history.push('/home');
        })
    }



    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Tiltle :</label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Description :</label>
                <textarea 
                required
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                ></textarea>
                <label>Blog Body :</label>
                <textarea 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog Author :</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                    required
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <label>Blog Category :</label>
                <select
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                    required
                >
                    <option value="Updates">Updates</option>
                    <option value="Environment">Environment</option>
                    <option value="Technology">Technology</option>
                    <option value="Design">Design</option>
                    <option value="Culture">Culture</option>
                    <option value="Business<">Business</option>
                    <option value="Politics">Politics</option>
                    <option value="Opinion">Opinion</option>
                    <option value="Science">Science</option>
                    <option value="Health">Health</option>
                    <option value="Style">Style</option>
                    <option value="Travel">Travel</option>
                </select>
                {isPending && <button>Add Blog</button>}
                {!isPending && <button disabled>Adding Blog...</button>}
                
            </form>
        </div>
     );
}
 
export default Create;
