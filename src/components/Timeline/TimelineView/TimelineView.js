import "../TimelineView/TimelineView.scss";
import { TimelineItem } from "../TimelineItem/TimelineItem";


export function TimelineView() {
  return (
    <section id="timeline" className="timeline">
      <TimelineItem date={'2000-2005'} place={'Math School'} information={'Studied Math and Informatics'} number={1} />
      <TimelineItem date={'2005-2009'} place={'UNWE'} information={'Studied Economy and Human Resources'} number={2} />
      <TimelineItem date={'2008'} place={'USA'} information={'Worked for Rafting Company in Lake Tahoe'} number={3} />
      <TimelineItem date={'2009-2021'} place={'Aqualight'} information={'Worked in Aqualight as Office Manager'} number={4} />
      <TimelineItem date={'2022-2023'} place={'NexGen LLC'} information={'Worked as Junior FrontEnd Developer'} number={5} />
      <TimelineItem date={'2023-present'} place={'Freelance'} information={'Learnig and develope my skills'} number={6} />
    </section>
  );
}

/*

 <ul className="container__timestamp">
   <li className="container__timestamp--edu-1">
        <p className="container__timestamp--edu-1--term">2000-2005</p>
        <p className="container__timestamp--edu-1--name">Math School</p>
    </li>
    <li className="container__timestamp--edu-2">
        <p className="container__timestamp--edu-2--term">2005-2009</p>
        <p className="container__timestamp--edu-2--name">University of national and world economy</p>
    </li>
    <li className="container__timestamp--edu-3">
        <p className="container__timestamp--edu-3--term">2020-2022</p>
        <p className="container__timestamp--edu-3--name">SoftUni</p>
    </li>
    <li className="container__timestamp--edu-4">
        <p className="container__timestamp--edu-4--term">2020-present</p>
        <p className="container__timestamp--edu-4--name">Udemy, Youtube, Github</p>
    </li>

   </ul>

   */
