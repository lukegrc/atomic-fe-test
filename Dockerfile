# Simple Docker setup for Movies App
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY frontend/package*.json ./frontend/
COPY backend/package*.json ./backend/

# Install dependencies
RUN npm install && \
    cd frontend && npm install && cd .. && \
    cd backend && npm install && cd ..

# Copy source code
COPY . .

# Build frontend
WORKDIR /app/frontend
RUN npm run build

# Build backend
WORKDIR /app/backend
RUN npm run build

# Expose port
EXPOSE 3001

# Start backend (serves both API and frontend)
WORKDIR /app/backend
CMD ["npm", "run", "start:prod"]
