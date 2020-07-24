import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/user.routes';
import AuthRoutes from './routes/auth.routes';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
      <AuthRoutes />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
