import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingSpinner = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "200px",
      gap: 2,
    }}
  >
    <CircularProgress size={60} />
    <Typography variant="h6" color="text.secondary">
      Loading movies...
    </Typography>
  </Box>
);

export default LoadingSpinner;
