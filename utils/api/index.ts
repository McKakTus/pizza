import Cookies, { parseCookies } from 'nookies';
import axios from 'axios';
import { GetServerSidePropsContext, NextPageContext } from 'next';
import { UserApi } from './UserApi';

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>;
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies();
  const token = cookies.token;

  const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  const apis = {
    user: UserApi,
  };

  const result = Object.entries(apis).reduce((prev, [key, f]) => {
    return {
      ...prev,
      [key]: f(instance),
    };
  }, {} as ApiReturnType);

  return result;
};