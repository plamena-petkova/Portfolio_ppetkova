import "../TimelineItem/TimelineItem.scss";

export function TimelineItem({ number, date, place, information }) {
  const leftComponent = () => {
    return (
      <>
        <div className="timeline__component">
          <div className="timeline__date timeline__date--right">{date}</div>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component timeline__component--bg">
          <h2 className="timeline__title">{place}</h2>
          <p className="timeline__paragraph">
            {information}
          </p>
        </div>
      </>
    );
  };

  const rightComponent = () => {
    return (
      <>
        <div className="timeline__component timeline__component--bg">
          <h2 className="timeline__title">{place}</h2>
          <p className="timeline__paragraph">
            {information}
          </p>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component">
          <div className="timeline__date">{date}</div>
        </div>
      </>
    );
  };

  return (
   <>
    {number% 2 === 0 && leftComponent()}
    {number% 2 !== 0 &&rightComponent()}

   </>
  );
}
