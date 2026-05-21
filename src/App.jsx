import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {ShmitterContext} from "./utils/context.js";


function App() {
  const [user, setUser] = useState({
    avatar: 'https://gravatar.com/avatar/000?d=monsterid',
    name: 'Monster',
  });

  const [stats, setStats] = useState({
    followers: 100,
    following: 50,

  });

  return (
    <div className={'app'}>
      <ShmitterContext value={{user, stats, setUser}}>
      <Navigation/>
      <Body/>
        </ShmitterContext>
    </div>
  )
}

export default App
