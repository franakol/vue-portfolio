<template>
  <div class="contact">
    <h1 class="section-title" data-aos="fade-down">
      <font-awesome-icon icon="envelope" /> Contact Me
    </h1>
    
    <div class="contact-container">
      <div class="contact-info card" data-aos="fade-right">
        <h2>Let's Connect</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello</p>
        
        <div class="contact-details">
          <div class="contact-item">
            <font-awesome-icon icon="envelope" />
            <span>email@example.com</span>
          </div>
          <div class="contact-item">
            <font-awesome-icon icon="phone" />
            <span>+1 234 567 890</span>
          </div>
          <div class="contact-item">
            <font-awesome-icon icon="map-marker-alt" />
            <span>New York, NY</span>
          </div>
        </div>

        <div class="social-links">
          <a href="https://github.com" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </div>
      </div>

      <form @submit.prevent="submitForm" class="contact-form card" data-aos="fade-left">
        <div class="form-group">
          <label for="name">Name</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            required
            :class="{ 'has-value': form.name }"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required
            :class="{ 'has-value': form.email }"
          />
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            v-model="form.subject" 
            required
            :class="{ 'has-value': form.subject }"
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            required
            rows="5"
            :class="{ 'has-value': form.message }"
          ></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="submitting">
          <span v-if="!submitting">Send Message</span>
          <span v-else>Sending...</span>
        </button>
      </form>
    </div>

    <div v-if="showSuccess" class="success-message" data-aos="fade-up">
      <div class="success-content">
        <font-awesome-icon icon="check-circle" size="2x" />
        <h3>Thank you for your message!</h3>
        <p>I'll get back to you soon.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  components: {
    FontAwesomeIcon: () => import('@fortawesome/vue-fontawesome').then(m => m.FontAwesomeIcon)
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      submitting: false,
      showSuccess: false
    }
  },
  methods: {
    async submitForm() {
      this.submitting = true;
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      this.showSuccess = true;
      this.submitting = false;
      this.resetForm();
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 2rem 0;
  position: relative;
}

.contact-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  padding: 2rem;
}

.contact-info h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.contact-info p {
  color: #666;
  margin-bottom: 2rem;
}

.contact-details {
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-links a {
  color: #3498db;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #2980b9;
}

.contact-form {
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
  position: relative;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

input, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  transition: border-color 0.3s ease;
  background: #f8f9fa;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #3498db;
}

.has-value {
  border-color: #2ecc71;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #2980b9;
}

.submit-btn:disabled {
  background: #95a5a6;
  cursor: not-allowed;
}

.success-message {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #2ecc71;
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.success-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}
</style>