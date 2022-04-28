import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Business = () => {
    const {data:blogs, isPending,error}=useFetch("https://blogvesit.herokuapp.com//blog/");

    return ( 
        <div className="business">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.category==="Business")} title="Business" />}
        </div>
        
     );
}
 
export default Business;
