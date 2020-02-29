import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  const [down, setDown] = useState(1)
  const [currentQuarter, setCurrentQuarter] = useState(1)



  const downCounter = () => {
    if (down < 4) {
      setDown(down + 1)
    }
    else {
      setDown(1)
    }
  };

const quarterIncrement = () => {
  console.log(currentQuarter)
  if (currentQuarter < 4){
    setCurrentQuarter(currentQuarter + 1)
  }
  else{
    setCurrentQuarter(1)
  }
};



  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
  <div className="down__value" onClick={downCounter}>{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
  <div className="quarter__value" onClick={quarterIncrement}>{currentQuarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
