import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* Interactive Flashlight Glow */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'fixed',
          inset: 0,
          zIndex: 30,
          transition: 'background 0.3s ease',
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Hero />
          <Experience />
          <Skills />
        </main>
      </div>
    </div>
  );
}

export default App;
