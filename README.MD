# F1 1992 Project

A fullstack web application dedicated to the 1992 Formula 1 World Championship season. Explore all drivers, teams, and races from one of the most iconic years in F1 history.

## Features
- **Responsive SPA**: Modern, adaptive design for desktop and mobile
- **All Drivers, Teams, and Races**: Browse detailed info and images
- **Material UI**: Clean, professional interface
- **Burger Menu**: Adaptive navigation for mobile
- **Back Button**: Easy navigation between pages
- **Beautiful Footer**: Themed and informative
- **REST API**: Node.js/Express backend serving F1 data

## Tech Stack
- **Frontend**: React, Material UI, React Router
- **Backend**: Node.js, Express
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

## Project Structure
```
f1-1992-project/
  client/      # React frontend
  server/      # Express backend
```

## Live Demo
The app is deployed at: [https://f1-1992-project.onrender.com](https://f1-1992-project.onrender.com)

## License
MIT

---

**F1 1992 Project** — for fans, by fans. Relive the golden era of Formula 1!
