import { useCallback } from 'react';
import {
  atom,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import type { IUser } from 'src/services/user';

const userState = atom<IUser[]>({
  key: 'user',
  default: [],
});

export const useUserState = () => {
  return useRecoilValue(userState);
};

export const useUserMutator = () => {
  const setState = useSetRecoilState(userState);
  const setUser = useCallback((user: IUser[]) => setState(user), [setState]);

  return { setUser };
};
