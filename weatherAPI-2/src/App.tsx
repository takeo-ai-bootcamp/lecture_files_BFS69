import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
const Timeoutpromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("pending rejected");
  }, 10000);
});

function App() {
  const [showOutcome, setShowOutcome] = useState("");
  const [temp, setTemp] = useState("");

  async function fetchDataFromAPI() {
    try {
      const response = await fetch(
        "https://api.weatherapi.com/v1/current.json?key=b0498063b15543cf8a730131252602&&q=" +
          showOutcome,
        {
          headers: {},
        }
      );
      const data = await response.json();
      console.log(data);
      setTemp(data.current.temp_c);
    } catch (error) {
      console.log("there is an error");
    }
  }

  return (
    <>
      <input type="text" onChange={(e) => setShowOutcome(e.target.value)} />
      <button onClick={fetchDataFromAPI}>FetchData</button>
      <Home temperature={temp} />
    </>
  );
}

export default App;
