// components/CustomTextField.js
import React, { useState } from 'react';

const CustomTextField = () => {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const autoCompleteData = [
    'apple',
    'banana',
    'cherry',
    'mango',
    'blueberry',
    'fig',
    'grape'
  ];

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    const filteredSuggestions = autoCompleteData.filter((dropdown) =>
      dropdown.toLowerCase().includes(newValue.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (inputValue.includes('+') || inputValue.includes('-') || inputValue.includes('*') || inputValue.includes('/')) {
        setTags([...tags, inputValue]);
        setInputValue('');
      } else {
        setTags([...tags, inputValue]);
        setInputValue('');
      }
    }
  };

  const addTag = (value) => {
    setTags([...tags, value]);
    setInputValue('');
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };


  const handleSpecialCharacters=(val)=>{
    const characters = ['+','-','/','*','(',')'];
    if(characters.includes(val)){
      return(
        <span>{val}</span>
      )
    }else{
      return(
        <div style={{display:'flex', alignItems:'center', backgroundColor:'#f1f1f1', padding:'10px 15px', borderRadius:'5px'}}>
          <span>{val}</span>
          <button style={{backgroundColor:'transparent', border:0, outline:0}} type="button" onClick={() => removeTag(val)}>X</button>
        </div>
      )
    }
  }
  return (
    <>
    <div style={{display:'flex',alignItems:'center', minHeight:'40px', border:'1px solid #c9c9c9', borderRadius:'5px',paddingTop:'5px', paddingBottom:'5px' }}>
      {tags.length > 0 && (tags.map((tag, index) => (
          <div key={index} style={{padding:'0px 5px'}}>
            {handleSpecialCharacters(tag)}
          </div>
        ))
      )}
      <div style={{position:'relative',width:'100%'}}>
        <input
        style={{height:'40px', padding:"0 15px", border:0, outline:0, borderRadius:'5px', width:'95%'}}
          type="text"
          placeholder="Type here..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
        {inputValue != "" && ( <ul style={{position:'absolute', left:0, minWidth:'400px'}}>
          {suggestions.map((suggestion, index) => ( 
              <li key={index}
                className="suggestion"
                onClick={() => addTag(suggestion)}
              >
                {suggestion}
              </li>))}
        </ul>)}
      </div>
    </div>
    </>
  );
};

export default CustomTextField;
