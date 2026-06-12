import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Visitform from '../components/Visitform';
import Benefits from '../components/Benefits';

export default function Home() {
  return (
    <>

      <Navbar />
      <Hero />
      <Visitform />
      <Benefits />
    </>
  );
}