import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Container from './componants/Container/container';
import Section2 from './componants/Sections/Sec2';
import Section3 from './componants/Sections/Sec3';
import Section4 from './componants/Sections/Sec4';
import Section5 from './componants/Sections/Sec5';
import Section6 from './componants/Sections/Sec6';
import Section7 from './componants/Sections/Sec7';
import "./style/Media/Mediam.css"
import './style/Media/Small.css'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Container/>
  <Section2/>
  <Section3/>
  <Section4/>
  <Section5/>
  <Section6/>
  <Section7/>
  </StrictMode>,
)
