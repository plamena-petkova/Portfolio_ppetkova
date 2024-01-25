import "./Button.scss";

export function Button({caption, buttonClass}) {
  return (
   <button className={buttonClass}>{caption}</button>
  );
}
