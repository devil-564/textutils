import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from "./components/Alert";
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

// let name = 'Irfu678'
function App() {
  const [Mode, setMode] = useState('light');
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#151B54';
      showAlert("Dark mode is successfully enabled", "success");
      document.title = 'Dark Mode of TextUtils';
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is successfully enabled", "success");
      document.title = 'Light Mode of TextUtils';
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  return (
    // JSX starts -- HTML with JS ka
    // <> 
    // {/* above this is JSX fragment which is used to return multiple things not just div but also your fav tags and css */}
    // <h1>This is my first react app</h1>
    // <div className="App">
    //   <nav>
    //     <li>Home</li>
    //     {/* <li>About</li>
    //     <li>Sources</li>
    //     <li>Contact</li> */}
    //   </nav>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <button
    //       className="App-link"
    //       href="/"
    //       target="_blank"ef="/"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Constant Codeway
    //       <br></br>
    //     </button>

    //     {/* <input type='text' placeholder = 'Write something'></input> */}
    //   </header>
    // </div>
    // </> // JSX fragments closing tag
    // // JSX ends


    <>
    {/* <BrowserRouter> */}
      <Router>
        <div className='main-container'>
          <Navbar title={['Text', '_Utils']} about='About-TextUtils' mode={Mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          {/* <Navbar/> */}
          <Routes>
          <Route exact path="/" element = {<TextForm heading="Enter the text to analyze" mode={Mode} />}/>
              {/* <div className="container my-3">

                <TextForm heading="Enter the text to analyze" mode={Mode} />
              </div> */}
            <Route exact path='/about' element = {<About/>}/>
          </Routes>



        </div>
      </Router>
      {/* </BrowserRouter> */}
      {/* <img src="https://i.ytimg.com/vi/wlea7-zBMww/maxresdefault.jpg" className="img-fluid" alt="..."></img> */}
    </>
  );
}

export default App;
