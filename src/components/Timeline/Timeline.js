import "./Timeline.scss";

export function Timeline() {
  return (
    <section id="timeline" className="timeline">
      <div className="timeline__component">
        <div className="timeline__date timeline__date--right">2000-2005</div>
      </div>
      <div className="timeline__middle">
        <div className="timeline__point"></div>
      </div>
      <div className="timeline__component timeline__component--bg">
        <h2 className="timeline__title">Math School</h2>
        <p className="timeline__paragraph">
          I studied mathematics and informatics
        </p>
      </div>
      <div className="timeline__component timeline__component--bg">
        <h2 className="timeline__title">University of National and World Economy</h2>
        <p className="timeline__paragraph">
         I studied economy of the human resources
        </p>
      </div>
      <div className="timeline__middle">
        <div className="timeline__point"></div>
      </div>
      <div className="timeline__component">
        <div className="timeline__date">2005-2009</div>
      </div>
      <div className="timeline__component">
        <div className="timeline__date timeline__date--right">2020-2022</div>
      </div>
      <div className="timeline__middle">
        <div className="timeline__point"></div>
      </div>
      <div className="timeline__component timeline__component--bg">
        <h2 className="timeline__title">SoftUni</h2>
        <p className="timeline__paragraph">
          I studied the core of the programming, Javascript, Node.js, React and Angular
        </p>
      </div>
      <div className="timeline__component timeline__component--bottom timeline__component--bg">
        <h2 className="timeline__title">YouTube, Udemy, Github</h2>
        <p className="timeline__paragraph">Continue developing my skills</p>
      </div>
      <div className="timeline__middle">
        <div className="timeline__point"></div>
      </div>
      <div className="timeline__component timeline__component--bottom">
        <div className="timeline__date">2022 - present</div>
      </div>


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
