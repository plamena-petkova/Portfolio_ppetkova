import { Link } from "react-router-dom";
import "./Button.scss";

export function Button({ caption, buttonClass, btnClicked, hrefLink }) {
  return (
    <Link to={hrefLink} className="link">
      <button onClick={btnClicked} className={buttonClass}>
        {caption}
      </button>
    </Link>
  );
}
