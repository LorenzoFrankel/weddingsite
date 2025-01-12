import React from 'react';
import CircularText from './components/CircularText';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      />
      
      {/* Content */}
      <main className="relative min-h-screen flex flex-col items-center justify-center p-4">
        <CircularText />
      </main>
    </div>
  );
};

export default App; 