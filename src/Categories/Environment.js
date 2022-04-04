import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Environment = () => {
    const {data:blogs, isPending,error}=useFetch("http://127.0.0.1:8000/blog");

    return ( 
        <div className="environment">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.category==="Environment")} title="Environment" />}
        </div>
        
     );
}
 
export default Environment;