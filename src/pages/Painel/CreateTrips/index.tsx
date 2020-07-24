import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import api from '../../../services/api';
import { VerifyLogged } from '../../../utils/VerifyLogged';
import logoLabeX from '../../../assets/images/logo.png';

import {
  ContainerCreateTripPage,
  ContainerMediumADM,
  Text,
  ContainerForm,
  LabeXHeader,
  Header,
  HeaderButtons,
  FormQuestionsCreate,
} from './styles';

interface body {
  name: string;
  planet: string;
  date: string;
  description: string;
  durationInDays: number;
}

const CreateTrips: React.FC = () => {
  const [name, setName] = useState('');
  const [planet, setPlanet] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [durationInDay, setDurationInDay] = useState(0);

  VerifyLogged();

  const planets: string[] = [
    'Mercúrio',
    'Vênus',
    'Terra',
    'Marte',
    'Júpiter',
    'Saturno',
    'Urano',
    'Netuno',
  ];

  function ChangeName(e: any) {
    setName(e.target.value);
  }

  function ChangePlanet(e: any) {
    setPlanet(e.target.value);
  }

  function ChangeDescription(e: any) {
    setDescription(e.target.value);
  }

  function ChangeDate(e: any) {
    setDate(e.target.value);
  }

  function ChangeDuration(e: any) {
    setDurationInDay(e.target.value);
  }

  let body: body = {
    name: name,
    date: date,
    description: description,
    planet: planet,
    durationInDays: durationInDay,
  };

  const getToken = () => {
    return localStorage.getItem('token');
  };

  const token = getToken();

  const header: any = {
    auth: token,
  };

  async function handleCreateTrip(e: any) {
    e.preventDefault();

    try {
      await api.post('jonatan-machado/trips', body, { headers: header });
      toast.success('Cadastro feito! 🚀');
    } catch (err) {
      toast.error('erro ao cadastrar viagem! 🤔');
    }
  }

  return (
    <ContainerCreateTripPage>
      <Header>
        <LabeXHeader src={logoLabeX} alt="Logo-LabeX" />
        <HeaderButtons>
          <Link to="/admin">
            <button>Voltar</button>
          </Link>
        </HeaderButtons>
      </Header>
      <ContainerMediumADM>
        <Text>
          <h1>Criação de viagem!</h1>
          <h3>Preencha o formulário ao lado com as informações da viagem</h3>
        </Text>
      </ContainerMediumADM>
      <ContainerForm>
        <FormQuestionsCreate onSubmit={handleCreateTrip}>
          <label htmlFor="name">Nome</label>
          <input value={name} onChange={ChangeName} />
          <label htmlFor="planet">Planeta</label>
          <select name="planetsChoices" onChange={ChangePlanet}>
            <option value={''}>Escolha um planeta</option>
            {planets.map((planet) => (
              <option value={planet} key={planet}>
                {planet}
              </option>
            ))}
          </select>
          <label htmlFor="date">Data</label>
          <input value={date} onChange={ChangeDate} type="date" />
          <label htmlFor="description">Descrição</label>
          <input value={description} onChange={ChangeDescription} />
          <label htmlFor="duration">Duração</label>
          <input value={durationInDay} onChange={ChangeDuration} />
          <button>Cadastrar</button>
        </FormQuestionsCreate>
      </ContainerForm>
    </ContainerCreateTripPage>
  );
};

export default CreateTrips;
