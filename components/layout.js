import Styles from 'components/container'
import Header from 'components/header'
import Footer from 'components/footer'
import Container from 'components/container'

export default function Layout({children}) {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>
      
      <Footer />
    </>
  )
}
