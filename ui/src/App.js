import "./App.css";

import FormItems from "./components/FormItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import Displaycontact from "./components/Displaycontact";

function App() {
  

  return (
   
      <div className="App">
        
        <div className="home-container">
          <div className="home-container1">
            <div className="home-container2">
              <div className="home-container3">
                <div className="home-container4 textarea">
                  <FormItems></FormItems>
                </div>
                <div className="home-container5 textarea">
                  <Home></Home>
                </div>
              </div>
              <div className="home-container6">
                <div className="home-container7 textarea"></div>
              </div>
            </div>
          </div>
        </div>
        <BrowserRouter>
        <Routes>
                    <Route
                      path="/displaycontact"
                      element={
                        <div>
                          {" "}
                          <Displaycontact></Displaycontact>
                        </div>
                      }
                    />
                  </Routes>
                  </BrowserRouter>
                 
      </div>
     
    
  );
}

export default App;
