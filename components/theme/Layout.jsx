import Header from './Header'
import Footer from './Footer'
import Announcement from '../elements/Announcement'
import Cta from '../elements/Cta'
import Info from './Info'
const Layout = ({children}) => {
  return (
    <div>
        <Header /> 
        <div>
        {children}
        </div>
        <Info />
        <Cta />
        <Footer />
        {/* <Announcement text="we are looking for content writers write for us." /> */}
    </div>
  )
}

export default Layout