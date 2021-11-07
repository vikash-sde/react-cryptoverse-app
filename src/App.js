import './App.css';
import { Routes, Route } from "react-router-dom";

import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Exchanges, Cryptocurrency, CryptoDetails, News } from './components';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/exchanges">
                <Homepage />
              </Route>
              <Route exact path="/">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrency">
                <Cryptocurrency />
              </Route>
              <Route exact path="/crypto/:coinid">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer">
      </div>
    </div>



  );
}

export default App;
