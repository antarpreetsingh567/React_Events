import React,{useState} from "react";

const App=() => {
  const purple= "#8e44ad";
  const [bg, setBg]= useState(purple);
  const [name, setName]= useState("click me");

  const bgChange = () => {
    let newBg= "#34495e";
    setBg(newBg);
    setName("Wow 🙂: Double Click Now ");
  };
  const bgBack = () =>{
    setBg(purple);
    setName("Back Again 😡")
  }
return(
  <>
  <div style={{backgroundColor:bg}}>
    <h1>Events By Antarpreet</h1>
    <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
  </div>
  </>
);
};
export default App;