import React, { useState } from "react";
import './Content.css'
export default function Content() {
  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [bmi,setBmi]=useState();
  const[result,setResult]=useState(null);

  const handleweightChange=(e)=>{
    setWeight(e.target.value);
  }
  const handleheightChange=(e)=>{
    setHeight(e.target.value);
  }

  const handleCalculate=()=>{
    
    //Give you logic
    let meter=height*0.01;
    let meters=meter*meter;
    let bmi=weight/meters;
    let out=Math.round(bmi)
    setBmi(out);
    if(out<18)
    {
      setResult("Under Weight");
    }
    else if(out>18 && out<25)
    {
      setResult("Normal");
    }
    else if(out>25 && out<30)
    {
      setResult("Over Weight");
    }
    else if(out>30 && out<35)
    {
      setResult("Obese");
    }
    else if(out>35)
    {
      setResult("Extrem Obese");
    }
    
  }
  return (
    <div>
      <h1>Soldiers Creation's</h1>
      <div className="container">
        <h3>Calculate your BMI</h3>
        <input type="range" className="range" min={0} max={100} onChange={(e)=>{handleweightChange(e)}}/>

        <label htmlFor="weight">weight</label>
        <input type="number" id="weight" className="input" value={weight} />

        <input type="range" className="range" min={0} max={200} onChange={(e)=>{handleheightChange(e)}}/>

        <label htmlFor="height">Height</label>
        <input type="number" id="height" className="input" value={height} />

        <button onClick={handleCalculate}>Calculate</button>

        <input type="text" placeholder="BMI" className="inputs" value={bmi} />

        <a href="https://github.com/Vasanth-sharp" target="_blank">
          visit us
        </a>
        {
          result &&         <div id="result">{result}</div>

        }
      </div>
    </div>
  );
}
