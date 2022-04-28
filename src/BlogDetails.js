import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect,useState } from "react";
import axios from "axios";


const BlogDetails = () => {
    let blogData = [];
    const[blog,setBlog]=useState();
    const {id}= useParams()
    useEffect(() => {
        axios.get("https://blogvesit.herokuapp.com//blog/?id="+id)
          .then(response => {
            if (response.data) {
              blogData=response.data;
              setBlog(response.data);
              document.getElementById("detailTitle").innerHTML= blogData[0].title;
              document.getElementById("detailAuthor").innerHTML=blogData[0].author;
              document.getElementById("detailBody").innerHTML=blogData[0].body;
            }
    
          })
      }, []);
    // const {data:blog,error,isPending}=useFetch("https://blogvesit.herokuapp.com//blog/?id="+id)
    const history= useHistory();
    const handleClick=() => {
        fetch("https://blogvesit.herokuapp.com//blog/?id="+blog[0].id,{
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
