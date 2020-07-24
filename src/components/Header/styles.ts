import styled from 'styled-components';

const isLogged = localStorage.getItem('token');

export const Container = isLogged
  ? styled.header`
      background-color: #fff;
      font-family: 'Montserrat', sans-serif;

      img {
        margin-top: 20px;
        width: 130px;
      }
    `
  : styled.header`
      background-color: transparent;
      font-family: 'Montserrat', sans-serif;
    `;
