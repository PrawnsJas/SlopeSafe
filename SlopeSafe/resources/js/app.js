import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/index.css';  // Import Tailwind's CSS file here

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl text-blue-600">Hello, Laravel with React and Tailwind!</h1>
    </div>
  );
};

const rootElement = document.getElementById('app');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
