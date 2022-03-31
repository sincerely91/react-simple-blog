import {Link} from 'react-router-dom'

const Welcome = () => {
    return ( 
        <div className="welcome">
            <div className="container-jumbotron">
                    <div className="jumbotron">
                        <h1 className="display-4" style={{fontSize:50}}>Hello, World</h1>
                        <p className="lead">This is a simple hero unit , a simple  sit amet consectetur adipisicing elit.</p>
                        <hr className="my-4" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. The Pali-Aike volcanic field is a volcanic field in Argentina that straddles the border with</p>
                        <Link className="btn btn-primary btn-lg" to="/home" role="button">Check out Our Blog</Link>
                    </div>
                </div>
        </div>
        
     );
}
export default Welcome;