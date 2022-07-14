import Home from './components/Home';
import Navbar from './components/Navbar';

import About from './pages/About';
import HomePage from './pages/HomePage';
import Gmail from './pages/Gmail';
import Store from './pages/Store';
import Images from './pages/Images';

import {Routes,Route} from 'react-router-dom'

function App() {
  return (
          
      <>
      
<Navbar/>
<Routes>
     
     <Route path="/" element={<Home />} />
     <Route path="/homepage" element={<HomePage/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/gmail" element={<Gmail/>} />
     <Route path="/Store" element={<Store/>} />
     <Route path="/images" element={<Images/>} />
     <Route path="/homepage" element={<HomePage/>} />
   
   </Routes>
     </>
  );
}

export default App;
