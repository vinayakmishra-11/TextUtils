
import React ,{useState } from 'react'



export default function Text(props) {
    const [text, setText] = useState("");
    const handlUpClick = () =>{
        console.log("Button is clicked ")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper case","success")
    }
     const handlLoClick = () =>{
        console.log("Button is clicked ")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase case","success")
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
        
    }
    const handlextract =() =>{
      let a =prompt("enter the starting number");
      let b= prompt("enter the ending number ")
     let newText = text.slice(a,b);
     setText(newText);
     props.showAlert("Succesfully Extracted","success")
    }

    const handlcheck =() =>{
      let a =prompt("enter the word");
      
     let ans = text.includes(a);
     if(ans){
      // alert("It includes the word ",{a})
      props.showAlert("It Includes the Word","success")
     }
     else {
     props.showAlert("It ot include the word ","danger");
     }
    }
  return (
   <>
<div className="container" style={{color: props.mode=='dark' ? 'white' : 'black'}|| {color: props.Redmode=='red' ? 'black' : 'black'}}>
    <h1>{props.heading  } </h1>
  <div>
    <textarea className="form-control" id="mybox" rows="8" value={text} style={{backgroundColor: props.mode=='dark' ? 'grey' : 'white'}} onChange={handleOnChange}></textarea>
  </div>
  <button className="btn btn-primary mx-2 my-2" onClick={handlUpClick}>
    Convert to uppercase
</button>
<button className="btn btn-primary" onClick={handlLoClick}>
    Convert to lowercase
</button>

<button className="btn btn-primary  mx-2 my-2" onClick={handlextract}>
    Slice Word
</button>

<button className="btn btn-primary  mx-2 my-2" onClick={handlcheck}>
    Check word contain or not
</button>
</div>
<div className="container my-2 " style={{backgroundColor: props.mode=='dark' ? '#042743' : 'white',color: props.mode=='dark' ? 'white' : 'black'}}> 
    <h1> Your Text Summary </h1>
    <p> {text.split(" ").length} words , {text.length} charters </p>
    <p>{0.008* text.split(" ").length} minutes reads </p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : "Enter the text to preview"}</p>
</div>
 </>
  )
}
