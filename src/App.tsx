import React from 'react';
import './App.css';
import {ProductCard} from "./components/ProductCard/ProductCard";
import {Main} from "./components/Main/Main";

function App() {
  return (
    <div className="App">
        <Main>
          <ProductCard/>
        </Main>
    </div>
  );
}

export default App;
