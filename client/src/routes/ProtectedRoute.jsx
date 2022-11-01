import React from 'react';
import { Navigate } from 'react-router-dom';

const currentUser = true;
const ProtectedRoute = ({ children }) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
