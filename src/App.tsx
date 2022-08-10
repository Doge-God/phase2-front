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
    <div className=' flex bg-slate-800 h-screen w-screen justify-center items-center'>
      
      <div className=' '>
        <h1 className=' text-green-500 tracking-widest
          underline underline-offset-4 font-mono font-light text-5xl py-4 text-center'> IP SEARCH</h1>
      
        <div className=' flex  h-20 justify-center'>
          
          <input type="text" id="ipInput" name="ipInput" placeholder='EMPTY FOR YOUR IP'
            className=' shadow-inner shadow-indigo-900 font-mono items-start h-14 w-3/5 p-2 m-2 rounded-md'
            onChange={fieldContent => (setIpBarInput(fieldContent.target.value))}/><br/>
          
          <button className=' font-mono font-semibold shadow-inner shadow-slate-500 rounded-full
          transition duration-200 ease-in-out hover:bg-green-400  active:bg-emerald-600 hover:rounded-3xl 
           hover:cursor-zoom-in bg-green-500 text-lime-200 w-1/4 my-3 mx-2 p-2' 
            onClick={searchIp}> START</button>

        </div>
        
        <div className=' font-mono flex justify-center'>
          {
            ipResult === undefined ? 
            (<p className=' text-slate-400 justify-start w-72 px-2 my-3
            divide-y divide-zinc-700 border-2 border-slate-600 rounded-xl'>No info yet.</p>) :
            (
              ipResult.status != 200 ? 
              (<p className=' text-slate-400 justify-start w-72 px-2 my-3
              divide-y divide-zinc-700 border-2 border-slate-600 rounded-xl'> ERROR: {ipResult.status} {ipResult.statusText} </p>) :
              (<ul className=' text-slate-400 justify-start w-72 px-2 my-3
                 divide-y divide-zinc-700 border-2 border-slate-600 rounded-xl'>
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
    //NOTE: token only written plain here for marking purposes.
    axios.get(IP_API_BASE_URL + "/" + ipBarInput + "?token=54370b3dbd9873", {validateStatus: () => true})
      .then((result) => {setIpResult(result)} );
    console.log(ipResult);
  }
}

export default App;
