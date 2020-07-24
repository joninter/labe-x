import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
html,
body,
#root {
  height: 100%;
}
body {
  background: #f5f5f5;
}
body,
input,
button {
  font-family: 'Montserrat', sans-serif;
}
button{
  cursor: pointer;
  background:#9159c1;
  border:0;
  padding:15px;
  border-radius:20px 20px 20px 20px;
}
`;
