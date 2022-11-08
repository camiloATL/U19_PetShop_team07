import { Routes, Route } from "react-router-dom";

//Estilos
import "./App.css";
//import Home from "./pages/admin/home";
import PrivateRoute from "./config/auth";
import Admin from "./pages/admin";
import Login from "./pages/login";
import UpdateUsuario from "./pages/admin/update-usuario";

function App() {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <PrivateRoute> 
            <Admin />
          </PrivateRoute>
        }
      >
        <Route path="usuario" element={ <UpdateUsuario/> } />

      </Route>
      <Route path="/login" element={<Login titulo={"Omega"} />} />
    </Routes>
  );
}

export default App;
