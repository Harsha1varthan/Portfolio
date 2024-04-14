import  Home from './pages/Home'
import { ThemeProvider } from './components/ui/theme-provider'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path = '/projects' element = {<Projects />}/>
          <Route path='/skills' element = {<Skills />}/>
          <Route path='/contact' element = {<Contact />}/>
        </Routes>
      </BrowserRouter>
      </>
    </ThemeProvider>
  )
}

export default App
