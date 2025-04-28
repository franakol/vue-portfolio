import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faTwitter, 
  faHtml5, 
  faJs, 
  faVuejs, 
  faReact, 
  faNodeJs, 
  faDocker, 
  faGitAlt 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCode, 
  faEnvelope, 
  faUser, 
  faProjectDiagram,
  faBriefcase,
  faGraduationCap,
  faPhone,
  faMapMarkerAlt,
  faCheckCircle,
  faLaptopCode,
  faServer,
  faTools,
  faMobileAlt,
  faDatabase,
  faExchangeAlt,
  faCogs,
  faVial,
  faSync,
  faHeading,
  faComment,
  faPaperPlane,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Add Font Awesome icons
library.add(
  // Brand icons
  faGithub, 
  faLinkedin,
  faTwitter,
  faHtml5,
  faJs,
  faVuejs,
  faReact,
  faNodeJs,
  faDocker,
  faGitAlt,
  
  // Solid icons
  faCode, 
  faEnvelope, 
  faUser, 
  faProjectDiagram,
  faBriefcase,
  faGraduationCap,
  faPhone,
  faMapMarkerAlt,
  faCheckCircle,
  faLaptopCode,
  faServer,
  faTools,
  faMobileAlt,
  faDatabase,
  faExchangeAlt,
  faCogs,
  faVial,
  faSync,
  faHeading,
  faComment,
  faPaperPlane,
  faSun,
  faMoon
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
