import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Login from './pages/Login/'
import Profile from './pages/Profile/'
import Header from './components/Header/'
import Footer from './components/Footer/'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux';
import {store} from './redux'

const GlobalStyle = createGlobalStyle`
    * {
            font-family: Avenir, Helvetica, Arial, sans-serif;         
    }
    
    body {
        margin:0px
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
  <React.StrictMode>
    
      <Router>
      <Header />
      <GlobalStyle />
          <Routes>       
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />    
          </Routes>
        <Footer /> 
      </Router>

  </React.StrictMode>
  </Provider>
);

