import "../TimelineItem/TimelineItem.scss";
import { useMediaQuery } from "@uidotdev/usehooks";

export function TimelineItem(props) {

  const {timeline, index} = props;

  const { dates, company, occupation } = timeline;

  const isSmallDevice = useMediaQuery(
    "only screen and (min-width : 300px) and (max-width : 650px)"
  );

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
      {isSmallDevice && rightComponent()}
      {!isSmallDevice && index % 2 !== 0 && leftComponent()}
      {!isSmallDevice && index % 2 === 0 && rightComponent()}
    </>
  );
}
