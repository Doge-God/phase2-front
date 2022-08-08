import React from 'react';
import {useState} from 'react';
import './index.css';
import axios from "axios";

function App() {

  const IP_API_BASE_URL = "https://ipinfo.io";

  const [ipBarInput, setIpBarInput] = useState("");
  const [ipResult, setIpResult] = useState(
    {
      "data": {
          "ip": "",
          "city": "",
          "region": "",
          "country": "",
          "loc": "",
          "org": "",
          "postal": "",
          "timezone": ""
      },
      "status": 0,
      "statusText": "No info yet."
    }
  );

  return (
    <div>
      <h1> *IP INFO SEARCH* </h1>
      
      <div>
        <label>ENTER IP HERE</label><br/>
        <input type="text" id="ipInput" name="ipInput" 
          onChange={fieldContent => (setIpBarInput(fieldContent.target.value))}/><br/>
        <button onClick={searchIp}> START SEARCH </button>

        <div>
          {
            ipResult === undefined ? 
            (<p>No info yet.</p>) :
            (
              ipResult.status != 200 ? 
              (<p> ERROR: {ipResult.status} {ipResult.statusText} </p>) :
              (<ul>
                <li>IP: {ipResult.data.ip}</li>
                <li>LOC: {ipResult.data.city} {ipResult.data.region} {ipResult.data.country}</li>
                <li>POSTAL: {ipResult.data.postal}</li>
                <li>CORD: {ipResult.data.loc}</li>
                <li>TZ: {ipResult.data.timezone}</li>
              </ul>)
            )
          }
        </div>

      </div>

    </div>
  );

  function searchIp() {
    axios.get(IP_API_BASE_URL + "/" + ipBarInput + "?token=54370b3dbd9873", {validateStatus: () => true})
      .then((result) => {setIpResult(result)} );
    console.log(ipResult);
  }
}

export default App;
