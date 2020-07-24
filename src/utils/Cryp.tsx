import { Base64 } from 'js-base64';

export const Cryp: any = (user: any) => {
  const userCryp = Base64.encode(user);
  localStorage.setItem('name', userCryp);
};

export const Decrypt: any = () => {
  const user: any = localStorage.getItem('name');
  const userDecrypt = Base64.decode(user);
  return userDecrypt;
};
