import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const Home = () => {
  const user = useSelector((state) => state.user);
  if (!user.logged_in) {
    return <Navigate replace to="/login" />;
  }
  return (
    <div>Home</div>
  );
};

export default Home;
