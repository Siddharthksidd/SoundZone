import React from 'react'
import HeroSlider from '../components/HeroSlider'
import SectionsHead from '../components/SectionsHead'
import FeaturedSlider from '../components/FeaturedSlider'
import TopProducts from '../components/TopProducts'
import Services from '../components/Services'

const home = () => {
  return (
    <main>
      <section id="hero">
        <HeroSlider />
      </section>

      <section id="featured" className="section">
        <div className="container">
          <SectionsHead heading="Featured Products" />
          <FeaturedSlider />
        </div>
      </section>

      <section id="products" className="section">
        <div className="container">
            <SectionsHead heading="Top Products" />
            <TopProducts />
        </div>
      </section>
      
      <Services />

    </main>
  )
}

export default home