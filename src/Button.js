import { Link } from "react-router-dom";

const Button = () => {
  
    return ( 
        
        <div className="buttons">
            <Link className="btn btn-primary btn-lg" to="/home/updates" role="button" >Updates</Link>
            <Link className="btn btn-primary btn-lg" to="/home/environment" role="button">Environment</Link>
            <Link className="btn btn-primary btn-lg" to="/home/technology" role="button">Technology</Link>
            <Link className="btn btn-primary btn-lg" to="/home/design" role="button">Design</Link>
            <Link className="btn btn-primary btn-lg" to="/home/culture" role="button">Culture</Link>
            <Link className="btn btn-primary btn-lg" to="/home/business" role="button">Business</Link>
            <Link className="btn btn-primary btn-lg" to="/home/politics" role="button">Politics</Link>
            <Link className="btn btn-primary btn-lg" to="/home/opinion" role="button">Opinion</Link>
            <Link className="btn btn-primary btn-lg" to="/home/science" role="button">Science</Link>
            <Link className="btn btn-primary btn-lg" to="/home/health" role="button">Health</Link>
            <Link className="btn btn-primary btn-lg" to="/home/style" role="button">Style</Link>
            <Link className="btn btn-primary btn-lg" to="/home/travel" role="button">Travel</Link>

        </div>
     );
}
 
export default Button;




