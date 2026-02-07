import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './modules/Header';
import Navigation from './modules/Navigation';
import Content from './modules/Content';
import Router from './Router';
import Footer from './modules/Footer';

import './app.scss';

const App = () => (
  <StrictMode>
    <BrowserRouter basename={import.meta.env.PROD ? '/Assembly-house/' : '/'}>
      <Header />
      <Navigation />
      <Content>
        <Router />
      </Content>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);

export default App;