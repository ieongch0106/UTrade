import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider.js';

const PrivateRoute = ({children}) => {
    const {auth} = useContext(AuthContext);

    return !auth ? <Navigate to="/login" /> : children;
}

export { PrivateRoute };