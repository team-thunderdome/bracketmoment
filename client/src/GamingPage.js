import React, { useEffect, useState } from 'react';

import Title from "./InfoTitle.js";
import logo from "./assets/logo.svg";
import TextBox from "./TextBox.js";
import Header from "./Header.js";
import Codebox from "./Codebox.js";
import "./GamingPage.css"

const GamingPage = () => {
  const [data, setData] = useState(null);

  const [inputValue, setInputValue] = useState(''); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value); 
  };

  useEffect(() => {
    fetch('/../CodePrompt.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return (<div>Loading...</div>)
  }

  var current_prompt_index = 0;
  var is_correct = false;
  var timer_finished = false;

  while (true) {
    return (
      <div id="content-container">
        <div id="top-menu-bar">
          <Header />
        </div>
        
        <div id="code-box">
          <Codebox text={data.level_1[current_prompt_index].prompt}/>
        </div>
        <div id="input-text-box">
          <TextBox value={inputValue} onChange={handleInputChange} />
        </div>
      </div>
    );
  }

  /* route here to go to next page */
};

export default GamingPage;
