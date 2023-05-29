import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './DataContainer/About';
import InfoDetailsButton from './DataContainer/InfoDetailsButton';
import DataContainer from './DataContainer';
const App = () => { 
  return(
    <> 
    <BrowserRouter>
   <Routes>
   <Route path='/coctail/:idDrink' element = {<InfoDetailsButton />}></Route>
    <Route path='/' element = {<Home/>}/>
    <Route path='/about' element = {<About/>}/>
   </Routes>
    </BrowserRouter>
  
  </>
 
  )
 
}
export default App;
 