import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Toaster } from 'react-hot-toast';

import 'modern-normalize/modern-normalize.css';
import './index.css'; // если используешь, иначе можно удалить

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster position="top-right" />
  </StrictMode>
);