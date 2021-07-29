import './App.css';
import { Route } from "react-router-dom"
import Home from './views/Home/Home'

function App() {
  return (
    <div className="App">
      {/* route all todos */}
      <Route path='/'>
        <Home />
      </Route>
      {/* route a single todo */}
      {/* route create todo */}
      {/* route login */}
      {/* route sign-up */}
    </div>
  );
}

export default App;
