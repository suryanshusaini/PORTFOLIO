import React, { useState, useEffect } from 'react';

function GridBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[-50] pointer-events-none bg-[radial-gradient(circle,#80808033_1px,transparent_1px)] bg-[size:32px_32px]"
      style={{
        maskImage: `radial-gradient(ellipse 900px 700px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 30%, transparent 80%)`,
        WebkitMaskImage: `radial-gradient(ellipse 900px 700px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 30%, transparent 80%)`
      }}
    />
  );
}

export default GridBackground;
