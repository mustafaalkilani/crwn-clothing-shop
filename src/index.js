import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Elements } from '@stripe/react-stripe-js';

import './index.scss';
import App from './App';
import { UserProvider } from './component/context/user.context';
import { CategoriesProvider } from './component/context/categories.context';
import { CartDropdownProvider } from './component/context/cart-dorpdown.context';
import { WebsiteThemeProvider } from './component/context/theme-color.context';
import { HandelFormProvider } from './component/context/handel-form-errors.context';
import { stripePromise } from './utils/firebase/stripe/stripe.utils';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <WebsiteThemeProvider>
        <UserProvider>
          <CategoriesProvider>
            <HandelFormProvider>
              <CartDropdownProvider>
                <Elements stripe={stripePromise}>
                  <App />  
                </Elements>
              </CartDropdownProvider>
            </HandelFormProvider>
          </CategoriesProvider>
        </UserProvider>
      </WebsiteThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
