// @ts-ignore
import { useQuery } from 'react-query';
import { fetchUsers, IUser } from 'src/services/user';

const Home = () => {
  const { isLoading, isError, data: users } = useQuery('users', fetchUsers);
  console.log({ isLoading, isError, users });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;
  return (
    <ul>
      {users.map((user: IUser) => (
        <li key={user.id}>
          {user.id}: {user.email}
        </li>
      ))}
    </ul>
  );
};

export default Home;
