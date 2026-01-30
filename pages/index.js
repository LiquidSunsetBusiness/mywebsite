
export default function Home() {
  return (
    <>
      <header className="header">
        <img src="/images/logo.png" className="logo" />
        <nav>
          <a href="#services">Services</a>
          <a href="https://liquidsunset.ca/businesses-for-sale/">Businesses for Sale</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Liquid Sunset Business Brokers</h1>
        <p>Helping you buy & sell businesses in London, Ontario with clarity and confidence.</p>
        <a className="btn" href="https://liquidsunset.ca/businesses-for-sale/">View Businesses for Sale</a>
      </section>

      <section className="image-grid">
        <img src="/images/businesses for sale london ontario.jpg" />
        <img src="/images/Business-Sales-in-London-Ontario.jpg" />
        <img src="/images/Celebrating-a-high-value-business-close.jpg" />
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="cards">
          <div>
            <h3>Business for Sale Listings</h3>
            <p>Browse verified businesses for sale in London Ontario with full confidentiality.</p>
            <a href="https://liquidsunset.ca/businesses-for-sale/">Explore Listings</a>
          </div>
          <div>
            <h3>Business Valuation</h3>
            <p>Accurate market-based valuation to maximise your business sale outcome.</p>
          </div>
          <div>
            <h3>Buyer & Seller Representation</h3>
            <p>Professional negotiation, marketing and deal structuring support.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Buy or Sell a Business?</h2>
        <a className="btn dark" href="https://liquidsunset.ca/businesses-for-sale/">Get Started Today</a>
      </section>

      <footer id="contact">
        <img src="/images/Liquid-Sunset-Business-Broker-Favicon.png" />
        <p>Liquid Sunset Business Brokers</p>
        <p>London, Ontario, Canada</p>
        <p><strong>Business Hours:</strong><br/>
        Mon–Thu: 9am–6pm<br/>
        Fri: 9am–5pm<br/>
        Sat: 10am–5pm</p>
        <p>© Liquid Sunset Business Brokers</p>
      </footer>
    </>
  )
}
