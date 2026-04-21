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
      className="fixed inset-0 z-[-50] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      style={{
        maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 600px)`,
        WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 600px)`
      }}
    />
  );
}

export default GridBackground;
