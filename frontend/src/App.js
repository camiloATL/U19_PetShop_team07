import Login from './pages/auth/login';
import {Routes, Route, Link} from "react-router-dom"

//Estilos
import './App.css';
import Home from './pages/admin/home';
import PrivateRoute from './config/auth';




function App() {

  return (
    <Routes>
      <Route path='' element={ <PrivateRoute>  <Home/> </PrivateRoute> }/>
      <Route path='/login' element={ <Login  titulo={"Omega"}/> }/>
    </Routes>


  );
}

export default App;
