
import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Technology = () => {
    const {data:blogs, isPending,error}=useFetch("http://127.0.0.1:8000/blog/");

    return ( 
        <div className="technology">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.category==="Technology")} title="Technology" />}
        </div>
        
     );
}
 
export default Technology;