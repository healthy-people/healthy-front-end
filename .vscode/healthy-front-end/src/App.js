import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
