import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// import { Container } from './styles';
import { useParams } from 'react-router';

import api from '../../../services/api';

import { VerifyLogged } from '../../../utils/VerifyLogged';

interface pathParams {
  id: string;
}
interface body {
  approve: boolean;
}

const TripDetail: React.FC = () => {
  const [candidates, setCandidates] = useState([]);
  VerifyLogged();

  const pathParams: pathParams = useParams();

  const getToken = () => {
    return localStorage.getItem('token');
  };

  const token = getToken();

  const header: any = {
    auth: token,
  };

  useEffect(() => {
    api
      .get(`jonatan-machado/trip/${pathParams.id}`, { headers: header })
      .then((response) => {
        setCandidates(response.data.trip.candidates);
      })
      .catch((err) => {
        console.log('erro');
      });
  }, []);

  async function handleApproveCandidate(id: string) {
    const body: body = {
      approve: true,
    };

    await api.put(
      `jonatan-machado/trips/${pathParams.id}/candidates/${id}/decide`,
      body,
      { headers: header },
    );
    toast.success('🚀 Aprovado! 🛰️');
  }

  function handleDeclineCandidate(id: string) {
    const body: body = {
      approve: false,
    };
    api.put(
      `jonatan-machado/trips/${pathParams.id}/candidates/${id}/decide`,
      body,
      { headers: header },
    );
    toast.error('reprovado ❌');
  }

  return (
    <>
      <h1>Lista dos candidatos</h1>
      <table>
        <thead>
          <th />
          <th>Nome</th>
          <th>Idade</th>
          <th>País</th>
          <th>Profissão</th>
          <th>Motivo</th>
          <th>#</th>
        </thead>
        <tbody>
          {candidates.map((candidate: any) => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.age}</td>
              <td>{candidate.country}</td>
              <td>{candidate.profession}</td>
              <td>{candidate.applicationText}</td>
              <td>
                <button onClick={() => handleDeclineCandidate(candidate.id)}>
                  Reprovado
                </button>
              </td>
              <td>
                <button onClick={() => handleApproveCandidate(candidate.id)}>
                  Aprovado
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TripDetail;
