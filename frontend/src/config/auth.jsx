
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children , isAuth}) {

    console.log("Se reenderiz√≥ el componente privateRoute");

  if (isAuth) {
    return children
  } else return <Navigate to={"/login"} />;
}
