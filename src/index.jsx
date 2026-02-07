import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Header from './modules/Header';
import Navigation from './modules/Navigation';
import Content from './modules/Content';
import Router from './Router';
import Footer from './modules/Footer';

import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Navigation />
      <Content>
        <Router />
      </Content>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
