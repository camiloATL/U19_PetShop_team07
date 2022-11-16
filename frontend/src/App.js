
import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./config/constants";
import Loading from "./shared/loading";
import RoutesApp from "./routes";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    
    axios
      .get(BASE_URL + "/auth/verify", { headers: { Authorization: token } })
      .then(() => {
        setIsAuth(true);
      })
      .catch(() => {
        setIsAuth(false);
      })
      .finally(() => {
        setIsLoading(false)
      });

    return () => {};
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <RoutesApp isAuth={isAuth}/>
    );
  }
}

export default App;
