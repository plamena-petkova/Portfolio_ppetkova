import "../TimelineView/TimelineView.scss";
import { TimelineItem } from "../TimelineItem/TimelineItem";
import { useDeveloperContext } from "../../../context/developerContext";

export function TimelineView() {
  const { timeline } = useDeveloperContext();
  
  const timelineArray = Object.values(timeline)[1];

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

/*

<TimelineItem
        date={"2000-2005"}
        place={"Math School"}
        information={"Studied Math and Informatics"}
        number={1}
      />
      <TimelineItem
        date={"2005-2009"}
        place={"UNWE"}
        information={"Studied Economy and Human Resources"}
        number={2}
      />
      <TimelineItem
        date={"2008"}
        place={"USA"}
        information={"Worked for Rafting Company in Lake Tahoe"}
        number={3}
      />
      <TimelineItem
        date={"2009-2021"}
        place={"Aqualight"}
        information={"Worked in Aqualight as Office Manager"}
        number={4}
      />
      <TimelineItem
        date={"2022-2023"}
        place={"NexGen LLC"}
        information={"Worked as Junior FrontEnd Developer"}
        number={5}
      />
      <TimelineItem
        date={"2023-present"}
        place={"Freelance"}
        information={"Learnig and develope my skills"}
        number={6}
      />
  */
