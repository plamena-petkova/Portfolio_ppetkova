import "../TimelineItem/TimelineItem.scss";

export function TimelineItem(props) {

  const {timeline, index} = props;

  const { dates, company, occupation } = timeline;


  console.log('Index', index);

  const leftComponent = () => {
    return (
      <>
        <div className="timeline__component">
          <div className="timeline__date timeline__date--right">{dates}</div>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component timeline__component--bg">
          <h2 className="timeline__title">{company}</h2>
          <p className="timeline__paragraph">{occupation}</p>
        </div>
      </>
    );
  };

  const rightComponent = () => {
    return (
      <>
        <div className="timeline__component timeline__component--bg">
          <h2 className="timeline__title">{company}</h2>
          <p className="timeline__paragraph">{occupation}</p>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component">
          <div className="timeline__date">{dates}</div>
        </div>
      </>
    );
  };

  return (
    <>
      {index % 2 !== 0 && leftComponent()}
      {index % 2 === 0 && rightComponent()}
    </>
  );
}
