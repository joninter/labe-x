import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import api from '../../../services/api';
import { Countries } from '../../../utils/Countries';
import logoLabeX from '../../../assets/images/logo.png';
import {
  ContainerFormPage,
  ContainerMediumForm,
  ContainerForm,
  ContainerTextLeft,
  ContainerButton,
  FormQuestions,
  LabeXHeader,
  Header,
} from './styles';

interface body {
  tripId: string;
  name: string;
  age: number;
  country: string;
  profession: string;
  applicationText: string;
}

const ApplyToTrip: React.FC = () => {
  const [trips, setTrips] = useState([]);
  const [choiceTrip, setChoiceTrip] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [profession, setProfession] = useState('');
  const [application, setApplication] = useState('');

  useEffect(() => {
    api.get(`jonatan-machado/trips`).then((response) => {
      setTrips(response.data.trips);
    });
  }, []);

  function changeName(e: any) {
    setName(e.target.value);
  }
  function changeAge(e: any) {
    setAge(e.target.value);
  }
  function changeProfession(e: any) {
    setProfession(e.target.value);
  }
  function changeApplication(e: any) {
    setApplication(e.target.value);
  }

  function changeCountry(e: any) {
    setCountry(e.target.value);
  }

  function changeTrip(e: any) {
    setChoiceTrip(e.target.value);
  }

  async function handleApplyTrip(e: any) {
    e.preventDefault();
    const body: body = {
      name: name,
      age: age,
      country: country,
      profession: profession,
      applicationText: application,
      tripId: choiceTrip,
    };
    try {
      await api.post(`jonatan-machado/trips/${choiceTrip}/apply`, body);
      toast.success('Cadastro feito!🚀');
    } catch (err) {
      toast.error('Erro no cadastro, tente novamente 🤔');
    }
  }

  return (
    <ContainerFormPage>
      <Header>
        <LabeXHeader src={logoLabeX} alt="Logo-LabeX" />
      </Header>
      <ContainerMediumForm>
        <ContainerTextLeft>
          <h1>Seja bem-vindo!</h1>
          <h4>Venha ser o novo Marcos Pontes!</h4>
          <h2>Preencha o formulário para se candidatar!</h2>
          <ContainerButton>
            <Link to="/">
              <button>Home</button>
            </Link>
          </ContainerButton>
        </ContainerTextLeft>
        <ContainerForm>
          <FormQuestions method="post" onSubmit={handleApplyTrip}>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" value={name} onChange={changeName} />
            <label htmlFor="age">Idade</label>
            <input type="number" name="age" value={age} onChange={changeAge} />
            <label htmlFor="profession">Profissão</label>
            <input
              type="text"
              name="profession"
              value={profession}
              onChange={changeProfession}
            />
            <label htmlFor="applicationText">Porque que ir?</label>
            <textarea
              name="applicationText"
              cols={30}
              rows={10}
              value={application}
              onChange={changeApplication}
            ></textarea>
            <select name="countryChoice" onChange={changeCountry}>
              <option value="">Escolha um país</option>
              {Countries.map((Country: any) => (
                <option value={Country.Pais} key={Country.Pais}>
                  {Country.Pais}
                </option>
              ))}
            </select>
            <select name="countryChoice" onChange={changeTrip}>
              <option value="">Escolha sua viagem</option>
              {trips.map((trip: any) => (
                <option value={trip.id} key={trip.id}>
                  {trip.name} - {trip.planet}
                </option>
              ))}
            </select>
            <button type="submit">Cadastrar</button>
          </FormQuestions>
        </ContainerForm>
      </ContainerMediumForm>
    </ContainerFormPage>
  );
};

export default ApplyToTrip;
