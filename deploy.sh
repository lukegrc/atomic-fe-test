#!/bin/bash

echo "Deploying Movie Library App..."

# Check if backend URL is provided
if [ -z "$1" ]; then
    echo "ERROR: Please provide your Render backend URL"
    echo "Usage: ./deploy.sh https://your-app.onrender.com"
    exit 1
fi

BACKEND_URL=$1

# Create production environment file
echo "Creating production environment file..."
echo "VITE_API_URL=$BACKEND_URL/api/movies" > frontend/.env.production

# Build and commit changes
echo "Building frontend..."
cd frontend && npm run build && cd ..

# Commit and push changes
echo "Committing and pushing changes..."
git add .
git commit -m "Update production environment for deployment"
git push origin main

echo "Deployment complete!"
echo "Frontend: https://lukegrc.github.io/movies-app/"
echo "Backend: $BACKEND_URL"
