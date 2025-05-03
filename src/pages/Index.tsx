
import React from 'react';
import { Navigate } from 'react-router-dom';

// This page simply redirects to Home
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
