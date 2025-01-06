# React News Aggregator

This is a simple React news aggregator application that pulls articles from various sources and displays them in a clean, easy-to-read format. It supports search and filtering, as well as personalization options for users.

## Features:
- **Article search and filtering**: Search articles by keyword and filter by date, category, and source.
- **Personalized news feed**: Customize your feed by selecting preferred sources, categories, and authors.
- **Mobile-responsive design**: Optimized for mobile devices.

## Data Sources:
- NewsAPI
- OpenNews
- NewsCred
- The Guardian
- New York Times
- BBC News

## Technologies:
- React.js
- Tailwind CSS
- Axios for API calls

---

## Prerequisites

Before running the project, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

---

## Running the Project Locally

Follow these steps to run the project without Docker:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/react-news-aggregator.git
   cd react-news-aggregator


Install dependencies:

Install the project’s dependencies using npm:

bash
Copy code
npm install


Set up environment variables:

Create a .env file in the root of the project and add your API keys for the services you're using (e.g., NewsAPI, OpenNews, etc.):


API_KEY


Run the development server:

Once the dependencies are installed, you can start the development server:

bash
Copy code
npm start
This will start the development server and open the app in your default browser at http://localhost:3000.


Building the Project for Production
If you want to build the project for production (to deploy it), follow these steps:

Build the app:

bash
Copy code
npm run build
This will create a build folder in your project directory with the optimized production build of your app.

Serve the app locally:

If you want to serve the production build locally (without Docker), you can use a tool like serve. Install it globally if you don't have it:

bash
Copy code
npm install -g serve
Then, run the following command to serve the app:

bash
Copy code
serve -s build
The app will be available at http://localhost:5000.

Additional Information
Tailwind CSS: The project uses Tailwind CSS for styling. It is configured to work with PostCSS and automatically applies styles as you use utility classes.
API: Articles are fetched from external APIs like NewsAPI, OpenNews, and others. You may need to sign up and get your own API keys to use them.
