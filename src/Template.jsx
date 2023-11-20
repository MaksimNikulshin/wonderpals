//Import components
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from 'components/app/Header'
import Footer from 'components/app/Footer'

export default function Template() {
  //Initialization variables
  const { pathname } = useLocation()

  //Function for scrool to top when change url location
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
