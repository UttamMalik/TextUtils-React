// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


// let name = "Uttam Malik";
function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert =(message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled","success");
    }
  };
  return (
    // <>
    // <nav>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>Contact</li>
    // </nav>
    // <img src= {logo} alt="logo" className="App-logo"  />
    // <h1>Hello {name}</h1>
    // <div className="container">jdskfhsdhkhjsdkjghsuiheruihjksdfhguerhkjnciuvherjng;ouerhgjnjksgfniuhsdgfkjndsfiudgherughjkdfgiuheriughkjsdhgfuherrujeurh</div>
    // </>
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert  alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        
        
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
