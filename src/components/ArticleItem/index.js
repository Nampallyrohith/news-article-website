import { Link } from "react-router-dom";
import "./index.css";

const ArticleItem = (props) => {
  const { eachItem } = props;
  const { id, title, imageUrl } = eachItem;
  return (
    <li>
      <Link to={`/article/${id}`} className="link">
        <div className="d-flex align-items-center articleItem-container">
          <img src={imageUrl} alt={title} className="image" />
          <h1 className="title-heading">{title}</h1>
        </div>
      </Link>
    </li>
  );
};

export default ArticleItem;
