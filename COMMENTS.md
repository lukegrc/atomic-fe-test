# Development Notes

## Key Technical Decisions

### Architecture

- **Monorepo**: Separate frontend/backend
- **NestJS**: I prefer Node.js+Express, but chose this due to bonus points
- **RTK Query**: State management
- **Material-UI**: Styling

### Design Choices

- **Pagination over infinite scroll**: Better UX and SEO
- **Card-based layout**: Responsive
- **Search on submit**: Reduces API calls vs real-time search

## Implementation Notes

### Backend

- Uses ConfigService for environment variables
- CORS enabled for frontend communication
- Error handling for API failures

### Frontend

- RTK Query for data fetching with automatic caching
- React Hook Form for form handling
- Responsive grid layout with Material-UI
- Genre filtering with useMemo for performance

## Areas for Future Improvement

- Unit/integration testing with Jest
- Movie details pages
- User authentication
- Advanced filtering options