// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This is crucial for the JS functionality



import './App.css'; 
import React , {useState} from 'react'

import Navbar from './components/Navbar'; 
import Modifytext from './components/modifytext';
import Alert from './components/Alert'

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message , type)=>{
    setalert({
      msg:message,
      type:type 
    })

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const togglemode= ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#0c2233'
      showalert('Dark mode Enable', 'success');
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showalert('Light mode Enable', 'success');

    }
  }

  
  return (

    <div className="App">
     
      <Navbar mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>

      <div className="container my-3">
      <Modifytext showalert={showalert} mode={mode} heading='Enter you headding'/>
      </div>
 
      {/* Other components and code */}
    </div>
  );
}  

export default App;
