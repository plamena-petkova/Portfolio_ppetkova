import { HashLink } from "react-router-hash-link";
import "./Button.scss";
import IcomoonReact from "icomoon-react";
import iconSet from "../../assets/selection.json";

export function Button({ caption, buttonClass, btnClicked, hrefLink, newTab }) {
  return (
    <HashLink className="link" to={hrefLink} target={newTab ? "_blank" : null}>
      <button onClick={btnClicked} className={buttonClass}>
        {caption === "Up" ? (
          <IcomoonReact
            iconSet={iconSet}
            color="#1e1e1e"
            size={20}
            icon={"arrow-up2"}
          />
        ) : (
          caption
        )}
      </button>
    </HashLink>
  );
}
