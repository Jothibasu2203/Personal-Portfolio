import React from 'react';
import { Omnitrix } from './components/Omnitrix';
import { WelcomeScreen } from './components/WelcomeScreen';

export default function App() {
  return (
    <main className="min-h-screen bg-black">
      <WelcomeScreen />
      <Omnitrix />
    </main>
  );
}
