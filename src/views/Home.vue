<template>
  <div class="home-page">
    <!-- SECTION 1: HERO SECTION -->
    <section class="hero-section">
      <!-- Video Background -->
      <div class="video-background">
        <video autoplay muted loop playsinline class="hero-video">
          <source src="/assets/Home/home.mp4" type="video/mp4">
        </video>
        <div class="video-overlay"></div>
      </div>

      <!-- Hero Content -->
      <div class="hero-content">
        <div class="hero-text-container">
          <!-- Main Headline with Typewriter Effect -->
          <h1 class="hero-headline">
            <span class="typewriter">{{ displayedText }}</span>
          </h1>

          <!-- Sub Headline -->
          <p class="hero-subheadline">
            The Avengers of Robotics Education. Transforming Schools into Innovation Hubs.
          </p>

          <!-- Action Buttons -->
          <div class="hero-buttons">
            <router-link to="/institutions" class="hero-btn hero-btn-blue">
              <span class="btn-text">For Institutions</span>
            </router-link>
            
            <router-link to="/student-zone" class="hero-btn hero-btn-yellow">
              <span class="btn-text">For Students</span>
            </router-link>
          </div>

          <!-- Scroll Indicator -->
          <div class="scroll-indicator">
            <div class="scroll-mouse">
              <div class="scroll-wheel"></div>
            </div>
            <p class="scroll-text">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: TRUST STRIP -->
    <section class="trust-section">
      <div class="trust-container">
        <p class="trust-caption">Recognized by the Leaders of Innovation</p>
        <div class="trust-logos-wrapper">
          <div class="trust-logos">
            <div class="logo-item" v-for="n in 12" :key="n">
              <img :src="`/assets/Home/Trust${((n - 1) % 6) + 1}.png`" :alt="`Trust Logo ${((n - 1) % 6) + 1}`" class="trust-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: IMPACT DASHBOARD -->
    <section class="impact-section">
      <div class="impact-container">
        <div class="impact-card" v-for="(stat, index) in stats" :key="index">
          <div class="impact-icon">
            <i :class="stat.iconClass"></i>
          </div>
          <div class="impact-number">
            <span class="number">{{ animatedStats[index] }}</span>
            <span class="plus">+</span>
          </div>
          <div class="impact-label">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: WHO ARE WE? -->
    <section class="who-are-we-section">
      <div class="who-are-we-container">
        <!-- Left Side: Text Content -->
        <div class="who-are-we-text">
          <h2 class="who-are-we-headline">Building the Creators of Tomorrow.</h2>
          <p class="who-are-we-body">
            At FAA Robotics, we don't just teach code. We build character. Using our unique Design Thinking Methodology, we empower students to Empathize, Define, Ideate, and Prototype real-world solutions. From NTR to Krishna District, we are the region's premier robotics partner.
          </p>
          <div class="who-are-we-highlight">
            <span class="highlight-icon">✓</span>
            <span class="highlight-text">Powered by the Design Thinking Process.</span>
          </div>
        </div>

        <!-- Right Side: Design Thinking Cycle -->
        <div class="design-thinking-cycle">
          <h3 class="cycle-title">Design Thinking Process</h3>
          <p class="cycle-subtitle">A Human-Centered Approach to Innovation</p>
          
          <svg viewBox="0 0 720 560" class="cycle-svg">
            <defs>
              <!-- Arrow marker definition -->
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#00bfff" class="arrow-fill" />
              </marker>
              
              <!-- Gradient for arrows -->
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#00bfff;stop-opacity:0.6" />
                <stop offset="100%" style="stop-color:#00bfff;stop-opacity:1" />
              </linearGradient>
            </defs>
            
            <!-- Empathize (Top Center) -->
            <g class="bubble-group" data-stage="empathize">
              <circle cx="360" cy="90" r="60" class="cycle-bubble" />
              <text x="360" y="82" class="stage-label">Empathize</text>
              <text x="360" y="105" class="stage-number">01</text>
            </g>
            
            <!-- Arrow: Empathize to Define -->
            <path d="M 415 110 Q 470 140 505 175" class="bubble-arrow" marker-end="url(#arrowhead)" />
            
            <!-- Define (Top Right) -->
            <g class="bubble-group" data-stage="define">
              <circle cx="540" cy="210" r="60" class="cycle-bubble" />
              <text x="540" y="205" class="stage-label">Define</text>
              <text x="540" y="223" class="stage-number">02</text>
            </g>
            
            <!-- Arrow: Define to Ideate -->
            <path d="M 520 265 Q 495 325 465 370" class="bubble-arrow" marker-end="url(#arrowhead)" />
            
            <!-- Ideate (Bottom Right) -->
            <g class="bubble-group" data-stage="ideate">
              <circle cx="440" cy="420" r="60" class="cycle-bubble" />
              <text x="440" y="415" class="stage-label">Ideate</text>
              <text x="440" y="433" class="stage-number">03</text>
            </g>
            
            <!-- Arrow: Ideate to Prototype -->
            <path d="M 380 420 Q 360 420 340 420" class="bubble-arrow" marker-end="url(#arrowhead)" />
            
            <!-- Prototype (Bottom Left) -->
            <g class="bubble-group" data-stage="prototype">
              <circle cx="280" cy="420" r="60" class="cycle-bubble" />
              <text x="280" y="415" class="stage-label">Prototype</text>
              <text x="280" y="433" class="stage-number">04</text>
            </g>
            
            <!-- Arrow: Prototype to Test -->
            <path d="M 255 365 Q 230 325 215 275" class="bubble-arrow" marker-end="url(#arrowhead)" />
            
            <!-- Test (Top Left) -->
            <g class="bubble-group" data-stage="test">
              <circle cx="180" cy="210" r="60" class="cycle-bubble" />
              <text x="180" y="205" class="stage-label">Test</text>
              <text x="180" y="223" class="stage-number">05</text>
            </g>
            
            <!-- Arrow: Test back to Empathize (completing the cycle) -->
            <path d="M 215 175 Q 270 120 305 105" class="bubble-arrow" marker-end="url(#arrowhead)" />
          </svg>
          
          <!-- Cycle indicator -->
          <div class="cycle-indicator">
            <i class="fas fa-sync-alt"></i>
            <span>Iterate & Improve Continuously</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: OUR ECOSYSTEM -->
    <section class="ecosystem-section">
      <div class="ecosystem-container">
        <h2 class="ecosystem-headline">Choose Your Path</h2>
        
        <div class="ecosystem-cards">
          <!-- Card 1: For Institutions -->
          <router-link to="/institutions" class="ecosystem-card">
            <div class="ecosystem-card-icon">
              <i class="fas fa-microchip"></i>
            </div>
            <h3 class="ecosystem-card-title">For Institutions</h3>
            <p class="ecosystem-card-text">Set up ATL & AI Labs. Compliance, Training, & Dashboard Management.</p>
            <span class="ecosystem-card-cta">Explore <i class="fas fa-arrow-right"></i></span>
          </router-link>

          <!-- Card 2: Student Zone -->
          <router-link to="/student-zone" class="ecosystem-card">
            <div class="ecosystem-card-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3 class="ecosystem-card-title">Student Zone</h3>
            <p class="ecosystem-card-text">Join Prerana, Adharvana, or 'What If??'. Master Robotics from home.</p>
            <span class="ecosystem-card-cta">Explore <i class="fas fa-arrow-right"></i></span>
          </router-link>

          <!-- Card 3: Robo Store -->
          <router-link to="/store" class="ecosystem-card">
            <div class="ecosystem-card-icon">
              <i class="fas fa-shopping-cart"></i>
            </div>
            <h3 class="ecosystem-card-title">Robo Store</h3>
            <p class="ecosystem-card-text">Buy Kits, Sensors, & 'Practical Thinker' Books.</p>
            <span class="ecosystem-card-cta">Explore <i class="fas fa-arrow-right"></i></span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- SECTION 6: SUCCESS STORIES -->
    <section class="success-stories-section">
      <div class="success-stories-container">
        <h2 class="success-stories-headline">Innovation in Action</h2>
        
        <div class="gallery-carousel">
          <!-- Column 1 -->
          <div class="gallery-column">
            <div class="gallery-item" :class="{ clicked: clickedGalleryItems.has(0) }" @click="handleGalleryItemClick(0)">
              <img :src="`/assets/Home/image (${(galleryIndex1 % 16) + 1}).jpg`" :alt="`Gallery image ${(galleryIndex1 % 16) + 1}`" class="gallery-image" />
            </div>
          </div>

          <!-- Column 2 -->
          <div class="gallery-column">
            <div class="gallery-item" :class="{ clicked: clickedGalleryItems.has(1) }" @click="handleGalleryItemClick(1)">
              <img :src="`/assets/Home/image (${((galleryIndex2 + 5) % 16) + 1}).jpg`" :alt="`Gallery image ${((galleryIndex2 + 5) % 16) + 1}`" class="gallery-image" />
            </div>
          </div>

          <!-- Column 3 -->
          <div class="gallery-column">
            <div class="gallery-item" :class="{ clicked: clickedGalleryItems.has(2) }" @click="handleGalleryItemClick(2)">
              <img :src="`/assets/Home/image (${((galleryIndex3 + 10) % 16) + 1}).jpg`" :alt="`Gallery image ${((galleryIndex3 + 10) % 16) + 1}`" class="gallery-image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 7: FOOTER -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Footer from '../components/Footer.vue'

const displayedText = ref('')
const fullText = 'FUTURIZE. ACTIVATE. ASSEMBLE.'
const typingComplete = ref(false)

// Stats data
const stats = [
  { 
    number: 200, 
    label: 'INSPIRE MANAK Projects',
    iconClass: 'fas fa-trophy'
  },
  { 
    number: 100, 
    label: 'Innovation Awards Won',
    iconClass: 'fas fa-medal'
  },
  { 
    number: 15, 
    label: 'School Innovation Marathon Selections',
    iconClass: 'fas fa-rocket'
  }
]

const animatedStats = ref([0, 0, 0])

// Gallery carousel indices
const galleryIndex1 = ref(0)
const galleryIndex2 = ref(0)
const galleryIndex3 = ref(0)
const clickedGalleryItems = ref(new Set())

const handleGalleryItemClick = (itemIndex) => {
  if (clickedGalleryItems.value.has(itemIndex)) {
    clickedGalleryItems.value.delete(itemIndex)
  } else {
    clickedGalleryItems.value.add(itemIndex)
  }
}

onMounted(() => {
  // Typewriter animation
  let index = 0
  const typeSpeed = 100
  
  const typeWriter = () => {
    if (index < fullText.length) {
      displayedText.value += fullText.charAt(index)
      index++
      setTimeout(typeWriter, typeSpeed)
    } else {
      setTimeout(() => {
        typingComplete.value = true
      }, 500)
    }
  }
  
  setTimeout(typeWriter, 500)

  // Intersection Observer for stats animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats()
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })

  // Observe the impact section
  setTimeout(() => {
    const impactSection = document.querySelector('.impact-section')
    if (impactSection) {
      observer.observe(impactSection)
    }
  }, 100)

  // Gallery carousel animation
  const galleryInterval = setInterval(() => {
    galleryIndex1.value += 1
    galleryIndex2.value += 1
    galleryIndex3.value += 1
  }, 4000) // Change image every 4 seconds

  // Cleanup on unmount
  onBeforeUnmount(() => {
    clearInterval(galleryInterval)
  })
})

function animateStats() {
  stats.forEach((stat, index) => {
    let current = 0
    const increment = stat.number / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= stat.number) {
        animatedStats.value[index] = stat.number
        clearInterval(timer)
      } else {
        animatedStats.value[index] = Math.floor(current)
      }
    }, 30)
  })
}
</script>

<style scoped>
.home-page {
  width: 100%;
}

/* HERO SECTION */
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: -80px;
  padding-top: 80px;
}

/* Video Background */
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  filter: blur(3px);
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 191, 255, 0.3) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(255, 179, 0, 0.25) 100%);
  z-index: 2;
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-text-container {
  animation: fadeInUp 1s ease-out;
}

/* Hero Headline */
.hero-headline {
  font-size: clamp(2rem, 6vw, 4.5rem);
  font-weight: 900;
  color: #ffd966;
  text-shadow: 
    0 0 20px rgba(255, 217, 102, 0.5),
    0 0 40px rgba(255, 217, 102, 0.3),
    2px 2px 8px rgba(0, 0, 0, 0.8),
    -1px -1px 2px rgba(255, 255, 255, 0.2);
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  font-family: 'Poppins', sans-serif;
  line-height: 1.2;
  white-space: nowrap;
}

.typewriter {
  display: inline-block;
}

/* Sub Headline */
.hero-subheadline {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Hero Buttons */
.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.hero-btn {
  display: inline-block;
  text-decoration: none;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.hero-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.hero-btn:hover::before {
  left: 100%;
}

.btn-text {
  position: relative;
  z-index: 1;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

/* Blue Button */
.hero-btn-blue {
  background: rgba(0, 191, 255, 0.25);
  border: 1.5px solid rgba(255, 255, 255, 0.3);
}

.hero-btn-blue .btn-text {
  color: #ffffff;
}

.hero-btn-blue:hover {
  background: rgba(0, 191, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 191, 255, 0.4);
}

/* Yellow Button */
.hero-btn-yellow {
  background: rgba(255, 179, 0, 0.25);
  border: 1.5px solid rgba(255, 179, 0, 0.4);
}

.hero-btn-yellow .btn-text {
  color: #ffb300;
}

.hero-btn-yellow:hover {
  background: rgba(255, 179, 0, 0.4);
  border-color: rgba(255, 179, 0, 0.7);
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(255, 179, 0, 0.4);
}

/* Scroll Indicator */
.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: bounce 2s infinite;
}

.scroll-mouse {
  width: 30px;
  height: 50px;
  border: 2px solid #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: #ffb300;
  border-radius: 2px;
  animation: scroll 1.5s infinite;
}

@keyframes scroll {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(12px); }
}

.scroll-text {
  color: #ffffff;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 500px;
  }

  .hero-headline {
    white-space: normal;
    font-size: clamp(1.5rem, 5vw, 2.5rem);
  }

  .hero-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .hero-btn {
    width: 100%;
    max-width: 280px;
  }

  .scroll-indicator {
    margin-top: 2rem;
  }
}

/* ================================
   SECTION 2: TRUST STRIP
   ================================ */
.trust-section {
  background: #ffffff;
  padding: 2rem 2rem 1.5rem 2rem;
}

.trust-container {
  max-width: 1400px;
  margin: 0 auto;
}

.trust-caption {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #1f2937;
  margin-bottom: 1rem;
  text-align: center;
}

/* Horizontal Scrolling Wrapper */
.trust-logos-wrapper {
  overflow: hidden;
  width: 100%;
}

.trust-logos {
  display: flex;
  gap: 3rem;
  padding: 1rem 0;
  animation: scroll-horizontal 60s linear infinite;
  width: fit-content;
}

@keyframes scroll-horizontal {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.logo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
}

.trust-logo {
  height: 60px;
  width: auto;
  max-width: 140px;
  object-fit: contain;
  opacity: 0.85;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-item:hover .trust-logo {
  opacity: 1;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .trust-section {
    padding: 1.5rem 1rem 1rem 1rem;
  }

  .trust-logos {
    gap: 2rem;
  }

  .trust-logo {
    height: 50px;
    max-width: 100px;
  }

  .logo-item {
    min-width: 120px;
  }
}

/* ================================
   SECTION 3: IMPACT DASHBOARD
   ================================ */
.impact-section {
  background: #f3f4f6;
  padding: 5rem 2rem;
  position: relative;
}

.impact-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(90deg, rgba(0, 191, 255, 0.05) 1px, transparent 1px),
    linear-gradient(rgba(0, 191, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
}

.impact-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  position: relative;
  z-index: 1;
}

.impact-card {
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #00bfff 0%, #0080ff 100%);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 191, 255, 0.3);
}

.impact-card:hover {
  transform: translateY(-8px);
  background: linear-gradient(135deg, #ffb300 0%, #ff9500 100%);
  box-shadow: 0 16px 48px rgba(255, 179, 0, 0.4);
}

.impact-icon {
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
  font-size: 4rem;
}

.impact-icon i {
  font-size: 4rem;
}

.impact-icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.impact-card:hover .impact-icon {
  transform: scale(1.2);
  color: #ffffff;
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.3));
}

.impact-number {
  margin: 1rem 0 0.75rem;
  line-height: 1;
  font-family: 'Poppins', sans-serif;
}

.number {
  font-size: 3rem;
  font-weight: 900;
  color: #ffffff;
  display: inline-block;
}

.plus {
  font-size: 1.5rem;
  color: #ffffff;
  margin-left: 0.25rem;
  font-weight: 700;
}

.impact-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.5;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .impact-section {
    padding: 3rem 1.5rem;
  }

  .impact-container {
    gap: 2rem;
  }

  .impact-icon {
    width: 100px;
    height: 100px;
    font-size: 3rem;
  }

  .impact-icon i {
    font-size: 3rem;
  }

  .number {
    font-size: 2.5rem;
  }

  .plus {
    font-size: 1.25rem;
  }

  .impact-label {
    font-size: 0.875rem;
  }
}

/* ================================
   SECTION 4: WHO ARE WE?
   ================================ */
.who-are-we-section {
  background: #ffffff;
  padding: 2rem 2rem 6rem 2rem;
}

.who-are-we-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.who-are-we-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.who-are-we-headline {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  line-height: 1.3;
  font-family: 'Poppins', sans-serif;
}

.who-are-we-body {
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1.8;
  font-family: 'Poppins', sans-serif;
}

.who-are-we-highlight {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(0, 191, 255, 0.1) 0%, rgba(255, 179, 0, 0.1) 100%);
  border-left: 4px solid #00bfff;
  border-radius: 8px;
}

.highlight-icon {
  font-size: 2rem;
  color: #00bfff;
  font-weight: bold;
}

.highlight-text {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  font-family: 'Poppins', sans-serif;
}

.design-thinking-cycle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.cycle-title {
  font-size: 2rem;
  font-weight: 800;
  color: #1f2937;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background: linear-gradient(135deg, #00bfff 0%, #0080ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cycle-subtitle {
  font-size: 0.95rem;
  color: #64748b;
  text-align: center;
  margin: -0.5rem 0 0.5rem 0;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

.cycle-svg {
  width: 100%;
  max-width: 700px;
  height: auto;
  margin: 1rem 0;
}

/* Bubble styling */
.cycle-bubble {
  fill: rgba(255, 255, 255, 0.95);
  stroke: #00bfff;
  stroke-width: 3;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
}

.bubble-group:hover .cycle-bubble {
  stroke: #ffb300;
  stroke-width: 4;
  fill: rgba(255, 255, 255, 1);
  filter: drop-shadow(0 8px 24px rgba(255, 179, 0, 0.3));
  transform: scale(1.05);
  transform-origin: center;
}

/* Stage labels */
.stage-label {
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: 16px;
  font-weight: 700;
  fill: #1f2937;
  font-family: 'Poppins', sans-serif;
  pointer-events: none;
  transition: all 0.3s ease;
}

.bubble-group:hover .stage-label {
  fill: #00bfff;
  font-size: 17px;
}

.stage-number {
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: 12px;
  font-weight: 600;
  fill: #64748b;
  font-family: 'Poppins', sans-serif;
  pointer-events: none;
  transition: all 0.3s ease;
}

.bubble-group:hover .stage-number {
  fill: #ffb300;
  font-weight: 700;
}

/* Arrow styling */
.bubble-arrow {
  fill: none;
  stroke: url(#arrowGradient);
  stroke-width: 2.5;
  stroke-linecap: round;
  transition: all 0.4s ease;
  opacity: 0.7;
}

.cycle-svg:hover .bubble-arrow {
  stroke-width: 3;
  opacity: 1;
  stroke: #00bfff;
}

.arrow-dot {
  fill: #00bfff;
  opacity: 0.6;
  transition: all 0.3s ease;
  animation: dotPulse 2s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% {
    r: 3;
    opacity: 0.6;
  }
  50% {
    r: 4;
    opacity: 1;
  }
}

.cycle-svg:hover .arrow-dot {
  fill: #ffb300;
  opacity: 1;
}

/* Arrow marker */
.arrow-fill {
  transition: fill 0.3s ease;
}

.cycle-svg:hover .arrow-fill {
  fill: #ffb300;
}

/* Cycle indicator */
.cycle-indicator {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, rgba(0, 191, 255, 0.1) 0%, rgba(0, 128, 255, 0.1) 100%);
  padding: 1rem 2rem;
  border-radius: 50px;
  margin-top: 0.5rem;
  border: 1.5px solid rgba(0, 191, 255, 0.2);
}

.cycle-indicator i {
  font-size: 1.25rem;
  color: #00bfff;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.cycle-indicator span {
  font-size: 0.9rem;
  font-weight: 600;
  color: #0369a1;
  font-family: 'Poppins', sans-serif;
}

@media (max-width: 1024px) {
  .who-are-we-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .who-are-we-headline {
    font-size: 2rem;
  }

  .cycle-svg {
    max-width: 550px;
  }

  .stage-label {
    font-size: 14px;
  }

  .stage-number {
    font-size: 11px;
  }

  .cycle-indicator {
    padding: 0.85rem 1.5rem;
  }

  .cycle-indicator span {
    font-size: 0.85rem;
  }
}

/* ================================
   SECTION 5: OUR ECOSYSTEM
   ================================ */
.ecosystem-section {
  background: linear-gradient(135deg, #00bfff 0%, #0080ff 100%);
  padding: 4rem 2rem 6rem 2rem;
}

.ecosystem-container {
  max-width: 1400px;
  margin: 0 auto;
}

.ecosystem-headline {
  font-size: 2.8rem;
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: -2rem;
  font-family: 'Poppins', sans-serif;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.ecosystem-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 0.5rem;
}

.ecosystem-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
}

.ecosystem-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: left 0.5s ease;
  z-index: 0;
}

.ecosystem-card:hover::before {
  left: 100%;
}

.ecosystem-card:hover {
  transform: translateY(-12px);
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 179, 0, 0.6);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.ecosystem-card-icon {
  position: relative;
  z-index: 1;
  font-size: 3.5rem;
  color: #ffb300;
  transition: all 0.4s ease;
}

.ecosystem-card:hover .ecosystem-card-icon {
  transform: scale(1.2) rotate(10deg);
  color: #ffffff;
  filter: drop-shadow(0 4px 12px rgba(255, 179, 0, 0.5));
}

.ecosystem-card-title {
  position: relative;
  z-index: 1;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

.ecosystem-card-text {
  position: relative;
  z-index: 1;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

.ecosystem-card-cta {
  position: relative;
  z-index: 1;
  font-size: 1rem;
  font-weight: 600;
  color: #ffb300;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.ecosystem-card:hover .ecosystem-card-cta {
  color: #ffffff;
  transform: translateX(4px);
}

.ecosystem-card:hover .ecosystem-card-cta i {
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .ecosystem-headline {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .ecosystem-cards {
    gap: 2rem;
  }

  .ecosystem-card {
    padding: 2.5rem 2rem;
  }

  .ecosystem-card-icon {
    font-size: 2.8rem;
  }

  .ecosystem-card-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .who-are-we-section {
    padding: 3rem 1.5rem;
  }

  .who-are-we-headline {
    font-size: 1.8rem;
  }

  .ecosystem-section {
    padding: 3rem 1.5rem;
  }

  .ecosystem-headline {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .ecosystem-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* ================================
   SECTION 6: SUCCESS STORIES
   ================================ */
.success-stories-section {
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  padding: 2rem 2rem 6rem 2rem;
}

.success-stories-container {
  max-width: 1400px;
  margin: 0 auto;
}

.success-stories-headline {
  font-size: 2.8rem;
  font-weight: 800;
  color: #1f2937;
  text-align: center;
  margin-bottom: 4rem;
  font-family: 'Poppins', sans-serif;
}

.gallery-carousel {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.gallery-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery-item {
  width: 100%;
  max-width: 350px;
  aspect-ratio: 1;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 3px solid #00bfff;
}

.gallery-item:hover {
  transform: scale(1.05) translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 191, 255, 0.3);
  border-color: #ffb300;
}

.gallery-item.clicked {
  border: 3px solid #ffb300;
  box-shadow: 0 0 20px rgba(255, 179, 0, 0.6);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fadeInOut 0.8s ease-in-out;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media (max-width: 1024px) {
  .success-stories-headline {
    font-size: 2rem;
  }

  .gallery-carousel {
    gap: 1.5rem;
  }

  .gallery-item {
    max-width: 280px;
  }
}

@media (max-width: 768px) {
  .success-stories-section {
    padding: 3rem 1.5rem;
  }

  .success-stories-headline {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .gallery-carousel {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .gallery-item {
    max-width: 100%;
  }
}
</style>
