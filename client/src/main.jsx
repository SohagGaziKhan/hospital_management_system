import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createContext, useState } from "react";

export const Context = createContext({ isAuth: false });

const Apps = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      <App />
    </Context.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Apps />
  </BrowserRouter>
);
