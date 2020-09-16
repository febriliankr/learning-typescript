import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './component/TextField';

function App() {
  return (
    <div className="App">
      <TextField text='hello' person={{
        firstName: 'Febrilian',
        lastName: 'Kristiawan',
      }} />
    </div>
  );
}

export default App;
