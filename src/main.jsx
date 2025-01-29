import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/store.js';

createRoot(document.getElementById('root')).render(
        <StrictMode>
                <HelmetProvider>
                        <div>
                                <Provider store={store}>
                                        <RouterProvider router={router} />
                                        <Toaster position="top-center" />
                                </Provider>
                        </div>
                </HelmetProvider>
        </StrictMode>,
);
