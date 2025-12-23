import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Text from './components/Text'
import Alert from './components/Alert'


function App() {
  const [mode, setMode] = useState('light')
  const [greenmode, setgreenMode] = useState('light')
  const [redmode, setredMode] = useState('light')
  const [alert,setalert] = useState(null);
  const showalert = (message,type) =>{
      setalert({
        msg : message,
        type : type
      })
      setTimeout(()=>{
        setalert(null);
      },2000)
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark Mode Has Been enabled","success")
    }
    else{
      setMode('light')
          document.body.style.backgroundColor='white';
          showalert("Light Mode Has Been Enabled","success")
    }
  }

  const toggleModeGreen = () =>{
    if(greenmode === 'light'){
      setgreenMode('#4c7b0eff');
      document.body.style.backgroundColor='#4c7b0eff';
      showalert("Green Mode Has Been enabled","success")
    }
    else{
      setgreenMode('light')
          document.body.style.backgroundColor='white';
          showalert("Light Mode Has Been Enabled","success")
    }
  }
  const toggleModeRed = () =>{
    if(redmode === 'light'){
      setredMode('#6f0909ff');
      document.body.style.backgroundColor='#6f0909ff';
      showalert("Red Mode Has Been enabled","success")
    }
    else{
      setredMode('light')
          document.body.style.backgroundColor='white';
          showalert("Light Mode Has Been Enabled","success")
    }
  }
  return (
   
     <>
<Navbar title="TextUtils" mode={mode} redmode={redmode} greenmode={greenmode} toggleMode={toggleMode} toggleModeGreen={toggleModeGreen} toggleModeRed={toggleModeRed}/>
<Alert alert={alert}/>
<div className="container">
          <Text heading="Enter the text below " mode={mode} toggleMode={toggleMode} showAlert={showalert}/> 
  {/* <About/> */}
  </div>

    </>
  )
}

export default App
