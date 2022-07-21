import { RecoilRoot } from 'recoil';
// @ts-ignore
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from 'src/Router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
