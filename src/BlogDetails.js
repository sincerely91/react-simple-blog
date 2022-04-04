import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect } from "react";
import axios from "axios";


const BlogDetails = () => {
    let blog = [];
    const {id}= useParams()
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/blogs/?id="+id)
          .then(response => {
            if (response.data) {
              blog=response.data
              document.getElementById("detailTitle").innerHTML= blog[0].title;
              document.getElementById("detailAuthor").innerHTML=blog[0].author;
              document.getElementById("detailBody").innerHTML=blog[0].body;
            }
    
          })
      }, []);
    // const {data:blog,error,isPending}=useFetch("http://127.0.0.1:8000/blogs/?id="+id)
    const history= useHistory();
    const handleClick=() => {
        fetch("http://127.0.0.1:8000/blogs/?id="+blog.id,{
            method:"DELETE"
        }).then(()=>{
            history.push("/home")
        })
    }
    // useEffect(() => {
    //     document.getElementById("detailTitle").innerHTML= blog.title;
    //     document.getElementById("detailAuthor").innerHTML= blog.author;
    //     document.getElementById("detailBody").innerHTML= blog.body;
    // }, [blog]);

    // console.log(blog.title)
    
    
    return (  
        <div className="blog-details">
            {/* {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>} */}
             
                <article>
                    <br></br>
                    <h2 id="detailTitle"></h2>
                    <p style={{fontSize:20,fontWeight:300}}>Written by <span id="detailAuthor"></span> </p>
                    <br></br>
                    <div id="detailBody"></div>
                    <button onClick={handleClick}>Delete</button>
                </article>
          
        </div>
    );
}
 
export default BlogDetails;