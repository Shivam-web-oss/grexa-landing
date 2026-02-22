import React, { useState, useEffect, useRef } from 'react'
import './App.css'

// ─── ICONS ──────────────────────────────────────────────────────────────────

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.856L.057 23.885l6.197-1.424A11.932 11.932 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.8-.53-5.38-1.456l-.385-.228-3.99.916.952-3.893-.25-.4A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M8 5v14l11-7z"/>
  </svg>
)

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
)

// ─── NAVBAR ─────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="/" className="nav-logo">
          <div className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#7c3aed"/>
              <path d="M8 16C8 11.58 11.58 8 16 8C18.21 8 20.21 8.89 21.66 10.34L19.54 12.46C18.63 11.55 17.38 11 16 11C13.24 11 11 13.24 11 16C11 18.76 13.24 21 16 21C18.42 21 20.44 19.32 20.9 17.07H16V14.07H24V16C24 20.42 20.42 24 16 24C11.58 24 8 20.42 8 16Z" fill="white"/>
            </svg>
          </div>
          <span>grexa</span>
        </a>

        <ul className="nav-links">
          <li><a href="#feature-list">How it Works</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>

        <a href="https://api.whatsapp.com/send?phone=918433662884&text=Hi%2C%20Help%20me%20boost%20my%20business%20growth" target="_blank" rel="noreferrer" className="wa-btn nav-cta">
          <WhatsAppIcon size={18} />
          Book Free Demo
        </a>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span/><span/><span/>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#feature-list" onClick={() => setMenuOpen(false)}>How it Works</a>
          <a href="#" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Careers</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="https://api.whatsapp.com/send?phone=918433662884" target="_blank" rel="noreferrer" className="wa-btn" style={{marginTop: 8}}>
            <WhatsAppIcon size={16}/> Book Free Demo
          </a>
        </div>
      )}
    </nav>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────

const heroCards = [
  {
    id: 'gbp',
    label: 'Gets You More Leads from Google',
    badge: 'Google Business Profile',
    badgeIcon: <GoogleIcon />,
    bg: 'linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)',
    img: 'https://storage.googleapis.com/grexa-ai-website-assets/manual-uploads/gbp-agent.webp',
  },
  {
    id: 'lead',
    label: 'Captures, Connects and Converts from leads',
    badge: 'Lead Conversion',
    badgeColor: '#7c3aed',
    bg: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
    img: 'https://storage.googleapis.com/grexa-ai-website-assets/manual-uploads/lead-conversion-agent.webp',
  },
  {
    id: 'chat',
    label: 'Chats With Your Customers 24/7',
    badge: 'WhatsApp Chat',
    badgeColor: '#25D366',
    bg: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
    img: 'https://storage.googleapis.com/grexa-ai-website-assets/manual-uploads/whatsapp-chat-agent.webp',
  },
  {
    id: 'mkt',
    label: 'Increases Repeat Sales & Google Reviews',
    badge: 'WhatsApp Marketing',
    badgeColor: '#25D366',
    bg: 'linear-gradient(135deg, #fffbeb 0%, #fef9c3 100%)',
    img: 'https://storage.googleapis.com/grexa-ai-website-assets/manual-uploads/whatsapp-marketing-agent.webp',
  },
]

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-glow" />
      <div className="container hero-inner">
        <div className="hero-tag">
          <span className="ai-spark">✦</span> Grow Faster with AI
        </div>
        <h1 className="hero-h1">
          Your All-in-One Marketing AI Platform<br/>
          <span className="hero-gradient">that Delivers Real Revenue</span>
        </h1>
        <p className="hero-sub">Trusted by <strong>60,000+</strong> business owners</p>

        <div className="hero-ctas">
          <a href="https://wa.link/dxl3vx" target="_blank" rel="noreferrer" className="wa-btn wa-outline">
            <WhatsAppIcon size={18}/>
            Free AI Google Profile Booster
          </a>
          <a href="https://api.whatsapp.com/send?phone=918433662884&text=Hi%2C%20Help%20me%20boost%20my%20business%20growth" target="_blank" rel="noreferrer" className="wa-btn">
            <WhatsAppIcon size={18}/>
            Book Free Demo
          </a>
        </div>

        <div className="hero-cards">
          {heroCards.map((card, i) => (
            <div key={card.id} className="hero-card" style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
              <div className="hero-card-badge">
                {card.badgeIcon && card.badgeIcon}
                {!card.badgeIcon && card.badgeColor && (
                  <WhatsAppIcon size={14} />
                )}
                <span style={{ color: card.badgeColor || '#4285F4' }}>{card.badge}</span>
                <span className="ai-tag">✦ AI Agent</span>
              </div>
              <div className="hero-card-visual" style={{ background: card.bg }}>
                <img
                  src={card.img}
                  alt={card.label}
                  loading="lazy"
                  onError={e => { e.target.style.opacity = 0 }}
                />
              </div>
              <p className="hero-card-label">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── AGENT OVERVIEW STRIP ────────────────────────────────────────────────────

function AgentOverview() {
  return (
    <section className="agent-overview" id="feature-list">
      <div className="container">
        <h2 className="section-h2 center">Team of AI Agents that work for your<br/>Business Growth</h2>
        <div className="agent-overview-cta center-flex" style={{marginTop: 24}}>
          <a href="https://api.whatsapp.com/send?phone=918433662884" target="_blank" rel="noreferrer" className="wa-btn">
            <WhatsAppIcon size={18}/> Book Free Demo
          </a>
        </div>
        <div className="agent-mockup">
          <div className="mockup-card">
            <div className="mockup-agent-list">
              {[
                { name: 'Google Business Profile AI', icon: <GoogleIcon/>, color: '#4285F4', desc: 'Gets you more leads from Google' },
                { name: 'Lead Conversion AI', icon: <span style={{fontSize:16}}>🎯</span>, color: '#7c3aed', desc: 'Captures & converts leads' },
                { name: 'WhatsApp Chat AI', icon: <WhatsAppIcon size={16}/>, color: '#25D366', desc: 'Chats with customers 24/7' },
                { name: 'WhatsApp Marketing AI', icon: <WhatsAppIcon size={16}/>, color: '#25D366', desc: 'Drives repeat sales & reviews' },
              ].map((a, i) => (
                <div className="mockup-agent" key={i}>
                  <div className="mockup-agent-icon" style={{ color: a.color }}>{a.icon}</div>
                  <div>
                    <div className="mockup-agent-name">{a.name}</div>
                    <div className="mockup-agent-desc">{a.desc}</div>
                  </div>
                  <div className="mockup-agent-status">
                    <span className="status-dot" />
                    Active
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── BUSINESS TYPES ──────────────────────────────────────────────────────────

const businesses = [
  { name: 'Gym & Fitness Centres', emoji: '🏋️', img: 'https://grexa.ai/api/media/file/Business%20Type%2021-2.webp?2025-06-28T09:55:47.182Z' },
  { name: 'Doctors & Health Clinics', emoji: '🏥', img: 'https://grexa.ai/api/media/file/Business%20Type%2022.webp?2025-06-28T09:56:32.161Z' },
  { name: 'Bakers & Cake Shops', emoji: '🎂', img: 'https://grexa.ai/api/media/file/Business%20Type%2023.webp?2025-06-28T09:56:39.831Z' },
  { name: 'Salon Owners', emoji: '💇', img: 'https://grexa.ai/api/media/file/Business%20Type%2024.webp?2025-06-28T09:56:54.807Z' },
  { name: 'Restaurants & Bars', emoji: '🍽️', img: 'https://grexa.ai/api/media/file/Business%20Type%2025.webp?2025-06-28T09:57:06.424Z' },
  { name: 'Pest Control Businesses', emoji: '🐛', img: 'https://grexa.ai/api/media/file/Business%20Type%2026.webp?2025-06-28T09:57:21.647Z' },
  { name: 'Car Garages & Mechanics', emoji: '🔧', img: 'https://grexa.ai/api/media/file/Business%20Type%2027.webp?2025-06-28T09:57:31.991Z' },
  { name: 'Tours & Travels', emoji: '✈️', img: 'https://grexa.ai/api/media/file/Business%20Type%2028.webp?2025-06-28T09:57:42.371Z' },
  { name: 'Yoga & Wellness', emoji: '🧘', img: 'https://grexa.ai/api/media/file/Business%20Type%2029.webp?2025-06-28T09:57:52.154Z' },
  { name: 'Handyman Services', emoji: '🔨', img: 'https://grexa.ai/api/media/file/Business%20Type%2030.webp?2025-06-28T09:58:03.510Z' },
]

function BusinessTypes() {
  return (
    <section className="biz-section">
      <div className="container">
        <h2 className="section-h2 center">Built for Small Business Owners</h2>
        <p className="section-sub center">You focus on your craft and leave the hassle of growth marketing to Grexa AI</p>

        <div className="biz-grid">
          {businesses.map((b, i) => (
            <a key={i} href="#" className="biz-card">
              <div className="biz-img-wrap">
                <img src={b.img} alt={b.name} loading="lazy" onError={e => { e.target.parentNode.innerHTML = `<span class="biz-emoji">${b.emoji}</span>` }} />
              </div>
              <span className="biz-name">{b.name}</span>
            </a>
          ))}
        </div>

        <p className="biz-more">And many more businesses like yours</p>

        <div className="center-flex" style={{ marginTop: 32 }}>
          <a href="https://api.whatsapp.com/send?phone=918433662884" target="_blank" rel="noreferrer" className="wa-btn">
            <WhatsAppIcon size={18}/> Book Free Demo
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── AI TEAM DETAIL ───────────────────────────────────────────────────────────

const aiAgents = [
  {
    id: 'gbp-agent',
    color: '#4285F4',
    badgeBg: '#EFF6FF',
    badge: 'Google Business Profile',
    badgeIcon: <GoogleIcon />,
    title: 'AI Agent to Get You More Leads from Google',
    img: 'https://storage.googleapis.com/grexa-ai-website-assets/manual-uploads/gbp-agent.webp',
    features: [
      { icon: '🔍', text: 'Finds the best SEO keywords for your business' },
      { icon: '✏️', text: 'Rewrites SEO-optimised GBP content and services' },
      { icon: '📅', text: 'Auto-publishes SEO-powered GBP posts' },
      { icon: '⭐', text: 'Crafts SEO-rich replies to all Google reviews' },
      { icon: '💬', text: 'Generates authentic Google reviews from your paid customers' },
    ],
  },
  {
    id: 'lead-conversion-agent',
    color: '#7c3aed',
    badgeBg: '#F5F3FF',
    badge: 'Lead Conversion',
    badgeIcon: <span style={{ fontSize: 16 }}>🎯</span>,
    title: 'AI Agent to Capture, Connect & Convert more Leads',
    img: 'https://storage.googleapis.com/grexa-ai-website-assets/manual-uploads/lead-conversion-agent.webp',
    features: [
      { icon: '📋', text: "Collects every lead's details and interests" },
      { icon: '⚡', text: 'Instantly connects with all leads on WhatsApp' },
      { icon: '🤝', text: 'Shares product info & testimonials to build trust' },
      { icon: '📊', text: 'Analyses chats to identify potential new customers' },
    ],
  },
  {
    id: 'whatsapp-chat-agent',
    color: '#25D366',
    badgeBg: '#F0FDF4',
    badge: 'WhatsApp Chat',
    badgeIcon: <WhatsAppIcon size={16} />,
    title: 'Your Personal Assistant Who Chats With Your Customers 24/7',
    img: 'https://storage.googleapis.com/grexa-ai-website-assets/manual-uploads/whatsapp-chat-agent.webp',
    features: [
      { icon: '🧠', text: 'Exclusively trained for your business' },
      { icon: '♾️', text: 'Can chat with any number of customers at a time' },
      { icon: '📚', text: 'Know everything about your business' },
      { icon: '💰', text: 'Knows everything about your offerings, price and testimonials' },
      { icon: '🗃️', text: "Remembers every customer's purchase history" },
    ],
  },
  {
    id: 'promotional-marketing-agent',
    color: '#f59e0b',
    badgeBg: '#FFFBEB',
    badge: 'WhatsApp Marketing',
    badgeIcon: <WhatsAppIcon size={16} />,
    title: 'AI Agent to Increase Repeat Sales & Google Reviews',
    img: 'https://storage.googleapis.com/grexa-ai-website-assets/manual-uploads/whatsapp-marketing-agent.webp',
    features: [
      { icon: '🎨', text: 'Creates Offers, Visuals & Messaging' },
      { icon: '📈', text: 'Analyses purchase data to pick the right customers' },
      { icon: '👀', text: 'Spots repeat-purchase opportunities from conversations' },
      { icon: '💬', text: 'Answers all promotion-related customer queries' },
      { icon: '📲', text: 'Sends offers & reminders directly on WhatsApp' },
    ],
  },
]

function AITeam() {
  return (
    <section className="ai-team-section">
      <div className="container">
        <h2 className="section-h2 center">Meet Your Digital Marketing AI Team</h2>

        <div className="ai-agents-list">
          {aiAgents.map((agent, i) => (
            <div key={agent.id} id={agent.id} className={`ai-agent-row ${i % 2 === 1 ? 'reverse' : ''}`}>
              <div className="ai-agent-img-wrap">
                <img
                  src={agent.img}
                  alt={agent.title}
                  loading="lazy"
                  className="ai-agent-img"
                  onError={e => { e.target.style.display = 'none' }}
                />
                <div className="ai-agent-img-glow" style={{ background: agent.color + '22' }} />
              </div>

              <div className="ai-agent-info">
                <div className="ai-agent-badge" style={{ background: agent.badgeBg, color: agent.color, borderColor: agent.color + '40' }}>
                  {agent.badgeIcon}
                  <span>{agent.badge}</span>
                  <span className="ai-tag" style={{ background: agent.color + '18', color: agent.color }}>✦ AI Agent</span>
                </div>

                <h3 className="ai-agent-title">{agent.title}</h3>

                <a href="https://api.whatsapp.com/send?phone=918433662884" target="_blank" rel="noreferrer" className="wa-btn" style={{ width: 'fit-content', marginBottom: 20 }}>
                  <WhatsAppIcon size={16}/> Book Free Demo
                </a>

                <ul className="ai-features">
                  {agent.features.map((f, j) => (
                    <li key={j} className="ai-feature-item">
                      <span className="feature-icon">{f.icon}</span>
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────

const testimonials = [
  {
    name: 'Dr Thakur',
    role: 'Pediatric Dentist',
    text: 'From New Clinic to Profitable Practice — Grexa AI completely transformed how we attract and retain patients.',
    img: 'https://grexa.ai/api/media/file/dr%20thakur.webp?2025-10-30T11:28:05.111Z',
    stars: 5,
  },
  {
    name: 'Peacock Salon',
    role: '18-Year-Old Salon Brand',
    text: 'Grexa AI boosted our digital presence and brought in a whole new wave of customers we never reached before.',
    img: 'https://grexa.ai/api/media/file/Screenshot%202025-10-09%20at%2015.45.49.webp?2025-10-30T11:00:40.643Z',
    stars: 5,
  },
  {
    name: 'Antipest',
    role: 'Pest Control Business',
    text: 'The Transformation of Antipest with Grexa AI: From Small Business to Market Leader.',
    img: 'https://grexa.ai/api/media/file/antipest.webp?2025-10-30T10:59:22.566Z',
    stars: 5,
  },
  {
    name: 'ISC',
    role: 'Indian School of Calisthenics',
    text: 'Ranked No 1 on Google — ISC Success Story with Grexa AI. Incredible results in just months.',
    img: 'https://grexa.ai/api/media/file/ISC.webp?2025-10-30T11:01:44.331Z',
    stars: 5,
  },
  {
    name: 'Grexa AI',
    role: 'Founding Story',
    text: 'Built from the ground up to solve real marketing problems for local businesses across India and beyond.',
    img: 'https://grexa.ai/api/media/file/grexa%20ai.webp?2025-10-30T11:27:08.741Z',
    stars: 5,
  },
]

function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-h2 center">Voices of Real Business Owners</h2>

        <div className="testimonial-featured">
          <div className="testimonial-img-wrap">
            <img
              src={testimonials[active].img}
              alt={testimonials[active].name}
              className="testimonial-img"
              onError={e => { e.target.style.display = 'none' }}
            />
            <div className="play-btn">
              <PlayIcon />
            </div>
          </div>
          <div className="testimonial-content">
            <div className="stars">
              {[...Array(testimonials[active].stars)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="testimonial-text">"{testimonials[active].text}"</p>
            <div className="testimonial-author">
              <strong>{testimonials[active].name}</strong>
              <span>{testimonials[active].role}</span>
            </div>
          </div>
        </div>

        <div className="testimonial-thumbs">
          {testimonials.map((t, i) => (
            <button key={i} className={`thumb-btn ${active === i ? 'active' : ''}`} onClick={() => setActive(i)}>
              <img src={t.img} alt={t.name} onError={e => { e.target.style.display = 'none' }} />
              <div className="thumb-play"><PlayIcon /></div>
              <span className="thumb-name">{t.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── STATS ───────────────────────────────────────────────────────────────────

const stats = [
  { value: '60,000+', label: 'Business Owners Trusted' },
  { value: '4.8★', label: 'Average Rating' },
  { value: '3x', label: 'More Leads on Average' },
  { value: '24/7', label: 'AI Working for You' },
]

function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PRICING CTA ─────────────────────────────────────────────────────────────

const pricingPlans = [
  {
    name: 'Starter',
    price: '₹2,999',
    period: '/month',
    desc: 'Perfect for getting started with AI marketing',
    features: ['Google Business Profile AI', 'Basic Lead Capture', 'WhatsApp Chat AI (500 msgs/mo)', 'Email Support'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '₹5,999',
    period: '/month',
    desc: 'Everything you need to grow fast',
    features: ['All Starter features', 'Lead Conversion AI', 'WhatsApp Marketing AI', 'Unlimited WhatsApp Chats', 'Priority Support', 'Analytics Dashboard'],
    cta: 'Start Growing',
    popular: true,
  },
  {
    name: 'Scale',
    price: '₹9,999',
    period: '/month',
    desc: 'For businesses ready to dominate',
    features: ['All Growth features', 'Custom AI Training', 'Dedicated Account Manager', 'Multi-location Support', 'API Access', 'White-glove Onboarding'],
    cta: 'Scale Now',
    popular: false,
  },
]

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-tag" style={{ display: 'block', textAlign: 'center', marginBottom: 16 }}>Simple Pricing</div>
        <h2 className="section-h2 center">One Simple Pricing for All AI Agents</h2>
        <p className="section-sub center">No hidden fees. Cancel anytime. Start growing today.</p>

        <div className="pricing-grid">
          {pricingPlans.map((plan, i) => (
            <div key={i} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">
                {plan.price}<span>{plan.period}</span>
              </div>
              <p className="plan-desc">{plan.desc}</p>
              <ul className="plan-features">
                {plan.features.map((f, j) => (
                  <li key={j}><CheckIcon />{f}</li>
                ))}
              </ul>
              <a href="https://api.whatsapp.com/send?phone=918433662884" target="_blank" rel="noreferrer"
                className={`plan-cta ${plan.popular ? 'wa-btn' : 'plan-cta-outline'}`}>
                {plan.popular && <WhatsAppIcon size={16}/>}
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FINAL CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="final-cta-box">
          <div className="final-cta-glow" />
          <h2 className="final-h2">Ready to Grow Your Business with AI?</h2>
          <p className="final-sub">Join 60,000+ business owners who trust Grexa AI to drive real revenue. Start for free today.</p>
          <div className="final-btns">
            <a href="https://wa.link/dxl3vx" target="_blank" rel="noreferrer" className="wa-btn wa-outline-white">
              <WhatsAppIcon size={18}/> Free AI Google Profile Booster
            </a>
            <a href="https://api.whatsapp.com/send?phone=918433662884" target="_blank" rel="noreferrer" className="wa-btn">
              <WhatsAppIcon size={18}/> Book Free Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#7c3aed"/>
                <path d="M8 16C8 11.58 11.58 8 16 8C18.21 8 20.21 8.89 21.66 10.34L19.54 12.46C18.63 11.55 17.38 11 16 11C13.24 11 11 13.24 11 16C11 18.76 13.24 21 16 21C18.42 21 20.44 19.32 20.9 17.07H16V14.07H24V16C24 20.42 20.42 24 16 24C11.58 24 8 20.42 8 16Z" fill="white"/>
              </svg>
              <span>grexa</span>
            </div>
            <p className="footer-tagline">Your All-in-One Marketing AI Platform for Local Business Growth</p>
            <a href="https://api.whatsapp.com/send?phone=918433662884" target="_blank" rel="noreferrer" className="wa-btn" style={{ marginTop: 16, width: 'fit-content' }}>
              <WhatsAppIcon size={16}/> Book Free Demo
            </a>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Product</h4>
              <a href="#feature-list">How it Works</a>
              <a href="#pricing">Pricing</a>
              <a href="#">Features</a>
            </div>
            <div className="footer-col">
              <h4>AI Agents</h4>
              <a href="#gbp-agent">Google Business Profile AI</a>
              <a href="#lead-conversion-agent">Lead Conversion AI</a>
              <a href="#whatsapp-chat-agent">WhatsApp Chat AI</a>
              <a href="#promotional-marketing-agent">WhatsApp Marketing AI</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Businesses</h4>
              <a href="#">Gym & Fitness</a>
              <a href="#">Doctors & Clinics</a>
              <a href="#">Salon Owners</a>
              <a href="#">Restaurants</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Grexa AI. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AgentOverview />
        <BusinessTypes />
        <AITeam />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
