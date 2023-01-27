import React from 'react';
import { App } from 'konsta/react';
import HomePage from './HomePage';

function MyApp() {
  return (
    <>
      {/* App component ideally should be the main root component */}
      <App theme="ios" safeAreas>
        <HomePage/>
      </App>
    </>
  );
}

export default MyApp;