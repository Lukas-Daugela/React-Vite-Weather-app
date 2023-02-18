import './sass/index.scss';

import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { Spinner } from './components/Loaders';

const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
