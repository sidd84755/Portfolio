import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, About, Tech, Experience, Works, Feedbacks, Contact, StarsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <div className="bg-stone-50">
          <Experience/>
        </div>
        <Tech/>
        <Works/>
        <div className="bg-stone-50">
          <Feedbacks/>
        </div>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
