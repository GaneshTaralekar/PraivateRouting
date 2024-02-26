import './App.css';
import {BrowserRouter,Route,Router,Routes} from "react-router-dom"
import Home1 from './componets/Home1';
import About1 from './componets/About1';
import {Switch} from "react-router-dom"
import Contact from './componets/Contact';
import Error from './componets/Error';
import Mynumber from './componets/Mynumber';
import Dashboard from './componets/Dashboard';
import Privateroute from './componets/Privateroute';
function App() {
  return (
    <>
    <div className="App">
      <Routes>
       
        <Route path='/' Component={Home1}/>
        <Route path='/About1' Component={About1}/>   
        <Route path= '/Contact' Component={Contact}/>
        <Route path='/Contact/MyNumber' Component={Mynumber}/>
        <Route path='/Privateroute' Component={Privateroute}>
        <Route path='Dashboard' Component={Dashboard}/>
        </Route>
        <Route path="*" element={Error}/>
        
      </Routes>
    </div>
    </>
  );
}

export default App;


