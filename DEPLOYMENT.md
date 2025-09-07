# Full Stack Deployment Guide

## 🚀 Deploy Both Frontend & Backend

### Option 1: Render (Recommended - 100% Free)

#### Backend Deployment:

1. **Sign up at Render**: https://render.com
2. **Connect GitHub**: Link your repository
3. **Create New Web Service**: Choose "Deploy from GitHub repo"
4. **Select Repository**: `lukegrc/movies-app`
5. **Configure Service**:
   - Root Directory: `backend`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start:prod`
   - Plan: **Free**
6. **Add Environment Variable**:
   - Key: `TMDB_API_KEY`
   - Value: Your TMDB API key
7. **Deploy**: Render will automatically deploy

#### Frontend Deployment:

1. **Get Backend URL**: Copy the Render URL (e.g., `https://your-app.onrender.com`)
2. **Update Frontend**:
   ```bash
   # Create production env file
   echo "REACT_APP_API_URL=https://your-app.onrender.com/api/movies" > frontend/.env.production
   ```
3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

### Option 2: Heroku (Alternative)

#### Backend Deployment:

1. **Install Heroku CLI**: https://devcenter.heroku.com/articles/heroku-cli
2. **Login**: `heroku login`
3. **Create App**: `heroku create your-app-name`
4. **Set Environment Variable**:
   ```bash
   heroku config:set TMDB_API_KEY=your_api_key
   ```
5. **Deploy**: `git push heroku main`

#### Frontend Deployment:

1. **Update API URL** in `frontend/src/store/api.ts`
2. **Deploy**: `npm run deploy`

### Option 3: Vercel (Frontend) + Railway (Backend)

#### Backend: Follow Railway steps above

#### Frontend:

1. **Sign up at Vercel**: https://vercel.com
2. **Import Project**: Connect your GitHub repo
3. **Configure**:
   - Root Directory: `frontend`
   - Build Command: `npm run build`
4. **Add Environment Variable**:
   - `REACT_APP_API_URL`: Your Railway backend URL
5. **Deploy**: Automatic deployment

## 🔧 Quick Commands

```bash
# Deploy frontend only
npm run deploy

# Build Docker image
npm run docker:build

# Run Docker locally
npm run docker:run
```

## 📝 Environment Variables

### Backend (.env):

```
TMDB_API_KEY=your_tmdb_api_key
PORT=3001
```

### Frontend (.env.production):

```
REACT_APP_API_URL=https://your-backend-url.railway.app/api/movies
```

## ✅ Testing Deployment

1. **Backend**: Visit `https://your-backend-url.railway.app/api/movies/popular`
2. **Frontend**: Visit `https://lukegrc.github.io/movies-app`
3. **Full App**: Test search, filter, and pagination
