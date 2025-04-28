<template>
  <div class="about">
    <div class="profile-section" data-aos="fade-down">
      <img src="@/assets/images/profile.jpg" alt="Profile Image" class="profile-image" />
      <h1><font-awesome-icon icon="user" /> About Me</h1>
    </div>
    
    <div class="content-section" data-aos="fade-up">
      <div class="card">
        <p class="intro">
          Welcome to my portfolio! I am a passionate web developer with experience in building dynamic and responsive websites. 
          My journey in web development started with a fascination for creating interactive user experiences.
        </p>
      </div>

      <div class="card" data-aos="fade-right">
        <h2><font-awesome-icon icon="graduation-cap" /> Education</h2>
        <ul class="timeline">
          <li>
            <h3>Bachelor in Computer Science</h3>
            <p>University Name, 2018-2022</p>
          </li>
          <li>
            <h3>Web Development Certification</h3>
            <p>Online Academy, 2022</p>
          </li>
        </ul>
      </div>

      <div class="card" data-aos="fade-left">
        <h2><font-awesome-icon icon="briefcase" /> Experience</h2>
        <ul class="timeline">
          <li>
            <h3>Senior Web Developer</h3>
            <p>XYZ Company (2022 - Present)</p>
            <ul>
              <li>Led team of 5 developers</li>
              <li>Implemented responsive designs</li>
              <li>Improved site performance by 40%</li>
            </ul>
          </li>
          <li>
            <h3>Junior Developer</h3>
            <p>ABC Agency (2020 - 2022)</p>
            <ul>
              <li>Developed user interfaces</li>
              <li>Collaborated with design team</li>
              <li>Maintained client websites</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="social-links" data-aos="fade-up">
      <a href="https://github.com" target="_blank" class="social-link">
        <font-awesome-icon :icon="['fab', 'github']" size="2x" />
      </a>
      <a href="https://linkedin.com" target="_blank" class="social-link">
        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {
    FontAwesomeIcon: () => import('@fortawesome/vue-fontawesome').then(m => m.FontAwesomeIcon)
  }
}
</script>

<style scoped>
.about {
  max-width: 900px;
  margin: 0 auto;
}

.profile-section {
  text-align: center;
  margin-bottom: 3rem;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.content-section > * {
  margin-bottom: 2rem;
}

.intro {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #2c3e50;
}

.timeline {
  list-style: none;
  padding-left: 2rem;
  border-left: 2px solid #3498db;
}

.timeline li {
  margin-bottom: 1.5rem;
  position: relative;
}

.timeline li::before {
  content: '';
  width: 12px;
  height: 12px;
  background: #3498db;
  border-radius: 50%;
  position: absolute;
  left: -2.6rem;
  top: 0.5rem;
}

.timeline h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.timeline p {
  color: #666;
  font-size: 0.9rem;
}

.timeline ul {
  margin-top: 0.5rem;
  padding-left: 1.2rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.social-link {
  color: #2c3e50;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #3498db;
}

h2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.card {
  margin-bottom: 2rem;
}
</style>