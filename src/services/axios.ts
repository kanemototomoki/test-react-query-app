import axios from 'axios';
import { useAuthMutator } from 'src/store/authAtom';

export const client = axios.create();
export const API_URL = 'https://jsonplaceholder.typicode.com';
client.defaults.baseURL = API_URL;

client.interceptors.request.use((request) => {
  if (!request.headers) {
    return request;
  }
  return request;
});

client.interceptors.response.use((response) => {
  if (response.status === 403) {
    const { resetAuth } = useAuthMutator();
    resetAuth();
  }

  if (response.status === 201) {
    const str = `${response.data.email}_${response.data.password}_${response.data.id}`;
    response.data.token = str;
  }

  return response;
});
