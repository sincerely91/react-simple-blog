import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {
  return (
    <div className="blog-list">
        <h1>{title}</h1>
        <div className="blcontainer">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <div className="jumbotron">
                        <div className="cat">{blog.Category}</div>
                        <h2 className="display-4" style={{fontSize:30}}>{blog.title}</h2>
                        <p className="lead">{blog.description}</p>
                        <hr className="my-4" />
                        <p>{blog.description}</p>
                        <Link className="btn btn-primary btn-lg" to={`/blogs/${blog.id}`} role="button">Read More</Link>
                    </div>
                </div>
            ))}
        </div>
        
    </div>
  );
};

export default BlogList;
