import React from 'react';
import {useState} from 'react';
import './index.css';
import axios from "axios";

function App() {

  const IP_API_BASE_URL = "https://ipinfo.io";

  const [ipBarInput, setIpBarInput] = useState("");
  const [ipResult, setIpResult] = useState({});

  return (
    <div>
      <h1> *IP INFO SEARCH* </h1>
      
      <div>
        <label>ENTER IP HERE</label><br/>
        <input type="text" id="ipInput" name="ipInput" 
          onChange={fieldContent => (setIpBarInput(fieldContent.target.value))}/><br/>
        <button onClick={searchIp}> START SEARCH </button>

        <p>entered: {ipBarInput}</p>
      </div>

    </div>
  );

  function searchIp() {
    alert(ipBarInput);
    axios.get(IP_API_BASE_URL + "/" + ipBarInput + "?token=54370b3dbd9873")
      .then((result) => {setIpResult(result)} );
    console.log(ipResult);
  }
}

export default App;
