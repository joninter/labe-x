import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import logoLabeX from '../../../assets/images/logo.png';
import {
  ContainerRegisterPage,
  LabeX,
  ContainerMediumHome,
  RegisterRight,
  ContainerButton,
} from './styles';

interface body {
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onchangePassword(e: any) {
    setPassword(e.target.value);
  }
  function onchangeEmail(e: any) {
    setEmail(e.target.value);
  }

  const body: body = {
    email: email,
    password: password,
  };

  function handleLogin(e: any) {
    e.preventDefault();
    api.post('jonatan-machado/signup', body);
    toast.success('cadastro pronto 😎');
  }

  return (
    <ContainerRegisterPage>
      <ContainerMediumHome>
        <LabeX src={logoLabeX} alt="Logo-LabeX" />
      </ContainerMediumHome>
      <RegisterRight>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">E-mail</label>
          <input value={email} onChange={onchangeEmail} type="email" required />
          <br />
          <label htmlFor="password">Senha</label>
          <input
            value={password}
            onChange={onchangePassword}
            type="password"
            required
          />
          <ContainerButton>
            <Link to="/">
              <button type="submit">Voltar</button>
            </Link>
            <button type="submit">Registrar</button>
          </ContainerButton>
        </form>
      </RegisterRight>
    </ContainerRegisterPage>
  );
};

export default Register;
