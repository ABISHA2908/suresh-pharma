
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating molecules */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-blue-200/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-200/30 rounded-full animate-float-delay-1"></div>
      <div className="absolute top-60 left-1/4 w-10 h-10 bg-blue-300/20 rounded-full animate-float-delay-2"></div>
      <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-cyan-300/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-1/2 w-7 h-7 bg-blue-200/25 rounded-full animate-float-delay-1"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  );
};

export default AnimatedBackground;
