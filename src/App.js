import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Education from './Components/Education'
import ExperienceSection from './Components/ExperienceSection'
import ServicesFramer from './Components/ServicesFramer'
import SkillsClients from './Components/SkillsClients'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div>
      <Home />

      <section id="about">
        <About />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="services">
        <ServicesFramer />
      </section>

      <section id="skills">
        <SkillsClients />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  )
}
