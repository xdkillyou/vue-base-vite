import axios from 'axios';

const API_BASE_URLS = {
  local: 'localhost:3000',
  development: 'localhost:3001',
  production: 'localhost:3002',
};

const API_BASE_PROTOCOL = {
  local: {
    http: 'http',
    websocket: 'ws',
  },
  development: {
    http: 'https',
    websocket: 'wss',
  },
  production: {
    http: 'https',
    websocket: 'wss',
  },
};

const apiEnv = import.meta.env.VITE_API_ENV;

function getData<T>(object: T, data: keyof T) {
  return object[data];
}

const baseURL = getData(API_BASE_URLS, apiEnv);
const basePROTOCOL = getData(API_BASE_PROTOCOL, apiEnv);

// 要加入統一錯誤管理來處理error 5xx問題

const API = axios.create({
  baseURL: `${basePROTOCOL.http}://${baseURL}/api`,
});

// when need token
// const APIToken = () => {
//   const { token } = window.localStorage;
//   return axios.create({
//     baseURL: `${basePROTOCOL.http}${baseURL}`,
//     headers: {
//       Authorization: token,
//     },
//   });
// };

export const signIn = (payload: any) => API.post(`account/signIn`, payload);
