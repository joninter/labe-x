import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { Container } from './styles';

type custom = () => void;

export const VerifyLogged: custom = () => {
  const history = useHistory();
  const isLogged = localStorage.getItem('token');
  useEffect(() => {
    if (isLogged === null) {
      history.push('/login');
    }
  }, []);
};

export const Logout: custom = () => {
  const isLogged = localStorage.removeItem('token');
};
