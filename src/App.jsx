import {useState} from "react";
import './App.css';

function App() {
  const [ball,setBall] = useState(0)
  const [score,setSco] = useState(0)
  const [wicket,setW] = useState(0)

  
     
     
  const increase = (e) =>{
     
      setSco(score +e)
  }
  const increaseBall = (e) =>{
     
    setBall(ball +e)
}
const increaseW= (e) =>{
     if (wicket>9) {
       return;
     }
    console.log(wicket)
  setW(wicket +e)
}
  let res = score
  // let bal = ball
  // let over =
  let currentW = wicket
  // let sco = india.score
  return (
    <div className="App">
      <h3>India:{res}</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              res
              
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              currentW
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick ={()=>increase(1)}>Add 1</button>
        <button className="addScore4" onClick ={()=>increase(4)}>Add 4</button>
        <button className="addScore6" onClick ={()=>increase(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick ={()=>increaseW(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick ={()=>increaseBall(1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
