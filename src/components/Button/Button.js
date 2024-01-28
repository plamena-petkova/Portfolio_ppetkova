import "./Button.scss";

export function Button({caption, buttonClass, btnClicked}) {
  return (
   <button onClick={btnClicked} className={buttonClass}>{caption}</button>
  );
}
