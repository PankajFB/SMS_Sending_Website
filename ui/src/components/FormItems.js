import React, { useState } from "react";
import "./FormItems.css";

const FormItems = (props) => {
  const [title, setItem_title] = useState("");
  const [blog, setItem_blog] = useState("");

  const onChangeName = (event) => {
    setItem_title(event.target.value);

    console.log(event.target.value);
  };

  const onChangePrice = (event) => {
    setItem_blog(event.target.value);
    console.log(event.target.value);
  };

  

  // codegrapper
   const onSubmit= ()=>{
    let databody = {
        "title": title,
        "blog": blog
    }

    return fetch('newBlog', {
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
    <>
      <form   className="validate w-auto p-3">
        <div className="form-field form-floating">
         
          <input type="text" className="form-control" id="floatingInput" value={title} onChange={onChangeName} placeholder="name@example.com"/>
  <label >Name</label>
        </div>
        
        <div className="form-field form-floating">
        
          <input type="text" className="form-control" id="floatingInput" value={blog} onChange={onChangePrice} placeholder="name@example.com"/>
  <label >Number</label>
        </div>
        <div className="form-field">
          
       
          <button type="submit" className="btn btn-primary btn-lg " onClick={onSubmit} >Add to contact</button>
        </div>
      </form> 
    </>
  )
}

export default FormItems;
