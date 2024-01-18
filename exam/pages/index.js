import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to ExamApp</h1>
        <p>Your platform for seamless exam experiences</p>
      </header>
      <main className="App-main">
        <section>
          <h2>Features</h2>
          <ul>
            <li>Effortless exam creation and management</li>
            <li>Secure and reliable exam delivery</li>
            <li>Real-time monitoring and analytics</li>
            <li>User-friendly interface for both instructors and students</li>
          </ul>
        </section>
        <section>
          <h2>Get Started</h2>
          <p>Join ExamApp today to revolutionize your exam processes. Experience the power of technology in education.</p>
          <button className="cta-button">Sign Up Now</button>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 ExamApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
