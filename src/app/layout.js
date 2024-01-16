'use client'
import { Provider } from 'react-redux';
import './globals.css'
import { store } from './redux';
import i18n from '@/i18next/i18next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}