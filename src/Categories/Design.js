import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Design = () => {
    const {data:blogs, isPending,error}=useFetch("http://127.0.0.1:8000/blog/");

    return ( 
        <div className="design">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.category==="Design")} title="Design" />}
        </div>
        
     );
}
 
export default Design;