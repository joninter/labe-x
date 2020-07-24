import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { VerifyLogged, Logout } from '../../../utils/VerifyLogged';
import { Decrypt } from '../../../utils/Cryp';
import logoLabeX from '../../../assets/images/logo.png';

import {
  ContainerADMPage,
  ContainerMediumADM,
  Text,
  ContainerButtonsADM,
  LabeXHeader,
  Header,
  HeaderButtons,
} from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();
  VerifyLogged();

  const user = Decrypt();

  function handleLogout() {
    try {
      Logout();
      history.push('/login');
    } catch (err) {
      console.log('erro ao deslogar');
    }
  }
  return (
    <ContainerADMPage>
      <Header>
        <LabeXHeader src={logoLabeX} alt="Logo-LabeX" />
        <HeaderButtons>
          <button onClick={handleLogout}>Logout</button>
        </HeaderButtons>
      </Header>

      <ContainerMediumADM>
        <Text>
          <h1>Bem vindo!</h1>
          <h2>{user}</h2>
        </Text>

        <ContainerButtonsADM>
          <Link to="/admin/cadastrar-viagem">
            <button> Cadastrar Viagens</button>
          </Link>

          <Link to="/viagens">
            <button> Listar Viagens</button>
          </Link>

          <Link to="/candidatar-se">
            <button>Se candidatar</button>
          </Link>
        </ContainerButtonsADM>
      </ContainerMediumADM>
    </ContainerADMPage>
  );
};

export default Dashboard;
