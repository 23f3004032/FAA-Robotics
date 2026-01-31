<template>
  <div class="student-zone-landing">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="particles">
          <div v-for="i in 30" :key="i" class="particle" :style="getParticleStyle(i)"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <h1 class="main-title">
          <span class="title-line">STUDENT</span>
          <span class="title-line">ZONE</span>
        </h1>
        <p class="hero-tagline">Your Gateway to Innovation & Excellence</p>
        <div class="scroll-indicator">
          <i class="fas fa-chevron-down"></i>
          <span>Explore Below</span>
        </div>
      </div>
    </section>

    <!-- Navigation Cards -->
    <section class="navigation-section">
      <div class="navigation-container">
        <div class="section-intro">
          <h2 class="section-title">Choose Your Path</h2>
          <p class="section-description">Dive into learning or test your skills in competitions</p>
        </div>

        <div class="cards-grid">
          <!-- Card 1: Academy & Hall of Fame -->
          <router-link 
            to="/student-zone/academy" 
            class="nav-card academy-card"
            @mouseenter="hoveredCard = 'academy'"
            @mouseleave="hoveredCard = null"
          >
            <div class="card-background">
              <div class="gradient-overlay"></div>
              <div class="pattern-overlay"></div>
            </div>

            <div class="card-content">
              <div class="card-icon-wrapper">
                <div class="icon-glow"></div>
                <i class="fas fa-graduation-cap card-icon"></i>
              </div>

              <h3 class="card-title">The Academy & Hall of Fame</h3>
              <p class="card-subtitle">FREE Learning Programs</p>

              <div class="card-features" :class="{ expanded: hoveredCard === 'academy' }">
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>PRERANA - Build Your Own Skill</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>ADHARVANA - Master Arduino & Sensors</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>SADHANA - Python & App Development</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>WHAT IF?? - Innovation Track</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>KOTILYA - For Graduates</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>SPANDANA - For Teachers</span>
                </div>
                <div class="feature-divider"></div>
                <div class="feature-item highlight">
                  <i class="fas fa-star"></i>
                  <span>Student Hall of Fame Gallery</span>
                </div>
                <div class="feature-item highlight">
                  <i class="fas fa-video"></i>
                  <span>Video Learning Sessions</span>
                </div>
              </div>

              <div class="card-cta">
                <span>Explore Academy</span>
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>

            <div class="card-badge">
              <i class="fas fa-gift"></i>
              <span>100% FREE</span>
            </div>
          </router-link>

          <!-- Card 2: Chathurvidha Competition -->
          <router-link 
            to="/student-zone/chathurvidha" 
            class="nav-card competition-card"
            @mouseenter="hoveredCard = 'competition'"
            @mouseleave="hoveredCard = null"
          >
            <div class="card-background">
              <div class="gradient-overlay"></div>
              <div class="pattern-overlay"></div>
            </div>

            <div class="card-content">
              <div class="card-icon-wrapper">
                <div class="icon-glow"></div>
                <i class="fas fa-trophy card-icon"></i>
              </div>

              <h3 class="card-title">Chathurvidha Competition</h3>
              <p class="card-subtitle">The Four-Fold Innovation Challenge</p>

              <div class="card-features" :class="{ expanded: hoveredCard === 'competition' }">
                <div class="feature-item">
                  <i class="fas fa-robot"></i>
                  <span>STEM Innovator - Working Models & Ideas</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-palette"></i>
                  <span>Concept-Based Drawing - Visualize Future</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-brain"></i>
                  <span>Tech & Innovation Quiz - Test Knowledge</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-globe-americas"></i>
                  <span>Voice for the Planet - Create Impact</span>
                </div>
                <div class="feature-divider"></div>
                <div class="feature-item highlight">
                  <i class="fas fa-trophy"></i>
                  <span>Cash Prizes & Trophies</span>
                </div>
                <div class="feature-item highlight">
                  <i class="fas fa-certificate"></i>
                  <span>Certificates for All Participants</span>
                </div>
                <div class="feature-item highlight">
                  <i class="fas fa-medal"></i>
                  <span>Special Mentor Awards</span>
                </div>
              </div>

              <div class="card-cta">
                <span>Enter Competition</span>
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>

            <div class="card-badge competition-badge">
              <i class="fas fa-fire"></i>
              <span>OPEN NOW</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from '../components/Footer.vue'

const hoveredCard = ref(null)

const getParticleStyle = (index) => {
  const size = Math.random() * 4 + 2
  const left = Math.random() * 100
  const animationDelay = Math.random() * 5
  const animationDuration = Math.random() * 10 + 10
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${animationDelay}s`,
    animationDuration: `${animationDuration}s`
  }
}
</script>

<style scoped>
/* ================================
   GLOBAL STYLES
   ================================ */
.student-zone-landing {
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%);
  min-height: 100vh;
  color: #ffffff;
  overflow-x: hidden;
}

/* ================================
   HERO SECTION
   ================================ */
.hero-section {
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 40%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 70% 60%, rgba(118, 75, 162, 0.15) 0%, transparent 50%);
}

.particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: float-up linear infinite;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

@keyframes float-up {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) scale(1);
    opacity: 0;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
}

.main-title {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title-line {
  font-size: 6rem;
  font-weight: 900;
  letter-spacing: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientMove 5s ease-in-out infinite, titleFloat 3s ease-in-out infinite;
  text-shadow: 0 0 40px rgba(102, 126, 234, 0.3);
}

.title-line:nth-child(2) {
  animation-delay: 0.2s;
}

@keyframes gradientMove {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes titleFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hero-tagline {
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 2rem;
  letter-spacing: 2px;
  font-weight: 300;
}

.scroll-indicator {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: bounce 2s ease-in-out infinite;
}

.scroll-indicator i {
  font-size: 2rem;
  color: #667eea;
}

.scroll-indicator span {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 2px;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* ================================
   NAVIGATION SECTION
   ================================ */
.navigation-section {
  padding: 6rem 2rem;
  position: relative;
}

.navigation-container {
  max-width: 1600px;
  margin: 0 auto;
}

.section-intro {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1.3rem;
  color: #9ca3af;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}

.nav-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(102, 126, 234, 0.2);
  border-radius: 30px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
  display: block;
  min-height: 500px;
}

.nav-card:hover {
  transform: translateY(-15px) scale(1.02);
  border-color: #667eea;
  box-shadow: 0 30px 80px rgba(102, 126, 234, 0.4);
}

.academy-card:hover {
  border-color: #667eea;
  box-shadow: 0 30px 80px rgba(102, 126, 234, 0.5);
}

.competition-card:hover {
  border-color: #fbbf24;
  box-shadow: 0 30px 80px rgba(251, 191, 36, 0.5);
}

.card-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  transition: opacity 0.5s ease;
}

.academy-card .gradient-overlay {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.competition-card .gradient-overlay {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
}

.nav-card:hover .gradient-overlay {
  opacity: 0.2;
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: patternMove 20s linear infinite;
}

@keyframes patternMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, 40px); }
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-icon-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: iconPulse 2s ease-in-out infinite;
}

.academy-card .icon-glow {
  background: radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, transparent 70%);
}

.competition-card .icon-glow {
  background: radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%);
}

@keyframes iconPulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 1; }
}

.card-icon {
  font-size: 4rem;
  z-index: 2;
  transition: all 0.5s ease;
}

.academy-card .card-icon {
  color: #667eea;
}

.competition-card .card-icon {
  color: #fbbf24;
}

.nav-card:hover .card-icon {
  transform: scale(1.2) rotate(10deg);
}

.card-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  line-height: 1.3;
}

.card-subtitle {
  font-size: 1.1rem;
  text-align: center;
  color: #9ca3af;
  margin-bottom: 2rem;
  font-style: italic;
}

.card-features {
  flex: 1;
  margin-bottom: 2rem;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card-features.expanded {
  max-height: 600px;
  opacity: 1;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  transition: all 0.3s ease;
  transform: translateX(-20px);
  opacity: 0;
}

.card-features.expanded .feature-item {
  transform: translateX(0);
  opacity: 1;
}

.card-features.expanded .feature-item:nth-child(1) { transition-delay: 0.1s; }
.card-features.expanded .feature-item:nth-child(2) { transition-delay: 0.15s; }
.card-features.expanded .feature-item:nth-child(3) { transition-delay: 0.2s; }
.card-features.expanded .feature-item:nth-child(4) { transition-delay: 0.25s; }
.card-features.expanded .feature-item:nth-child(5) { transition-delay: 0.3s; }
.card-features.expanded .feature-item:nth-child(6) { transition-delay: 0.35s; }
.card-features.expanded .feature-item:nth-child(7) { transition-delay: 0.4s; }
.card-features.expanded .feature-item:nth-child(8) { transition-delay: 0.45s; }
.card-features.expanded .feature-item:nth-child(9) { transition-delay: 0.5s; }

.feature-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(5px);
}

.feature-item i {
  font-size: 1.2rem;
  min-width: 20px;
}

.academy-card .feature-item i {
  color: #667eea;
}

.competition-card .feature-item i {
  color: #fbbf24;
}

.feature-item span {
  color: #d1d5db;
  font-size: 0.95rem;
  line-height: 1.4;
}

.feature-item.highlight {
  background: rgba(255, 215, 0, 0.1);
  border-left: 3px solid #ffd700;
}

.feature-item.highlight i {
  color: #ffd700;
}

.feature-item.highlight span {
  color: #ffffff;
  font-weight: 600;
}

.feature-divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  margin: 1rem 0;
}

.card-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.2rem;
  border-radius: 15px;
  font-size: 1.2rem;
  font-weight: 700;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.academy-card .card-cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
}

.competition-card .card-cta {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #0a0e1a;
  box-shadow: 0 6px 20px rgba(251, 191, 36, 0.3);
}

.nav-card:hover .card-cta {
  transform: translateY(-3px);
}

.academy-card:hover .card-cta {
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
}

.competition-card:hover .card-cta {
  box-shadow: 0 10px 30px rgba(251, 191, 36, 0.5);
}

.card-cta i {
  transition: transform 0.3s ease;
}

.nav-card:hover .card-cta i {
  transform: translateX(5px);
}

.card-badge {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 3;
}

.academy-card .card-badge {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
}

.competition-badge {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
  animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.card-badge i {
  font-size: 1rem;
}

/* ================================
   RESPONSIVE DESIGN
   ================================ */
@media (max-width: 1200px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .nav-card {
    min-height: auto;
  }
}

@media (max-width: 1024px) {
  .title-line {
    font-size: 4.5rem;
    letter-spacing: 6px;
  }

  .section-title {
    font-size: 2.8rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 70vh;
    min-height: 500px;
  }

  .title-line {
    font-size: 3rem;
    letter-spacing: 4px;
  }

  .hero-tagline {
    font-size: 1.3rem;
  }

  .navigation-section {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .section-description {
    font-size: 1.1rem;
  }

  .card-content {
    padding: 2rem;
  }

  .card-icon-wrapper {
    width: 90px;
    height: 90px;
  }

  .card-icon {
    font-size: 3rem;
  }

  .card-title {
    font-size: 1.8rem;
  }

  .card-subtitle {
    font-size: 1rem;
  }

  .feature-item {
    padding: 0.7rem 0.8rem;
  }

  .feature-item i {
    font-size: 1rem;
  }

  .feature-item span {
    font-size: 0.9rem;
  }

  .card-cta {
    font-size: 1rem;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .title-line {
    font-size: 2.2rem;
    letter-spacing: 2px;
  }

  .hero-tagline {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .card-icon-wrapper {
    width: 70px;
    height: 70px;
  }

  .card-icon {
    font-size: 2.5rem;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .card-badge {
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
}
</style>
