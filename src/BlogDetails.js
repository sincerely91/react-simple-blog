import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id}= useParams()
    const {data:blog,error,isPending}=useFetch("http://127.0.0.1:8000/blog/"+id)
    const history= useHistory();
    const handleClick=() => {
        fetch("http://127.0.0.1:8000/blog/"+blog.id,{
            method:"DELETE"
        }).then(()=>{
            history.push("/home")
        })
    }
    
    return (  
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <br></br>
                    <h2>{blog.title}</h2>
                    <p style={{fontSize:20,fontWeight:300}}>Written by {blog.author}</p>
                    <br></br>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;