import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';
import { VerifyLogged } from '../../../utils/VerifyLogged';
import logoLabeX from '../../../assets/images/logo.png';
import {
  ContainerListTripPage,
  ContainerMediumList,
  Text,
  ContainerList,
  LabeXHeader,
  Header,
  HeaderButtons,
  TableList,
} from './styles';

const ListTrips: React.FC = () => {
  const [listTrips, setListTrips] = useState([]);

  VerifyLogged();

  useEffect(() => {
    api.get('jonatan-machado/trips').then((response) => {
      setListTrips(response.data.trips);
    });
  }, []);

  let lists: string[] = listTrips;
  return (
    <ContainerListTripPage>
      <Header>
        <LabeXHeader src={logoLabeX} alt="Logo-LabeX" />
        <HeaderButtons>
          <Link to="/admin">
            <button>Voltar</button>
          </Link>
        </HeaderButtons>
      </Header>
      <ContainerMediumList>
        <Text>
          <h1>Viagens Disponíveis</h1>
        </Text>
        <ContainerList>
          <TableList>
            <thead>
              <th />
              <th>Nome da Viagem</th>
              <th>Planeta</th>
              <th>Data</th>
              <th>Descrição</th>
              <th>Duração em dias (Terra)</th>
            </thead>
            <tbody>
              {lists.map((trip: any) => (
                <tr>
                  <td>{trip.name}</td>
                  <td>{trip.planet}</td>
                  <td>{trip.date}</td>
                  <td>{trip.description}</td>
                  <td>{trip.durationInDays}</td>
                  <td>
                    <Link to={`/admin/detalhes-da-viagem/${trip.id}`}>
                      Ver Candidatos
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </TableList>
        </ContainerList>
      </ContainerMediumList>
    </ContainerListTripPage>
  );
};

export default ListTrips;
