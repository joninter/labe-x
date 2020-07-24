import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { VerifyLogged } from '../../utils/VerifyLogged';
import Logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  const isLogged = localStorage.getItem('token');
  if (isLogged !== '') {
    return (
      <Container>
        <Link to="/">
          <img src={Logo} alt="LabeX" />
        </Link>
        <nav>
          <ul>
            <Link to="">
              <li>Criar Viagem</li>
            </Link>
            <Link to="">
              <li>Listar Viagem</li>
            </Link>
          </ul>
        </nav>
      </Container>
    );
  } else {
    return (
      <>
        <h1>USER</h1>
      </>
    );
  }
};

export default Header;
