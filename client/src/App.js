import './App.css';
import { Route } from "react-router-dom"
import { useState } from 'react'
import Home from './views/Home/Home'
import SignUp from './views/SignUp/SignUp'
import SignIn from './views/SignIn/SignIn'

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      {/* route all todos */}
      <Route exact path='/'>
        <Home user={user}/>
      </Route>
      {/* route a single todo */}
      {/* route create todo */}
      {/* route login */}
      <Route path="/sign-in">
        <SignIn setUser={setUser} user={user}/>
      </Route>
      {/* route sign-up */}
      <Route path="/sign-up">
        <SignUp setUser={setUser} user={user}/>
      </Route>
    </div>
  );
}

export default App;
