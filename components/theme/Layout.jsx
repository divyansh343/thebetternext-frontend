import Header from './Header'
import Footer from './Footer'
import Announcement from '../elements/Announcement'
import Cta from '../elements/Cta'
const Layout = ({children}) => {
  return (
    <div>
        <Header /> 
        <div>
        {children}
        </div>
        <Cta />
        <Footer />
        <Announcement text="we are looking for content writers write for us." />
    </div>
  )
}

export default Layout