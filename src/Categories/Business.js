import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Business = () => {
    const {data:blogs, isPending,error}=useFetch("http://127.0.0.1:8000/blog");

    return ( 
        <div className="business">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.category==="Business")} title="Business" />}
        </div>
        
     );
}
 
export default Business;