#!/bin/bash

# Movies App Setup Script
echo "Setting up Movies Application..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed. Please install Node.js (v18 or higher) first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "ERROR: Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "SUCCESS: Node.js version: $(node -v)"

# Install root dependencies
echo "Installing root dependencies..."
npm install

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Create backend .env file if it doesn't exist
if [ ! -f "backend/.env" ]; then
    echo "Creating backend .env file..."
    cp backend/env.example backend/.env
    echo "WARNING: Please edit backend/.env and add your TMDB API key"
    echo "   Get your API key from: https://www.themoviedb.org/settings/api"
else
    echo "SUCCESS: Backend .env file already exists"
fi

# Create frontend .env.local file if it doesn't exist
if [ ! -f "frontend/.env.local" ]; then
    echo "Creating frontend .env.local file..."
    cp frontend/env.example frontend/.env.local
    echo "SUCCESS: Frontend .env.local file created"
else
    echo "SUCCESS: Frontend .env.local file already exists"
fi

echo ""
echo "Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit backend/.env and add your TMDB API key"
echo "2. Run 'npm run dev' to start both frontend and backend"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "Alternative: Start services individually:"
echo "  Backend: cd backend && npm run start:dev"
echo "  Frontend: cd frontend && npm run dev"
echo ""
echo "For more information, see README.md"
