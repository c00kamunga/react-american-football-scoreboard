import React, {useState} from 'react'

export default function Away() {
    const [awayScore, setAwayScore] = useState(0);
    return (
        <div>
             <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="away">
            <h2 className="away__name">Tigers</h2>
  <div className="away__score">{awayScore}</div>
          </div>
        </div>
      </section>
      <section className="buttons">
        <div className="awayButtons">
          <button onClick = {() =>setAwayScore (awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() =>setAwayScore (awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
        </div>
    )
}
