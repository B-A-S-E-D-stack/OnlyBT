import './App.css';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import Footer from './Footer';

document.body.style = 'background: #092c4b;';



const App = () => {
  return (
    <>
    <div className="App">
        <h3>OnlyBT</h3>
        <h5>Where everyone wants to post their bt edits</h5>
    </div>
    <div className="link">
    <NavLink to="/about">
      About
      </NavLink>
      </div>
    <Footer />
    </>
  )
}

export default App;
