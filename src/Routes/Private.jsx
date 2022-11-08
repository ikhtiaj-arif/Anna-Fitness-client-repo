import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Private = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <div>
            {/* set spinner */}
            <h2>LOading..........</h2>
        </div>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{ from: location}} replace></Navigate>




   
};

export default Private;