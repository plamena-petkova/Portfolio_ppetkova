import "../TimelineView/TimelineView.scss";
import { TimelineItem } from "../TimelineItem/TimelineItem";
import { useDeveloperContext } from "../../../context/developerContext";
import { useEffect, useState } from "react";

export function TimelineView() {
  const { timeline } = useDeveloperContext();
  const [timelineArray, setTimelineArray] = useState([]);

  useEffect(() => {
    if(timeline) {
      setTimelineArray( Object.values(timeline)[1])
    }
  }, [timeline])
  

  return (
    <>
      <section id="timeline" className="timeline">
        <h2 className="timeline__heading-italic">Timeline</h2>
        <div className="timeline__wrapper">
          {timelineArray?.length && timelineArray.map((item, index) => {
            return (
              <TimelineItem
                key={item._id}
                timeline={item}
                index={index}
              />
            );
          })}
        </div>
      </section>
      <div className="timeline-end-arrow"></div>
    </>
  );
}

