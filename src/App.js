
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          Petals
        </a>

        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/cakes">Our Cakes</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <a href="/cakes" className="navbar-button">
          Order a Cake
        </a>
      </nav>

      <main className="hero">
        <p className="hero-subtitle">MADE WITH LOVE</p>
        <h1>A little sweetness goes a long way.</h1>
        <p>
          Beautiful, handcrafted cakes for life's sweetest moments.
        </p>
        <a href="/cakes" className="hero-button">
          Explore Our Cakes
        </a>
      </main>
    </div>
  );
}

export default App;
