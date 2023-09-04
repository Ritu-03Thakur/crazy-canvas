
import Home from './components/Home';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import SoundBoard from './components/SoundBoard';


const App  = () => {

  return(
    <>   
    <BrowserRouter>
    <Routes>
      <Route  path='/' element= { <Home />}/>
      <Route  path='/soundboard' element= { <SoundBoard />}/>
    </Routes>
    </BrowserRouter>
  
    </>
  )
};

export default App;
