import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper case button clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case ! ","primary")
  };

  const handleOnChange = (event) => {
    console.log("text field change");
    setText(event.target.value);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case ! ","primary")
  };

  const textClear = () => {
    setText("");
    props.showAlert("Text Cleared ! ","primary")
  };
  const handleCopy = () => {
      let mytext = document.getElementById("exampleFormControlTextarea1");
      mytext.select();
      navigator.clipboard.writeText(mytext.value);
      props.showAlert("Copy to clipboard ! ","primary")
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style ={{color: props.mode === 'dark' ? 'white': '#042743'}}>
        <h1>{props.heading}</h1> 
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style ={{backgroundColor:props.mode === 'dark' ? 'grey': 'white',
            color: props.mode === 'dark' ? 'white': '#042743'}}
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>
          CONVERT TO UPPER CASE
        </button>
        <button className="btn btn-success mx-2" onClick={handleLowClick}>
          convert to lower case
        </button>

        <button className="btn btn-success mx-2" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-danger mx-2 " onClick={textClear}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style ={{color: props.mode === 'dark' ? 'white': '#042743'}}>
        <h2>Your text summery</h2>
        <p>
          <strong>
            {text.length > 1 ? text.split(" ").length : 0} words and{" "}
            {text.length} characters
          </strong>
        </p>
        <p>
          
          {text.length > 1 ? 0.008 * text.split(" ").length : 0} Minutes read{" "}
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text:"Enter Something to preview..........!!" }</p>
      </div>
    </>
  );
}
