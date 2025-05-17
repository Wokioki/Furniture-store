import React from 'react';
import Footer from '../Home/Footer';
import AboutHead from './AboutHead';
import Features from '../Home/Features';
import AboutVideo from './AboutVideo';
import AboutCharacters from './AboutCharacters';
import './aboutUs.css';

export default function AboutUs({ user, setUser }) {
  return (
    <>
        <AboutHead user={user} setUser={setUser}/>
      <main className="about-page">
        <Features />
        <AboutVideo />
        <AboutCharacters />
      </main>
        <Footer />
    </>
  );
}