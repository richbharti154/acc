import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import App from './App';
// import Accordion from './accordion'
import FetchApi from './Fetch api'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FetchApi />
  </StrictMode>
);
