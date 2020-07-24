import React, { useState } from 'react';

// import { Container } from './styles';
const VerifyDatas: any = (
  name: string,
  planet: string,
  date: string,
  description: string,
  durationInDay: number,
) => {
  const [userName, setUserName] = useState('');
  const [choicePlanet, setChoicePlanet] = useState('');
  const [choiceDate, setChoiceDate] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [durationTrip, setDurationTrip] = useState(0);

  if (name.length < 5) {
    return console.log('Nome menor que 5 caracteres!');
  }
  if (planet === '') {
    return console.log('Escolha um planeta!');
  }
  if (date) {
    return console.log('Nome menor que 5 caracteres!');
  }
  if (description.length < 30) {
    return console.log('Descrição deve conter no mínimo 30 caracteres');
  }
  if (durationInDay < 50) {
    return console.log('Duração não pode ser menor que 50 dias (terra)');
  } else {
    setUserName(name);
    setChoicePlanet(planet);
    setChoiceDate(date);
    setUserDescription(description);
    setDurationTrip(durationInDay);
    return [userName, choicePlanet, choiceDate, userDescription];
  }
};
export default VerifyDatas;
