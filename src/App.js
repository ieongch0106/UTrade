import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Buy from './pages/Buy';
import { GlobalStyles } from './styles/GlobalStyle.style';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/buy' element={<Buy/>} />
      </Routes>
    </Router>
  )
}

export default App;