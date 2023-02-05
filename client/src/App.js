import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Submission from './submissions.js';
import Home from './home.js';

function App () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/submit" element={<Submission/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
