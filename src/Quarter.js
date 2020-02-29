import React, { useState } from "react";




export default function Quarter() {
  const [quarter, setQuarter] = useState(0);
  const incrementQuarter = () => {
      if(quarter < 4){
          setQuarter(quarter + 1)
      }
      else{
          setQuarter(0)
      }
  }
  return (
    <div>
      <div className="quarter">{quarter}</div>
      <div className="quarter-button">
        <button onClick={incrementQuarter}>Quarter</button>
      </div>
    </div>
  );
}
