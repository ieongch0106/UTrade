import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider';
import { PrivateRoute } from './context/PrivateRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Buy from './pages/Buy';
import { GlobalStyles } from './styles/GlobalStyle.style';
import { useEffect, useState } from 'react';
import Sell from './pages/Sell';
import About from './pages/About';
import Post from './components/Post';
import Login from './components/modal/Login';
import { CircularProgress } from '@mui/material';

function App() {
  const [ Auth, setAuth ] = useState('');
  const [ Loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500);
    if (sessionStorage.getItem('token')) {
      setAuth({ user: JSON.parse(sessionStorage.getItem('token')).name });    
    }

    if (localStorage.getItem('token')) {
      setAuth({ user: JSON.parse(localStorage.getItem('token')).name });    
    }
  }, []);

  return (
    <AuthContext.Provider value={{Auth, setAuth}}>
      <Router>
        <GlobalStyles />
        {!Auth? <Navbar />: <Navbar userloggedIn={true}/>}
        {Loading ?
          <div className='top-50 start-50 position-absolute'>
            <CircularProgress sx={{color: "var(--primary)"}} size={60}/>
          </div> :
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/buy' element={<Buy />} />
            <Route path='/post/:id' element={<Post />} />
            <Route path='/sell' element={<PrivateRoute><Sell/></PrivateRoute>} />
            <Route path='/about' element={<About />} />
            {!Auth ? <Route path='/login' element={<Login />} /> : <Route path='/login' element={<Home />} />}
          </Routes>
        }
      </Router>
    </AuthContext.Provider>
  )
}

export default App;