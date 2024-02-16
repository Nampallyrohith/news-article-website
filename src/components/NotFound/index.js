import { Link } from "react-router-dom";
import './index.css'

const NotFound = () => (
  <div className='not-found-container'>
    <h1>Page is Not Found</h1>
    <Link to="/">
      <button className="btn btn-primary">Go to Home Page</button>
    </Link>
  </div>
);

export default NotFound;
