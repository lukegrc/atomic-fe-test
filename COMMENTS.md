# Comments & Notes

### Slow API Startup on Render Free Tier

The free tier on Render spins down after inactivity, causing slow API startup times (30+ seconds) on first request. This is a common issue with free hosting services that use "cold start" architecture to save resources.

**Future Improvement:**
This issue is already noted in the Future Improvements section of README.md as migrating to a paid API service to avoid cold starts and spin-down issues.
