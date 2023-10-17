import Buttons from "./Buttons";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import AngryQuote from "./AngryQuote";
import HappyQuote from "./HappyQuote";
import SadQuote from "./SadQuote";
import MotivateQuote from "./MotivateQuote";
function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}> 
  
  
    <Routes> 
 
    <Route path='/' element={<Buttons />}/> 
    <Route path='/happyquote' exact element ={<HappyQuote/>} /> 
    <Route path='/sadquote' element={<SadQuote />}/> 
    <Route path='/angryquote' element={<AngryQuote />}/> 
    <Route path='/motivatequote' element={<MotivateQuote />}/> 
  
 
 
 
    </Routes> 
 
 
    </BrowserRouter>
  );
}

export default App;
