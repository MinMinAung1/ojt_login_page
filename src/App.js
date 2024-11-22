import { useState } from "react";
import Login from "./Page/Login";
import Register from "./Page/Register";

function App() {

  const [login,setLogin] = useState(false)

  function onLogin() {
    setLogin(true)
  }

  function onRegister() {
    setLogin(false)
  }

  return (
    <>
    {!login && <Login loginHandler={onLogin}/>}
    {login && <Register loginHandler={onRegister} />}
    </>
  
  );
}

export default App;
