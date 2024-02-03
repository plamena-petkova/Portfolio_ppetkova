import { HashLink } from "react-router-hash-link";
import "./Button.scss";

export function Button({
  caption,
  buttonClass,
  btnClicked,
  hrefLink,
}) {

  return (
    <HashLink className="link" to={hrefLink}>
      <button onClick={btnClicked} className={buttonClass}>
        {caption}
      </button>
    </HashLink>
  );
}
