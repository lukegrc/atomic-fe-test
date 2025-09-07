# GitHub Pages Deployment Guide

## 🚀 Automated Deployment Setup

Your project is now configured for automated deployment to GitHub Pages using GitHub Actions.

### What's Been Set Up

1. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)

   - Automatically builds and deploys on every push to `main` branch
   - Uses Node.js 18 and npm caching for faster builds
   - Deploys to GitHub Pages using the `gh-pages` branch

2. **Frontend Configuration**
   - Updated `vite.config.ts` with correct base path for GitHub Pages
   - Removed manual deployment scripts (now handled by GitHub Actions)

### Prerequisites

1. **Enable GitHub Pages** in your repository:

   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Backend Deployment** (Required for full functionality):
   - Deploy your backend to a service like Render, Railway, or Heroku
   - Get the backend URL (e.g., `https://your-app.onrender.com`)

### Environment Variables

Create a `.env.production` file in the `frontend` directory:

```bash
# frontend/.env.production
VITE_API_URL=https://your-backend-url.com/api/movies
```

Replace `https://your-backend-url.com` with your actual deployed backend URL.

### Deployment Process

1. **Push to main branch**:

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Monitor deployment**:

   - Go to your repository on GitHub
   - Click on "Actions" tab
   - Watch the "Deploy to GitHub Pages" workflow

3. **Access your app**:
   - Your app will be available at: `https://lukegrc.github.io/movies-app/`

### Manual Deployment (Alternative)

If you prefer manual deployment, you can use the existing setup:

```bash
# Build and deploy manually
cd frontend
npm run build
npx gh-pages -d dist
```

### Troubleshooting

1. **Build fails**: Check the Actions tab for error details
2. **App doesn't load**: Verify the base path in `vite.config.ts` matches your repository name
3. **API calls fail**: Ensure your backend is deployed and the `VITE_API_URL` is correct

### Custom Domain (Optional)

To use a custom domain:

1. Add your domain to the `cname` field in `.github/workflows/deploy.yml`
2. Create a `CNAME` file in your repository root with your domain
3. Configure DNS settings with your domain provider

### Backend Deployment Options

#### Option 1: Render (Free)

1. Sign up at [render.com](https://render.com)
2. Connect your GitHub repository
3. Create a new Web Service
4. Set root directory to `backend`
5. Add environment variable: `TMDB_API_KEY=your_key`

#### Option 2: Railway

1. Sign up at [railway.app](https://railway.app)
2. Deploy from GitHub
3. Set root directory to `backend`
4. Add environment variables

#### Option 3: Heroku

1. Install Heroku CLI
2. Create app: `heroku create your-app-name`
3. Set environment: `heroku config:set TMDB_API_KEY=your_key`
4. Deploy: `git push heroku main`

### Next Steps

1. Deploy your backend to one of the services above
2. Update the `VITE_API_URL` in your frontend environment
3. Push your changes to trigger the GitHub Actions deployment
4. Your app will be live at `https://lukegrc.github.io/movies-app/`
