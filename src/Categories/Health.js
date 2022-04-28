import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Health = () => {
    const {data:blogs, isPending,error}=useFetch("https://blogvesit.herokuapp.com//blog/");

    return ( 
        <div className="health">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.category==="Health")} title="Health" />}
        </div>
        
     );
}
 
export default Health;
