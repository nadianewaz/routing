
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Details from './Components/Details/Details';

function App() {
  return (
    <>
    {/* <Nav></Nav>
    <Home></Home>
    <About></About>
    <Contact></Contact> */}
    
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/details' element={<Details/>}/>

    </Routes>
    
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
