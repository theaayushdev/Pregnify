import React from 'react';
import './App.css';


function Mypages() {
  return (
    <nav className="top-nav">
      <a href="#home" className="nav-link"> Home | </a>
      <a href="#profile" className="nav-link"> Profile | </a>
      <a href="#features" className="nav-link"> Features | </a>
    </nav>
  );
}


function App() {
  const tips = [
    "Eat a healthy and balanced diet.",
    "Stay hydrated throughout the day.",
    "Get enough rest and sleep.",
    "Take prenatal vitamins as prescribed by your doctor.",
    "Exercise regularly but avoid strenuous activities.",
  ];

  return (
    <div className="App">
      <h1 className='Pregnify'> Pregnify</h1>

      <header className="App-header">
        <h1>Welcome to Pregnancy </h1>
        <p>Track your pregnancy week by week and get tips for a healthy pregnancy.</p>
        <a
          className="App-link"
          href="https://www.pregnancy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
      <main className="App-main">
        <Mypages/>
        <section className="tracker-section">
          <h2>Week-by-Week Tracker</h2>
          <p>Enter your due date to start tracking your pregnancy progress.</p>
          <input
            type="date"
            className="due-date-input"
            placeholder="Enter your due date"
          />
          <button className="track-button">Start Tracking</button>
        </section>
        <section className="tips-section">
          <h2>Health Tips</h2>
          <ul className="tips-list">
            {tips.map((tip, index) => (
              <li key={index} className="tip-item">
                {tip}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="App-footer">
        <p>© 2025 Pregnancy Tracker | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
