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
echo "REACT_APP_API_URL=$BACKEND_URL/api/movies" > frontend/.env.production

# Deploy frontend to GitHub Pages
echo "Deploying frontend to GitHub Pages..."
npm run deploy

echo "Deployment complete!"
echo "Frontend: https://lukegrc.github.io/atomic-fe-test"
echo "Backend: $BACKEND_URL"
