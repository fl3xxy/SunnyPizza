import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider,  } from 'styled-components';
import { theme } from "./theme";
import HomePage from "./components/views/HomePage/HomePage";
import MenuPage from "./components/views/MenuPage/MenuPage";
import AboutPage from "./components/views/AboutPage/AboutPage";
import ContactPage from "./components/views/ContactPage/ContactPage";


function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/pizza-menu' element={<MenuPage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
