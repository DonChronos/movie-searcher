import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header/header';

const App: React.FC = () => {
  return (
    <Header />
  );
}

export default App;
