import { HashLink } from "react-router-hash-link";
import "./Button.scss";

export function Button({
  caption,
  buttonClass,
  btnClicked,
  hrefLink,
  download,
}) {
  return (
    <HashLink
      target="_blank"
      rel="noreferrer"
      to={hrefLink}
      download={download}
      className="link"
    >
      <button onClick={btnClicked} className={buttonClass}>
        {caption}
      </button>
    </HashLink>
  );
}
