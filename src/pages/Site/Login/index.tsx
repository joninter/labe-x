import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import api from '../../../services/api';

import logoLabeX from '../../../assets/images/logo.png';
import { VerifyLogged } from '../../../utils/VerifyLogged';
import { Cryp } from '../../../utils/Cryp';

import {
  ContainerLoginPage,
  LabeX,
  ContainerMediumHome,
  LoginRight,
  ContainerButton,
  LoginInput,
} from './styles';

const Login: React.FC = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const token = localStorage.getItem('token');

  const history = useHistory();

  VerifyLogged();

  function Login(e: any) {
    setUser(e.target.value);
  }
  function Password(e: any) {
    setPassword(e.target.value);
  }

  const body = {
    email: user,
    password: password,
  };

  async function handleLogin(e: any) {
    e.preventDefault();
    try {
      const response = await api.post('jonatan-machado/login', body);
      localStorage.setItem('token', response.data.token);
      Cryp(response.data.user.email);
      history.push('/admin/');
    } catch (err) {
      console.log('erro', err);
    }
  }

  return (
    <ContainerLoginPage>
      <ContainerMediumHome>
        <Link to="/">
          <LabeX src={logoLabeX} alt="Logo-LabeX" />
        </Link>
        <LoginRight>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Login</label>
            <LoginInput value={user} onChange={Login} type="email" />
            <br />
            <label htmlFor="password">Senha</label>
            <LoginInput value={password} onChange={Password} type="password" />
            <ContainerButton>
              <Link to="/">
                <button type="submit">Voltar</button>
              </Link>
              <button type="submit">Logar</button>
            </ContainerButton>
          </form>
        </LoginRight>
      </ContainerMediumHome>
    </ContainerLoginPage>
  );
};

export default Login;
