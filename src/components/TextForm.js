// import React from 'react'
// import propTypes from 'prop-types'

import React, { useState } from 'react';
// import {} from 'react-dom';



export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("On change")
        var newText = text.toUpperCase()
        setText(newText);
    }

    const handleDownClick = (event)=>{
        setText(text.toLowerCase());
    }

    const handleRemoveClick = (event)=>{
        setText(text.trim())
    }

    const handleClearScreen = ()=>{
        var newText = ""
        setText(newText);
    }

    const handleAltText = ()=>{
        var newText = text.toUpperCase().split(" ");
        for(var i = 1; i < newText.length; i+=2){
            newText[i] = newText[i].toLowerCase();
        }
        setText(newText.join(" "));
    }

    const handleAltLetter = ()=>{
        var newText = text.toUpperCase().split("");

        for(var i = 1; i < newText.length; i+=2){
            if(newText[i] !== " ")
            newText[i] = newText[i].toLowerCase();
        }

        setText(newText.join(""));
    };

    const handelOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }

    const wordCounter = (word)=>{
        if(word.length === 0){
            return 0;
        }
        else{
        return word.split(" ").length;
        }
    }


    // state declaration first text refers to value and setText refers to function
    const [text, setText] = useState('Enter text here');
    //              | Funtion name
    // text = "newText"; --> wrong way to use state
    // setText("newText"); --> correct way
    return (
        <>
        <div className={`container text-${props.mode === 'light' ? 'dark': 'light'}`}>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
                <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="9" style={{backgroundColor : props.mode==='dark' ? 'grey' : 'white', color : props.mode==='dark' ? 'white' : 'black'}}></textarea>
            </div>
            <div className='container1'>
                <button className='btn btn-primary' onClick={handleUpClick}>Uppercase</button>
                <button className='btn btn-primary' onClick={handleDownClick}>LowerCase</button>
                <button className='btn btn-primary' onClick={handleRemoveClick}>Remove Spaces</button>
                <button className='btn btn-primary' onClick={handleClearScreen}>Clear Screen</button>
                <button className='btn btn-primary' onClick={handleAltText}>Alter Words</button>
                <button className='btn btn-primary' onClick={handleAltLetter}>Alter Letter</button>
            </div>
        </div>
        <div className={`container my-4 text-${props.mode === 'light' ? 'dark': 'light'}`}>
            <h2>Your text summary</h2>
            <h6>{wordCounter(text)} Words and Letters {text.length}</h6>
            <h6>This paragraph takes {0.008 * text.split(" ").length} minutes to read</h6>
            <h2>Preview</h2>
            <h6>{text}</h6>
            <br />
            <label for="colorpicker">Color Picker:</label><input type="text" id="colorpicker
"/>
        </div>
        </>
    )
}

// TextForm.propTypes = {
//     heading : propTypes.string
// }