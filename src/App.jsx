import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <header className="bg-dark text-light text-left p-3">
        <h1>Ben Jaeger-Thomas</h1>
      <Nav />
      </header>
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
