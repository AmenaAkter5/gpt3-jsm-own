
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './containers/Header/Header';
import Brand from './components/Brand/Brand';
import WhatGPT3 from './containers/WhatGPT3/WhatGPT3';
import Features from './containers/Features/Features';
import Possibility from './containers/Possibility/Possibility';
import CTA from './components/CTA/CTA';
import Blog from './containers/Blog/Blog';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possibility></Possibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
