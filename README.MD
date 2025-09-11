# F1 1992 Project

A fullstack PERN web application dedicated to the 1992 Formula 1 World Championship season. Explore all drivers, teams, and races from one of the most iconic years in F1 history.

## Live Demo
The app is deployed at: [https://f1-1992-project.onrender.com](https://f1-1992-project.onrender.com)

## Features
- **Responsive SPA**: Modern, adaptive design for desktop and mobile
- **All Drivers, Teams, and Races**: Browse detailed info and images
- **Material UI**: Clean, professional interface
- **Burger Menu**: Adaptive navigation for mobile
- **Back Button**: Easy navigation between pages
- **Beautiful Footer**: Themed and informative
- **REST API**: Node.js/Express backend serving F1 data
- **PostgreSQL Database**: All F1 data is stored and managed in a PostgreSQL database
- **API Endpoints**: `/api/races` (all races), `/api/races/:id/results` (results with driver/team names)

## Screenshots


### All Race Results
<img src="/img-readme/raceresults.png" alt="All Race Results" width="700" />
<br/>
<p>Shows the full list of 1992 season races with country flags, Grand Prix names, and race dates. Each row can be expanded to view detailed race results, including driver positions and points.</p>

### Home Page
<img src="/img-readme/homepage.png" alt="Home Page" width="700" />
<br/>
<p>The main landing page: features a season summary, navigation bar, quick access buttons to all sections, and a themed championship image. Demonstrates navigation and overview functionality.</p>

### All Teams
<img src="/img-readme/allteams.png" alt="All Teams" width="700" />
<br/>
<p>Displays all teams from the 1992 season with car photos, team descriptions, and a list of drivers for each team. Highlights team info cards and image presentation.</p>

### All Drivers
<img src="/img-readme/alldrivers.png" alt="All Drivers" width="700" />
<br/>
<p>Shows all drivers of the 1992 season with photos, country, points, and names. Demonstrates driver cards, country display, and points tally.</p>

## Tech Stack
- **Frontend**: React, Material UI, React Router
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Deployment**: Render.com

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Askeran17/f1-1992-project.git
   cd f1-1992-project
   ```
2. Install dependencies for both client and server:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

### Running Locally
1. Start the backend server:
   ```bash
   cd server
   npm start
   ```
2. In a new terminal, start the frontend:
   ```bash
   cd client
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
1. Build the React app:
   ```bash
   cd client
   npm run build
   ```
2. The server is configured to serve the static build from `/client/build`.

## Testing

- **Automated API tests**: The backend API endpoints are covered by automated tests using Jest and Supertest. See `server/tests/races.test.js` for examples.
- To run tests, use:
  ```sh
  cd server
  npm test
  ```
- Tests ensure that the main endpoints (e.g., `/api/races`, `/api/races/:id/results`) return correct data and status codes.

## Project Structure
```
f1-1992-project/
  client/      # React frontend
  server/      # Express backend
```

---

**F1 1992 Project** — for fans, by fans. Relive the golden era of Formula 1!
