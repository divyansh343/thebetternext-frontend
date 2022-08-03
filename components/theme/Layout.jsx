import Header from './Header'
import Footer from './Footer'
import Announcement from '../elements/Announcement'
const Layout = ({children}) => {
  return (
    <div>
        {/* <Announcement /> */}
        <Header /> 
        <div>
        {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout