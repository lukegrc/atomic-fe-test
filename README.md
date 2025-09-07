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
# Add your TMDB API key to .env
npm run start:dev
```

Backend runs on http://localhost:3001

### 3. Frontend Setup

```bash
cd frontend
npm start
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

```bash
# Build Docker image
npm run docker:build

# Run container
npm run docker:run
```

## API Endpoints

- `GET /movies/popular?page=1` - Get popular movies
- `GET /movies/search?query=batman&page=1` - Search movies
- `GET /movies/genres` - Get movie genres

## Project Structure

```
├── frontend/          # React frontend
├── backend/           # NestJS backend
├── docker-compose.yml # Docker setup
└── package.json       # Root workspace config
```

## Key Decisions

- **Monorepo**: Easier dependency management and development workflow
- **NestJS**: TypeScript-first, decorator-based architecture
- **RTK Query**: Automatic caching and state management
- **Material-UI**: Consistent design system and accessibility
- **Pagination**: Better UX than infinite scroll for this use case

## Environment Variables

Create `backend/.env`:

```
TMDB_API_KEY=your_tmdb_api_key_here
```
