"use client"
import Link from 'next/link'
import './globals.css'
import { Provider } from 'react-redux'
import { store } from './redux'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* connect redux toolkit in project */}
        <Provider store={store}>
          <Link href='/'></Link>
          <Link href='/about'></Link>
          {children}
        </Provider>
      </body>
    </html>
  )
}