import "./Button.scss";

export function ButtonSend({ caption, buttonClass, btnClicked, hrefLink }) {
  return (
    <button type="submit" className={buttonClass} onClick={btnClicked}>
      {caption}
    </button>
  );
}
