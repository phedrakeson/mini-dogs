import './App.css';
import { useDispatch } from 'react-redux';
import React from 'react';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';

function App() {
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <Header />
      <Content />
    </div>
  );
}

export default App;