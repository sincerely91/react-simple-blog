import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Design = () => {
    const {data:blogs, isPending,error}=useFetch("https://blogvesit.herokuapp.com//blog/");

    return ( 
        <div className="design">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.category==="Design")} title="Design" />}
        </div>
        
     );
}
 
export default Design;
