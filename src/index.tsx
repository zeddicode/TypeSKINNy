// index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './Greeting';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Greeting name="Gabby Racheal" />
    <Counter />
  </React.StrictMode>
);