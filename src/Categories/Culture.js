import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Culture = () => {
    const {data:blogs, isPending,error}=useFetch("http://127.0.0.1:8000/blog");

    return ( 
        <div className="culture">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.category==="Culture")} title="Culture" />}
        </div>
        
     );
}
 
export default Culture;