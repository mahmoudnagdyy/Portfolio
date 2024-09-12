import './App.css';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import Myprojects from './components/Myprojects';
import { Link, Route, Routes } from 'react-router-dom';

import 'animate.css';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/Myprojects' element={<Myprojects />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
