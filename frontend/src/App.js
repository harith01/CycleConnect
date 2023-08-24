import React from 'react';
import BicycleList from './components/BicycleList'; // Import your BicycleList component
import './App.css'; // Import your app's main CSS file

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Cycle Connect</h1>
      </header>
      <main className="app-main">
        <BicycleList /> {/* Render your BicycleList component */}
      </main>
      <footer className="app-footer">
        <p>&copy; 2023 Cycle Connect. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

