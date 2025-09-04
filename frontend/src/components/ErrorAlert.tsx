import React from "react";

interface ErrorAlertProps {
  message: string;
}

const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return <div style={{ color: "red" }}>Error: {message}</div>;
};

export default ErrorAlert;