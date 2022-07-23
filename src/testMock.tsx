import React, { ReactNode } from 'react';
// @ts-ignore
import { QueryClient, QueryClientProvider } from 'react-query';

export const createMockProvider = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const MockProvider = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return { MockProvider, queryClient };
};
