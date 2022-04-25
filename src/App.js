import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
}

export default App;
