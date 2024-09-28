'use client'
import { createContext } from 'react'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from '@/app/bocucweb/app.header';
import AppFooter from '@/app/bocucweb/app.footer';
import AppTable from '@/app/bocucweb/app.table';
import Container from 'react-bootstrap/Container';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <Container>
          {children}
        </Container>
        <AppFooter />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  )
}