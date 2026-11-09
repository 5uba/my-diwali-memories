import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">🪔 8 November 2026</p>
          <h1 className="hero-title">My Diwali Memories</h1>
          <p className="hero-subtitle">
            A day filled with happiness, family, laughter and little moments.
          </p>
          <button
            className="hero-btn"
            onClick={() => navigate('/my-day')}
          >
            Explore My Day →
          </button>
        </div>
      </section>

      {/* Date strip */}
      <div className="date-strip">
        <span className="date-strip-icon">📅</span>
        <span className="date-strip-text">Diwali&nbsp;&nbsp;·&nbsp;&nbsp;Sunday, 8 November 2026</span>
      </div>

      {/* Intro Section */}
      <section className="home-intro container">
        <div className="intro-card">
          <span className="intro-icon">📖</span>
          <h2>About This Journal</h2>
          <p>
            This is a personal record of how I spent Diwali on 8 November 2026 — from the
            midnight movie sessions with my cousins, to the morning oil bath ritual, afternoon
            card games, and the final burst of crackers under a dark sky. Every entry is exactly
            as it happened, hour by hour.
          </p>
          <p>
            No plan was perfect. Everything was real. And every moment was ours.
          </p>
          <p className="intro-closing">
            A beautiful Diwali filled with family, laughter, movies, delicious food and
            unforgettable memories.
          </p>
        </div>

        <div className="intro-highlights">
          <div className="highlight-item">
            <span>🎬</span>
            <p>Midnight movies</p>
          </div>
          <div className="highlight-item">
            <span>🃏</span>
            <p>Family card games</p>
          </div>
          <div className="highlight-item">
            <span>🎆</span>
            <p>Crackers &amp; light</p>
          </div>
          <div className="highlight-item">
            <span>🍱</span>
            <p>Homemade food</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
