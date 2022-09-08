import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider';
import { PrivateRoute } from './context/PrivateRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Buy from './pages/Buy';
import { GlobalStyles } from './styles/GlobalStyle.style';
import { useState } from 'react';
import Sell from './pages/Sell';
import About from './pages/About';
import Login from './components/modal/Login';
import Register from './components/modal/Register';

function App() {
  const [ Auth, setAuth ] = useState('');

  return (
    <AuthContext.Provider value={{Auth, setAuth}}>
      <Router>
        <GlobalStyles />
        {!Auth? <Navbar />: <Navbar userloggedIn={true}/>}
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/buy' element={<Buy/>} />
          {/* <Route path='/sell' element={<PrivateRoute><Sell/></PrivateRoute>} /> */}
          <Route path='/sell' element={<Sell/>} />
          <Route path='/about' element={<About/>} />
          {/* <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/> */}
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;