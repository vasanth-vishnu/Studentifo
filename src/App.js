
import Body from './components/Body';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/register">
        <Register/>
        </Route>
        <Route path="/" exact>
          <Body />
        </Route>
        <Route path="/home">
          <Dashboard />
        </Route>
      </Router>     
    </div>
  );
}

export default App;
