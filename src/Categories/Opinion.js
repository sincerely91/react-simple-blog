import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Opinion = () => {
    const {data:blogs, isPending,error}=useFetch("https://blogvesit.herokuapp.com//blog/");

    return ( 
        <div className="opinion">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.category==="Opinion")} title="Opinion" />}
        </div>
     );
}
 
export default Opinion;
