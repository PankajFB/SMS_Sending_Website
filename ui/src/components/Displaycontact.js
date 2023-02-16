import React from 'react'
import "./Displaycontact.css";
import { useState } from "react";

const Displaycontact = (props)=> {

  const [number,setNumber] = useState("");
  const [messege, setMessege] = useState("");

const onChangemessege = (e) => {
    setNumber(props.number)
    setMessege(e.target.value);
}

  

  const onSubmit= ()=>{
    let databody = {
        "number": number,
        "messege": messege
    }

    return fetch('sendsms', {
        method: 'post',
        body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
}



  return (
    <div className="outer">
  <div className="one">
    <h1>{props.title}</h1>
  </div>
  <div className="two">
    <div>
      <img src="https://tinypic.host/images/2022/12/19/img_avatar.png" alt="Contact is displayed here" style={{width: '120px' ,height: '120px', borderRadius: '50%'}} /><br /><br />
      <h2>{props.number}</h2> 
      <br />
      <input type="text" onchange className="form-control" id="floatingInput"  placeholder="Type your messege here"/>
      <input type="text" value={messege} onChange={onChangemessege} />
  <br />
      <button type="button" onClick={onSubmit} class="btn btn-primary btn-lg ">
          Send SMS
        </button>
    </div>
  </div>
</div>

  )
}

export default Displaycontact