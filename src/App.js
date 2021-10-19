import { createContext, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import './App.css'

export const AuthContext = createContext(null)

function App() {
  const [user, setUser] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <AuthContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
    <div className="App">
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
    </ AuthContext.Provider>
  );
}

export default App;
