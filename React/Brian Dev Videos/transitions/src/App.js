import './App.css';
import { Routes,Route,useLocation} from 'react-router-dom'
import {Home} from './Pages/Home'
import {About} from './Pages/About'
import {Services} from './Pages/Services'
import {AnimatePresence} from 'framer-motion'
import { GlobalStyle } from './globalStyles';
import styled from 'styled-components';


function App() {
  let location  = useLocation()

  const Section = styled.section`
  overflow-x: hidden;
  `
  return (
  <Section>
     <GlobalStyle/>
     <AnimatePresence exitBeforeEnter>
     <Routes location={location} key={location.pathname}>
        <Route exact path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/services" element = {<Services/>}/>
     </Routes> 
     </AnimatePresence>

     </Section>
   
  );
}

export default App;
