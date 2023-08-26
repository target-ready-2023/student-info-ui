import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PageRoutes from './components/PageRoutes';
import { BrowserRouter } from 'react-router-dom';
import { RoleProvider } from './components/roles/RoleContext';
import React from 'react';
function App() {
  return (
    <BrowserRouter>
       <RoleProvider>
          <div className="App">
            <Header />
            <PageRoutes />
            <Footer />
          </div>
       </RoleProvider>
    </BrowserRouter>
  );
}

export default App;
