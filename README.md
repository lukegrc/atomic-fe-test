# Movies App

A full-stack movie discovery application built with React, NestJS, and TMDB API.

**Live Demo**: https://lukegrc.github.io/movies-app/

## Features

- Browse popular movies
- Search movies by title
- Filter by genre
- Responsive design
- Fast API responses with caching

## Tech Stack

- **Frontend**: React, TypeScript, Material-UI, RTK Query
- **Backend**: NestJS, TypeScript, Axios
- **API**: The Movie Database (TMDB)

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- TMDB API key

### 1. Clone and Install

```bash
git clone https://github.com/lukegrc/movies-app.git
cd movies-app
npm run install:all
```

### 2. Backend Setup

```bash
cd backend
cp env.example .env
# Edit .env and add your TMDB API key
npm run start:dev
```

**Important**: Get your free TMDB API key from https://www.themoviedb.org/settings/api

Backend runs on http://localhost:3001

### 3. Frontend Setup

```bash
cd frontend
npm run dev
```

Frontend runs on http://localhost:3000

### 4. Development Mode

```bash
# From root directory
npm run dev
```

Runs both frontend and backend concurrently.

## Deployment

### Frontend (GitHub Pages)

The frontend automatically deploys to GitHub Pages on push to main branch.

**Live Demo**: https://lukegrc.github.io/movies-app/

### Backend (Render)

1. Go to https://render.com
2. Sign up with GitHub
3. Create new Web Service
4. Connect your repository
5. Set Root Directory to `backend`
6. Add environment variable: `TMDB_API_KEY=your_api_key`
7. Deploy

### Full Stack Deployment

```bash
# After deploying backend to Render, get the URL and run:
./deploy.sh https://your-backend-url.onrender.com
```

### Docker

#### Production Build

```bash
# Build and run both frontend and backend containers
npm run docker:prod
```

#### Development with Docker

```bash
# Run with hot reload for development
npm run docker:dev
```

**Docker Notes:**

- Make sure you have a `.env` file in the root directory with your `TMDB_API_KEY`
- Frontend runs on port 3000 (nginx)
- Backend API runs on port 3001
- No backend code changes required - clean separation of concerns

## API Endpoints

- `GET /api/movies/popular?page=1` - Get popular movies
- `GET /api/movies/search?query=batman&page=1` - Search movies
- `GET /api/movies/genres` - Get movie genres

## Project Structure

```
├── frontend/          # React frontend (Vite)
│   ├── Dockerfile     # Frontend Docker image
│   ├── Dockerfile.dev # Frontend development Docker
│   └── nginx.conf     # Nginx configuration
├── backend/           # NestJS backend
│   ├── Dockerfile     # Backend Docker image
│   └── Dockerfile.dev # Backend development Docker
├── setup.sh          # Setup script
├── deploy.sh         # Deployment script
├── docker-compose.yml # Docker Compose configuration
└── package.json       # Root workspace config
```

## Key Decisions

- **Monorepo**: Easier development for small apps
- **NestJS**: Bonus points in project description - Node.js + Express would have been preferred
- **Vite**: Fast build tool and dev server for React frontend - chosen over Webpack for faster dev server startup, simpler configuration, and better ES modules support
- **RTK Query**: Caching and state management
- **Material-UI**: Quick setup

## Future Improvements

- **Testing**: Add comprehensive unit and integration tests for both frontend and backend
- **Better Error Handling**: Implement proper fallbacks for missing movie images and data
- **Paid API Service**: Migrate from Render to a paid service to avoid cold starts and spin-down issues
- **Movie Pages**: Create dedicated pages for individual movies when cards are clicked
- **Performance**: Implement image optimization, lazy loading, and code splitting

## Environment Variables

Create `backend/.env`:

```
TMDB_API_KEY=your_tmdb_api_key_here
```
