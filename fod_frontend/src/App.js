
import './App.module.css';
import SignUp from './components/SignUp/SignUp'
import {Container} from 'react-bootstrap';
import Login from './components/Login/Login'
import { AuthProvider } from './context/AuthContext';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CharityDetails from './components/CharityDetails/CharityDetails';

function App() {
  return (
    <div className="App">
    <Router>
      <AuthProvider>
        <Switch>
            <Route  path="/signup" component={SignUp}/>
            <Route path="/login" component={Login}/>
            <Route path="/charity/:id" children={<CharityDetails />}/>
            <Route exact path ="/" component={Dashboard}/>
            
        </Switch>
      </AuthProvider>
    </Router>
    </div>
  );
}

export default App;
