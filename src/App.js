import React from 'react';
import QuoteCard from './components/QuoteCard';
import QuoteForm from './components/QuoteForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <QuoteForm />

      <QuoteCard/>

    </div>
  );
}

export default App;
