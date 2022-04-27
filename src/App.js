import AuthContextProvider from './contexts/AuthContextProvider';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <AuthContextProvider>
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Redirect from="/" to="/login" />
      </Switch>
    </AuthContextProvider>
  );
}

export default App;
