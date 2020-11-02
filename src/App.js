import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Header from './Navigation/Header'
import ContentSection from './ContentSection/ContentSection'
// import Footer from './Footer/Footer'

class App extends Component {
   render() {
      return ( 
         <BrowserRouter>
            <Header />
            <ContentSection />
            {/* <Footer /> */}
         </BrowserRouter>
      )
   }
}

export default App;
