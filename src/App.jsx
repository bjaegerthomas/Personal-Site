import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <header className="p-3" id="hero-banner">
      <h1>Ben Jaeger-Thomas</h1>
      <Nav />
    </header>
    <body>
      <main className="mx-3">
        <Outlet />
      </main>
      <footer>
        <section className="footer-icons">
          <a href="https://github.com/bjaegerthomas" target="_blank" rel="noopener noreferrer">
            <img src="src/images/github.png" alt="GitHub" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/ben-jaeger-thomas-201071b0/" target="_blank" rel="noopener noreferrer">
            <img src="src/images/linkedin.png" alt="LinkedIn" className="icon" />
          </a>
          <a href="https://www.instagram.com/jaegerthomas/" target="_blank" rel="noopener noreferrer">
            <img src="src/images/instagram.png" alt="Instagram" className="icon" />
          </a>
        </section>
      </footer>
    </body>
    </>
  );
}

export default App;
