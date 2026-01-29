<template>
  <header style="position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: linear-gradient(135deg, #00bfff 0%, #00a8e0 100%); box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <nav style="max-width: 1400px; margin: 0 auto; padding: 0 2rem; height: 70px; display: flex; align-items: center; justify-content: space-between;">
      
      <!-- Logo + Brand -->
      <router-link to="/" style="display: flex; align-items: center; gap: 0.75rem; text-decoration: none;">
        <img src="/assets/Logo.png" alt="FAA" style="width: 45px; height: 45px; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));" />
        <span style="font-size: 1.5rem; font-weight: 800; color: #ffb300; text-shadow: 2px 2px 4px rgba(0,0,0,0.2); letter-spacing: 0.5px; font-family: 'Poppins', sans-serif;">FAA ROBOTICS</span>
      </router-link>

      <!-- Navigation Links -->
      <div class="desktop-menu" style="display: flex; align-items: center; gap: 2.5rem;">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          class="nav-link"
          :class="{ 'active': $route.path === link.path }"
        >
          {{ link.name }}
        </router-link>
      </div>

    </nav>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'

const $route = useRoute()

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'For Institutions', path: '/institutions' },
  { name: 'Student Zone', path: '/student-zone' },
  { name: 'Robo Store', path: '/store' },
  { name: 'Contact Us', path: '/contact' }
]
</script>

<style scoped>
.nav-link {
  color: #000000;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #ffb300;
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active::after {
  width: 100%;
  background-color: #ffd700;
}

@media (max-width: 1024px) {
  .desktop-menu {
    display: none !important;
  }
}
</style>
