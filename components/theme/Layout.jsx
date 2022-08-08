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
        <Announcement text="We are working with influencer marketing company" />
    </div>
  )
}

export default Layout