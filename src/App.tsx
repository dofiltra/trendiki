import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from 'views/info/About'
import AuthContextProvider from 'components/Auth/AuthContextProvider'
import ContactsPage from 'views/info/Contacts'
import FooterSmall from 'components/Footer/FooterSmall'
import LocalizationProvider from 'localization/LocalizationProvider'
import LoginView from 'views/Login'
import MainView from 'views/Main'
import Navbar from 'components/Navbar/Navbar'
import Root from 'components/Root'

const App = () => {
  return (
    <BrowserRouter>
      <Root>
        <LocalizationProvider>
          <AuthContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<MainView />} />
              <Route path="/login" element={<LoginView />} />
              <Route path="/info/about" element={<AboutPage />} />
              <Route path="/info/contacts" element={<ContactsPage />} />
            </Routes>
            <FooterSmall />
          </AuthContextProvider>
        </LocalizationProvider>
      </Root>
    </BrowserRouter>
  )
}

export default App
