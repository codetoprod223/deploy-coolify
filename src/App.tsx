import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const observerRefs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.15 }
    )

    Object.values(observerRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const setRef = (id: string) => (el: HTMLElement | null) => {
    observerRefs.current[id] = el
  }

  return (
    <div className="app">
      {/* ===== NAVBAR ===== */}
      <nav className="navbar" id="navbar">
        <div className="navbar-logo">
          <div className="navbar-logo-icon">JB</div>
          <span>Joseph Briguel</span>
        </div>
        <div className="navbar-right">
          <a href="#contact" className="navbar-link">Recruter gratuitement</a>
          <button className="btn-menu">
            {/* <span className="btn-menu-dot"></span> */}
            Menu
          </button>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="hero">
        <div className="animate-fade-up">
          <div className="hero-badge">
            {/* <span className="hero-badge-dot"></span> */}
            Disponible pour travailler
          </div>
        </div>

        <h1 className="hero-title animate-fade-up delay-1">
          Designer web créant une <strong>présence en ligne percutante</strong>
        </h1>

        <p className="hero-subtitle animate-fade-up delay-2">
          Des sites web magnifiquement conçus et faciles à utiliser qui vous aident
          à vous démarquer et à vous connecter avec votre audience.
        </p>

        <div className="hero-buttons animate-fade-up delay-3">
          <a href="#contact" className="btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Discutons
          </a>
          <a href="mailto:contact@danielhart.fr" className="btn-secondary">
            M'envoyer un email
          </a>
        </div>

        <div className="hero-gallery animate-scale-in delay-4">
          <div className="gallery-side gallery-left-1">
            <img src="/images/project-1.png" alt="Projet portfolio sombre" />
          </div>
          <div className="gallery-side gallery-left-2">
            <img src="/images/project-2.png" alt="Projet design vert" />
          </div>
          <div className="gallery-center">
            <img src="/images/hero-portrait.png" alt="Portrait de Daniel Hart" />
          </div>
          <div className="gallery-side gallery-right-1">
            <img src="/images/project-3.png" alt="Projet portfolio créatif" />
          </div>
          <div className="gallery-side gallery-right-2">
            <img src="/images/project-4.png" alt="Projet application SaaS" />
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section
        className="about-section"
        id="about"
        ref={setRef('about')}
      >
        <div className={`about-grid ${isVisible['about'] ? 'animate-fade-up' : ''}`}>
          {/* Left - About Card */}
          <div className="about-left">
            <div className="about-card">
              <div className="about-card-bg">
                <img src="/images/project-3.png" alt="" />
              </div>
              <div>
                <h3>Je suis Daniel Hart</h3>
                <p>
                  Un designer web passionné par la création d'expériences numériques
                  engageantes pour les startups, les PME et les marques. Fort d'une
                  solide expérience en design et développement front-end, je suis
                  déterminé à créer des solutions innovantes et visuellement captivantes
                  pour chaque projet.
                </p>
              </div>

              <div className="about-card-images">
                <div className="about-card-thumb">
                  <img src="/images/project-1.png" alt="" />
                </div>
                <div className="about-card-thumb">
                  <img src="/images/project-2.png" alt="" />
                </div>
              </div>

              <a href="#about" className="about-card-link">
                /À propos
              </a>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">8+</div>
              <div className="stat-label">années d'expérience</div>
              <div className="stat-description">
                Expertise en design de sites web pour des marques,
                des boutiques en ligne et des plateformes d'entreprise.
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">120+</div>
              <div className="stat-label">projets</div>
              <div className="stat-description">
                Sites web livrés avec succès pour des clients allant
                des startups aux grandes entreprises.
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">35+</div>
              <div className="stat-label">clients satisfaits</div>
              <div className="stat-description">
                De nombreux clients reviennent pour des collaborations
                continues et des projets de design récurrents.
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99%</div>
              <div className="stat-label">satisfaction</div>
              <div className="stat-description">
                Retours clients exceptionnels collectés tout au long
                des dernières années de collaboration.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section
        className="projects-section"
        id="projects"
        ref={setRef('projects')}
      >
        <div className={isVisible['projects'] ? 'animate-fade-up' : ''}>
          <div className="section-badge">
            En cours de réalisation
          </div>
          <h2>Projets sur lesquels je travaille en ce moment</h2>
        </div>

        <div className={`projects-grid ${isVisible['projects'] ? 'animate-fade-up delay-2' : ''}`}>
          <div className="project-card">
            <div className="project-card-image">
              <img src="/images/project-1.png" alt="Luxina - Template Studio" />
            </div>
            <div className="project-card-content">
              <span className="project-card-tag">• En développement</span>
              <h3 className="project-card-title">Luxina - Template Studio Premium</h3>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-image">
              <img src="/images/project-4.png" alt="NexFlow - Plateforme SaaS" />
            </div>
            <div className="project-card-content">
              <span className="project-card-tag">• Bientôt disponible</span>
              <h3 className="project-card-title">NexFlow - Plateforme d'orchestration</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <h3 className="footer-title">Travaillons ensemble</h3>
          <p className="footer-text">
            Vous avez un projet en tête ? Discutons de la façon dont je peux
            vous aider à créer une présence en ligne exceptionnelle.
          </p>
          <div className="footer-links">
            <a href="mailto:contact@danielhart.fr" className="footer-link">Email</a>
            <a href="#" className="footer-link">LinkedIn</a>
            <a href="#" className="footer-link">Dribbble</a>
            <a href="#" className="footer-link">Twitter</a>
          </div>
          <div className="footer-bottom">
            © 2026 Joseph Briguel. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
