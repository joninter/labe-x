import styled from 'styled-components';

export const ContainerFormPage = styled.body`
  display: flex;
  flex-direction: column;
  background-image: url('https://static.scientificamerican.com/sciam/cache/file/0747F4F8-E859-40FF-8E9817304493B7B3_source.png');
  width: 100vw;
  height: 100vh;
  color: white;
`;

export const ContainerMediumForm = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1000px;
  height: 450px;
  margin: auto;
`;
export const ContainerTextLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-shadow: 2px 2px 5px gray;
`;

export const ContainerForm = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  color: #ff8000;
  background-color: rgba(69, 82, 91, 0.8);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
`;

export const FormQuestions = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const LabeXHeader = styled.img`
  display: flex;
  margin-left: 100px;
  width: 250px;
  height: 50px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 80px;
`;
