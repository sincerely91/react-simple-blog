
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    var {data:blogs, isPending,error}=useFetch("https://blogvesit.herokuapp.com//blog/");

    return ( 
        <div className="home">
            
            <div className="top-section">
                <i><div className="heading-top-section"><p>Style Trends of 2020</p></div></i>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. The Pali-Aike volcanic field is a volcanic field in Argentina that straddles the border with</p>
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
        </div>
     );
}
 
export default Home;
