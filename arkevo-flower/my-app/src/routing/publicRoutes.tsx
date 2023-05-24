import { Routes, Route } from 'react-router-dom'
import Home from '../pages/homePage/Home';
import NotFound from './NotFound';

interface AuthData {
    first_name: string,
    id: number,
    last_name: string,
}
  
interface PublicRoutesAuthData {
    authData: AuthData[];
}

export default function PublicRoutes({authData} : PublicRoutesAuthData) {
  return (
    <Routes>
        <Route path="/" element={<Home authData={authData}/>}/>
        {/* <Route path="/latestSighting" element={<NotFound />}/> */}
        <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}
