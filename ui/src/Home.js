import React, { useState } from "react";
import "./App.css";

import Displaycontact from "./components/Displaycontact";

function Home() {
  const [database, setData] = useState([]);
  const [active, setActive] = useState("");

  const [name, setName] = useState([]);
  const [num, setNum] = useState([]);

  fetch("http://localhost:3000/view")
    .then((response) => response.json())
    .then((data) => setData(data.data));

  const sendmessege = (d1, d2) => {
    
    setName(d1);
    setNum(d2);
    setActive("First");
  };

  return (
  
    <div className="App">
      <div>
        {active === "First" && (
          <Displaycontact title={name} number={num}></Displaycontact>
        )}
      </div>

     

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Number With Con. code</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {database.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.title}</td>
                <td>{val.blog}</td>

                <td>
                  <button
                    type="button"
                    onClick={() => sendmessege(val.title, val.blog)}
                    class="btn btn-primary btn-sm"
                  >
                    Send Messege
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
