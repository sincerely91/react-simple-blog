
import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Style = () => {
    const {data:blogs, isPending,error}=useFetch("https://blogvesit.herokuapp.com//blog/");

    return ( 
        <div className="style">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.category==="Style")} title="Style" />}
        </div>
        
     );
}
 
export default Style;
