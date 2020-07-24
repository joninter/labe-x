import React from 'react';
import { Link } from 'react-router-dom';
import logoLabeX from '../../../assets/images/logo.png';

import {
  ContainerHomePage,
  LabeX,
  ContainerMediumHome,
  ContainerButton,
} from './styles';

const Home: React.FC = () => {
  return (
    <ContainerHomePage>
      <ContainerMediumHome>
        <LabeX src={logoLabeX} alt="Logo-LabeX" />
        <ContainerButton>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cadastro">
            <button>Registre-se</button>
          </Link>
        </ContainerButton>
      </ContainerMediumHome>
    </ContainerHomePage>
  );
};

export default Home;
