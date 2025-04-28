# vue-portfolio

This project is a simple portfolio website built with Vue.js to showcase basic Vue skills. It includes sections for an introduction, projects, skills, and contact information.

## Project Structure

```
vue-portfolio
├── src
│   ├── App.vue
│   ├── assets
│   ├── components
│   │   ├── Header.vue
│   │   ├── About.vue
│   │   ├── Projects.vue
│   │   ├── Skills.vue
│   │   └── Contact.vue
│   ├── router
│   │   └── index.js
│   └── main.js
├── public
│   └── index.html
├── package.json
├── vue.config.js
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vue-portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application

To run the application in development mode, use the following command:

```bash
npm run serve
```

This will start a local development server. Open your browser and navigate to `http://localhost:8080` to view the portfolio.

## Components

- **Header.vue**: Contains the navigation links and site title.
- **About.vue**: Displays information about the individual or organization.
- **Projects.vue**: Showcases completed projects with descriptions and links.
- **Skills.vue**: Lists skills in a visually appealing format.
- **Contact.vue**: Provides a contact form or contact information.

## License

This project is licensed under the MIT License.