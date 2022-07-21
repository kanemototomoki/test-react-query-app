import { useForm } from 'react-hook-form';
// @ts-ignore
import { useMutation } from 'react-query';
import { IAuth, login } from 'src/services/login';
import { useAuthMutator } from 'src/store/authAtom';

type FormState = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit, formState } = useForm<FormState>({
    mode: 'onChange',
  });
  const { setAuth } = useAuthMutator();
  const { mutate, isError } = useMutation(
    (state: FormState) => login(state.email, state.password),
    {
      onSuccess: (data: { token: IAuth }) => {
        setAuth(data.token);
      },
    }
  );

  return (
    <>
      <h1>Login</h1>
      {isError && <span data-test='error'>ログインできませんでした</span>}
      <form onSubmit={handleSubmit((values) => mutate(values))}>
        <div>
          <input
            placeholder='Email'
            {...register('email', { required: 'required' })}
          />
          <span>
            {formState.errors.email && formState.errors.email.message}
          </span>
        </div>
        <div>
          <input
            placeholder='Password'
            {...register('password', { required: 'required' })}
          />
          <span>
            {formState.errors.password && formState.errors.password.message}
          </span>
        </div>
        <input
          type='submit'
          value='Login'
          disabled={!formState.isDirty || !formState.isValid}
        />
      </form>
    </>
  );
};

export default Login;
