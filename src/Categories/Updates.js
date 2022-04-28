
import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Updates = () => {
    const {data:blogs, isPending,error}=useFetch("https://blogvesit.herokuapp.com//blog/");

    return ( 
        <div className="updates">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.category==="Updates")} title="Updates" />}
        </div>
        
     );
}
 
export default Updates;
