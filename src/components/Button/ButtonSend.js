import "./Button.scss";

export function ButtonSend({ caption, buttonClass, btnClicked, disable }) {
  return (
    <button type="submit" className={buttonClass} onClick={btnClicked} disabled={disable}>
      {caption}
    </button>
  );
}
