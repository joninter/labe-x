import styled from 'styled-components';

export const ContainerADMPage = styled.body`
  display: flex;
  flex-direction: column;
  background-image: url('https://img.redbull.com/images/w_3000/q_auto,f_auto/redbullcom/2019/01/08/6dca0c95-6d53-4948-be46-7fe472e011d3/lunar-orbital-platform-gateway');
  width: 100vw;
  height: 100vh;
  color: white;
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

export const HeaderButtons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-right: 100px;
  width: 200vw;
  height: 80px;
`;

export const ContainerMediumADM = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 800px;
  height: 450px;
  margin: auto;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 150px;
  color: white;
  text-shadow: 2px 2px 5px gray;
`;

export const ContainerButtonsADM = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 200px;
  height: 150px;
  color: #ff8000;

  button {
    margin-bottom: 10px !important;
  }
`;
