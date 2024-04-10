import { HashLink } from "react-router-hash-link";
import "./Button.scss";

export function Button({
  caption,
  buttonClass,
  btnClicked,
  hrefLink,
  newTab
}) {

  return (
    <HashLink className="link" to={hrefLink} target={newTab ? "_blank" : null}>
      <button onClick={btnClicked} className={buttonClass}>
        {caption}
      </button>
    </HashLink>
  );
}
