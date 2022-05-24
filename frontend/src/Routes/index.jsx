import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Tasks from '../pages/Tasks';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/tasks" /> } />
      <Route exact path="/tasks" element={ <Tasks /> } />
    </Routes>
  );
}

export default Router;