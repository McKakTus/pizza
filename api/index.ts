import Cookies from 'nookies';
import axios from 'axios';
import { UserApi } from './UserApi';

type ApiReturnType = ReturnType<typeof UserApi>;

// TODO: Типизировать
export const Api = (ctx: any): ApiReturnType => {
  const cookies = Cookies.get(ctx);
  const token = cookies.token;

  const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return [UserApi].reduce((prev, f) => ({ ...prev, ...f(instance) }), {} as ApiReturnType);
};