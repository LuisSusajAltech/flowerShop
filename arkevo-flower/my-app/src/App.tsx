// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';
// import PrivateRoutes from './routing/privateRoutes';
import PublicRoutes from './routing/publicRoutes';
import Header from './components/header/Header';
import {BrowserRouter as Router} from "react-router-dom";
interface AuthData {
  first_name: string,
  id: number,
  last_name: string,
}
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [authData, setAuthData] = useState<AuthData[]>([]);
  const [token, setToken] = useState('')
  // useEffect(()=>{
  //   setIsAuth(false);
  //   setAuthData([]);
  // }, [])
  const handleSetAuthData = (newAuthData: AuthData[]) => {
    setAuthData(newAuthData)
  };
  return (
  <>
    <Router>
      <Header authData={authData} setIsAuth={setIsAuth} isAuth={isAuth} setAuthData={handleSetAuthData} token={token} setToken={setToken}/>
      <PublicRoutes authData={authData}/>
      {/* {isAuth && <PrivateRoutes />} */}
    </Router>
  </>
  );
}

export default App;
