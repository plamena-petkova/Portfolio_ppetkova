import { HashLink } from "react-router-hash-link";
import "./Button.scss";

export function Button({ caption, buttonClass, btnClicked, hrefLink }) {

  console.log('Href', hrefLink);

  return (
    <HashLink to="#projects"className="link">
      <button onClick={btnClicked} className={buttonClass}>
        {caption}
      </button>
    </HashLink>
  );
}
