'use client'
import { Provider } from 'react-redux';
import './globals.css'
import Link from 'next/link';
import { store } from './redux';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Link href='/'></Link>
          {children}
        </Provider>
      </body>
    </html>
  );
}