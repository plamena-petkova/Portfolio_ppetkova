import "./Timestamp.scss";

export function Timestamp() {
  return (
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
  );
}
