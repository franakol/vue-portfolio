<template>
  <header class="header">
    <div class="logo">
      <router-link to="/" class="logo-link">
        <font-awesome-icon icon="code" class="logo-icon" />
        <span>Portfolio</span>
      </router-link>
    </div>

    <button class="menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav class="nav" :class="{ 'active': isMenuOpen }">
      <ul class="nav-list">
        <li><router-link to="/" @click="closeMenu">About</router-link></li>
        <li><router-link to="/projects" @click="closeMenu">Projects</router-link></li>
        <li><router-link to="/skills" @click="closeMenu">Skills</router-link></li>
        <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {
    FontAwesomeIcon: () => import('@fortawesome/vue-fontawesome').then(m => m.FontAwesomeIcon)
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  },
  beforeDestroy() {
    document.body.style.overflow = '';
  }
}
</script>

<style scoped>
.header {
  background: white;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #3498db;
  font-size: 1.5rem;
  font-weight: 600;
}

.logo-icon {
  font-size: 1.8rem;
}

.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-list a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-list a:hover {
  background: #f8f9fa;
  color: #3498db;
}

.nav-list a.router-link-active {
  color: #3498db;
  background: #f8f9fa;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 1001;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 2px;
  background: #2c3e50;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .menu-toggle.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: white;
    padding: 80px 2rem;
    transition: right 0.3s ease;
  }

  .nav.active {
    right: 0;
  }

  .nav-list {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .nav-list a {
    font-size: 1.2rem;
    padding: 1rem 2rem;
    width: 100%;
    text-align: center;
  }
}
</style>