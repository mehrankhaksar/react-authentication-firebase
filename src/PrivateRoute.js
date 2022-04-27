import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContextProvider';

const PrivateRoute = ({ children }) => {
  const history = useHistory();

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return children;
  } else {
    return history.replace('/');
  }
};

export default PrivateRoute;
