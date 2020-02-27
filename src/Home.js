import React, {useState} from 'react'

export default function Home() {
    const [homeScore, setHomeScore] = useState(0);
    return (
        <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            

  <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button onClick = {() =>setHomeScore (homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() =>setHomeScore (homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
      </section>
    </div>
    )
}
