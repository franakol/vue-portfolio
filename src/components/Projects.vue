<template>
  <div class="projects">
    <h1 class="section-title" data-aos="fade-down">
      <font-awesome-icon icon="project-diagram" /> My Projects
    </h1>
    <div class="project-grid">
      <div v-for="project in projects" 
           :key="project.id" 
           class="project-card card"
           data-aos="fade-up"
           :data-aos-delay="project.id * 100">
        <img :src="project.image" :alt="project.title" class="project-image" />
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="tech-stack">
            <span v-for="tech in project.technologies" 
                  :key="tech" 
                  class="tech-tag">{{ tech }}</span>
          </div>
          <div class="project-links">
            <a :href="project.github" target="_blank" class="project-link">
              <font-awesome-icon :icon="['fab', 'github']" /> Code
            </a>
            <a :href="project.demo" target="_blank" class="project-link">
              <font-awesome-icon icon="code" /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  // FontAwesomeIcon is registered globally in main.js
  components: {},
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'E-Commerce Platform',
          description: 'A full-featured e-commerce platform built with Vue.js and Node.js, featuring shopping cart, user authentication, and payment integration.',
          image: 'https://picsum.photos/id/1/300/200',
          technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
          github: 'https://github.com',
          demo: 'https://demo-link.com'
        },
        {
          id: 2,
          title: 'Task Management App',
          description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
          image: 'https://picsum.photos/id/48/300/200',
          technologies: ['Vue.js', 'Firebase', 'Vuex', 'Socket.io'],
          github: 'https://github.com',
          demo: 'https://demo-link.com'
        },
        {
          id: 3,
          title: 'Weather Dashboard',
          description: 'A weather forecasting application that provides real-time weather data, interactive maps, and detailed weather information.',
          image: 'https://picsum.photos/id/29/300/200',
          technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'Leaflet'],
          github: 'https://github.com',
          demo: 'https://demo-link.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  padding: 2rem 0;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.project-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.project-content {
  padding: 1.5rem;
}

.project-description {
  color: #666;
  margin: 1rem 0;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tech-tag {
  background: #e1f5fe;
  color: #0288d1;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background: #3498db;
  transition: background 0.3s ease;
}

.project-link:hover {
  background: #2980b9;
}
</style>