<template>
  <footer class="footer-section">
    <div class="footer-container">
      <!-- Column 1: Logo & Tagline -->
      <div class="footer-column footer-branding">
        <div class="footer-logo">
          <img src="/assets/Logo.png" alt="FAA Robotics Logo" class="footer-logo-img" />
          <div>
            <h3 class="logo-text">FAA ROBOTICS</h3>
            <p class="footer-tagline">Futurize. Activate. Assemble.</p>
          </div>
        </div>
      </div>

      <!-- Column 2: Quick Links -->
      <div class="footer-column footer-links">
        <h4 class="footer-column-title">Quick Links</h4>
        <ul class="footer-nav-list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/institutions">Institutions</router-link></li>
          <li><router-link to="/student-zone">Student Zone</router-link></li>
          <li><router-link to="/store">Store</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>

      <!-- Column 3: Connect & Contact -->
      <div class="footer-column footer-connect">
        <h4 class="footer-column-title">Connect With Us</h4>
        
        <div class="social-media">
          <a href="https://www.facebook.com/faarobotics" target="_blank" rel="noopener" class="social-icon" title="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/final_avengers?igsh=MXhheXQ2MXhoYmdraw==" target="_blank" rel="noopener" class="social-icon" title="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com/@smily_conceptions?si=yO0gj0d1UNPrhWuu" target="_blank" rel="noopener" class="social-icon" title="YouTube">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="https://t.me/faa_robotics" target="_blank" rel="noopener" class="social-icon" title="Telegram">
            <i class="fab fa-telegram"></i>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=%2B919490871276" target="_blank" rel="noopener" class="social-icon" title="WhatsApp">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>

        <div class="footer-contact-info">
          <p class="contact-item">
            <i class="fas fa-envelope"></i>
            <a href="mailto:finalavengersacademy@gmail.com">finalavengersacademy@gmail.com</a>
          </p>
          <p class="contact-item">
            <i class="fas fa-phone"></i>
            <a href="tel:+919347206123">+91  9347206123</a>
          </p>
          <p class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            Vijayawada, Andhra Pradesh, India
          </p>
        </div>
      </div>

      <!-- Column 4: Office Info & CTA -->
      <div class="footer-column footer-office">
        <h4 class="footer-column-title">FAA Robotics</h4>
        
        <div class="office-info">
          <p class="office-title">Head Office</p>
          <p class="office-detail">FAA Robotics Pvt. Ltd.</p>
          <p class="office-detail">Vijayawada, AP, India</p>
        </div>

        <div class="office-hours">
          <p class="hours-title">Office Timings</p>
          <p class="hours-detail">Mon - Sat: 10 AM - 5 PM</p>
          <p class="hours-detail">Sunday: Closed</p>
        </div>

        <a href="/careers" class="footer-cta-button">
          Join Us <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <p class="footer-copyright">&copy; 2024 FAA Robotics. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
/* ================================
   FOOTER
   ================================ */
.footer-section {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  color: #ffffff;
  padding: 4rem 2rem 2rem;
  border-top: 3px solid #00bfff;
  position: relative;
}

.footer-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(90deg, rgba(0, 191, 255, 0.02) 1px, transparent 1px),
    linear-gradient(rgba(0, 191, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-branding {
  gap: 1rem;
}

.footer-logo {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer-logo-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  flex-shrink: 0;
}

.logo-badge {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #00bfff 0%, #ffb300 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.8rem;
  color: #ffffff;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(0, 191, 255, 0.3);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 900;
  color: #ffb300;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 2px;
}

.footer-tagline {
  font-size: 0.9rem;
  color: #ffb300;
  font-style: italic;
  margin: 0.25rem 0 0 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

.footer-column-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffb300;
  margin: 0 0 1rem 0;
  font-family: 'Poppins', sans-serif;
  border-bottom: 2px solid #00bfff;
  padding-bottom: 0.5rem;
}

.footer-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-nav-list li {
  margin: 0;
}

.footer-nav-list a {
  color: #d1d5db;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.footer-nav-list a:hover {
  color: #00bfff;
  padding-left: 8px;
}

.social-media {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.social-icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 191, 255, 0.15);
  border: 1.5px solid #00bfff;
  border-radius: 50%;
  color: #00bfff;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  text-decoration: none;
}

.social-icon:hover {
  background: #00bfff;
  color: #000000;
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 191, 255, 0.4);
}

.footer-contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #d1d5db;
  margin: 0;
  font-size: 0.95rem;
}

.contact-item i {
  color: #00bfff;
  min-width: 20px;
}

.contact-item a {
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #ffb300;
}

.office-info,
.office-hours {
  margin: 1rem 0;
}

.office-title,
.hours-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffb300;
  margin: 0 0 0.5rem 0;
}

.office-detail,
.hours-detail {
  color: #d1d5db;
  margin: 0.3rem 0;
  font-size: 0.9rem;
}

.footer-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #00bfff 0%, #0080ff 100%);
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  width: fit-content;
  margin-top: 0.5rem;
}

.footer-cta-button:hover {
  background: linear-gradient(135deg, #ffb300 0%, #ff9500 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 191, 255, 0.3);
}

.footer-bottom {
  border-top: 1px solid #333333;
  padding-top: 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.footer-copyright {
  color: #9ca3af;
  font-size: 0.9rem;
  margin: 0;
}

@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .footer-section {
    padding: 3rem 1.5rem 2rem;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-column-title {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }

  .logo-text {
    font-size: 1.3rem;
  }

  .footer-nav-list {
    gap: 0.6rem;
  }

  .footer-nav-list a {
    font-size: 0.9rem;
  }

  .social-media {
    gap: 0.75rem;
  }

  .social-icon {
    width: 38px;
    height: 38px;
    font-size: 1rem;
  }
}
</style>
