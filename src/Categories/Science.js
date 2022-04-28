import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Science = () => {
    const {data:blogs, isPending,error}=useFetch("https://blogvesit.herokuapp.com//blog/");

    return ( 
        <div className="science">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.category==="Science")} title="Science" />}
        </div>
        
     );
}
 
export default Science;
