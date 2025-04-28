import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { 
  faCode, 
  faEnvelope, 
  faUser, 
  faProjectDiagram,
  faBriefcase,
  faGraduationCap,
  faPhone,
  faMapMarkerAlt,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Add Font Awesome icons
library.add(
  faGithub, 
  faLinkedin,
  faTwitter,
  faCode, 
  faEnvelope, 
  faUser, 
  faProjectDiagram,
  faBriefcase,
  faGraduationCap,
  faPhone,
  faMapMarkerAlt,
  faCheckCircle
);

const app = createApp(App);

// Register Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Initialize AOS
app.use(router);
app.mount('#app');

// Initialize AOS after app mount
AOS.init({
  duration: 1000,
  once: true,
  offset: 50
});