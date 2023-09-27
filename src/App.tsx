
import Home from './components/Home';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import SoundBoard from './components/SoundBoard';
import DadJoke from './components/DadJoke';


const App  = () => {

  return(
    <>   
    <BrowserRouter>
    <Routes>
      <Route  path='/' element= { <Home />}/>
      <Route  path='/soundboard' element= { <SoundBoard />}/>
      <Route  path='/dadjoke' element= { <DadJoke />}/>
    </Routes>
    </BrowserRouter>
  
    </>
  )
};

export default App;
