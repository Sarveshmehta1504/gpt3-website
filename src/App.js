import React from 'react'

import { Footer, Blog, Possibility, Feature, WhatGPT3, Header} from './containers'
import { Navbar, Brand,CTA } from './components'
import './App.css'
const App = () => {
  return (
    <div class="App">
      <div class="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
        <Brand/>
        <WhatGPT3/>
        <Feature/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>

    </div>
  )
}

export default App