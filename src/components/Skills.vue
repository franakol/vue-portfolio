<template>
  <div class="skills">
    <h1 class="section-title" data-aos="fade-down">
      <font-awesome-icon icon="code" /> My Skills
    </h1>
    <div class="skills-grid">
      <div class="skill-category card" data-aos="fade-right">
        <h2><font-awesome-icon icon="laptop-code" /> Frontend Development</h2>
        <div class="skills-list">
          <div class="skill-item" v-for="skill in frontendSkills" :key="skill.name">
            <div class="skill-header">
              <strong><font-awesome-icon :icon="getSkillIcon(skill.name)" /> {{ skill.name }}</strong>
              <span>{{ skill.level }}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" :style="{ width: skill.level + '%' }" :data-level="skill.level"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="skill-category card" data-aos="fade-left">
        <h2><font-awesome-icon icon="server" /> Backend Development</h2>
        <div class="skills-list">
          <div class="skill-item" v-for="skill in backendSkills" :key="skill.name">
            <div class="skill-header">
              <strong><font-awesome-icon :icon="getSkillIcon(skill.name)" /> {{ skill.name }}</strong>
              <span>{{ skill.level }}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" :style="{ width: skill.level + '%' }" :data-level="skill.level"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="skill-category card" data-aos="fade-right">
        <h2><font-awesome-icon icon="tools" /> Tools & Technologies</h2>
        <div class="skills-list">
          <div class="skill-item" v-for="skill in toolsSkills" :key="skill.name">
            <div class="skill-header">
              <strong><font-awesome-icon :icon="getSkillIcon(skill.name)" /> {{ skill.name }}</strong>
              <span>{{ skill.level }}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" :style="{ width: skill.level + '%' }" :data-level="skill.level"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  components: {
    FontAwesomeIcon: () => import('@fortawesome/vue-fontawesome').then(m => m.FontAwesomeIcon)
  },
  data() {
    return {
      frontendSkills: [
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Responsive Design', level: 85 }
      ],
      backendSkills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'SQL', level: 70 }
      ],
      toolsSkills: [
        { name: 'Git', level: 85 },
        { name: 'Webpack', level: 75 },
        { name: 'Docker', level: 65 },
        { name: 'Jest', level: 70 },
        { name: 'CI/CD', level: 65 }
      ]
    }
  },
  methods: {
    getSkillIcon(skillName) {
      const iconMap = {
        'HTML5/CSS3': 'html5',
        'JavaScript': 'js',
        'Vue.js': 'vuejs',
        'React': 'react',
        'Responsive Design': 'mobile-alt',
        'Node.js': 'node-js',
        'Express': 'server',
        'MongoDB': 'database',
        'RESTful APIs': 'exchange-alt',
        'SQL': 'database',
        'Git': 'git-alt',
        'Webpack': 'cogs',
        'Docker': 'docker',
        'Jest': 'vial',
        'CI/CD': 'sync'
      };
      
      // Return a default icon if the skill name is not in the map
      return iconMap[skillName] || 'code';
    }
  }
}
</script>

<style scoped>
.skills {
  padding: 2rem 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.skill-category {
  padding: 2rem;
}

.skill-category h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  width: 100%;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2980b9);
  border-radius: 4px;
  transition: width 1.5s ease-in-out;
  position: relative;
}

.progress::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(255,255,255,0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255,255,255,0.2) 50%,
    rgba(255,255,255,0.2) 75%,
    transparent 75%,
    transparent
  );
  background-size: 20px 20px;
  animation: move 1s linear infinite;
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 20px 0;
  }
}
</style>