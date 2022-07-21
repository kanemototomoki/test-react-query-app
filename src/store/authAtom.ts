import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import type { IAuth } from 'src/services/login';

const authState = atom<IAuth | null>({
  key: 'auth',
  default: null,
});

export const useAuthState = () => {
  return useRecoilValue(authState);
};

export const useAuthMutator = () => {
  const setState = useSetRecoilState(authState);
  const setAuth = useCallback((user: IAuth) => setState(user), [setState]);
  const resetAuth = useCallback(() => setState(null), [setState]);

  return { setAuth, resetAuth };
};
