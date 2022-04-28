
import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Technology = () => {
    const {data:blogs, isPending,error}=useFetch("https://blogvesit.herokuapp.com//blog/");

    return ( 
        <div className="technology">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.category==="Technology")} title="Technology" />}
        </div>
        
     );
}
 
export default Technology;
