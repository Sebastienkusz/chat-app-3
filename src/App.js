import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div>
        <Contact 
          name = 'Sally Diaz'
          avatar = 'https://randomuser.me/api/portraits/women/93.jpg'
          online
        />
      </div>
      <div>
        <Contact 
          name = 'Delores Martin'
          avatar = 'https://randomuser.me/api/portraits/women/57.jpg'
          online
        />
      </div>      
      <div>
        <Contact 
          name = 'Vera Cole'
          avatar = 'https://randomuser.me/api/portraits/women/29.jpg'
          online
        />
      </div>
    </div>
  );
}

export default App;
