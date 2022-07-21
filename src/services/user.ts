import { client } from './axios';

export interface IUser {
  id: number;
  email: string;
}

export const fetchUsers = async (): Promise<IUser[]> => {
  const res = await client.get<IUser[]>('/users');
  console.log({ res });
  return res.data;
};
