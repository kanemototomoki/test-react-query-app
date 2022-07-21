import { client } from './axios';

export interface IAuth {
  token: string;
}

export const login = async (
  email: string,
  password: string
): Promise<IAuth> => {
  const res = await client.post<IAuth>('/posts', { email, password });
  return res.data;
};
