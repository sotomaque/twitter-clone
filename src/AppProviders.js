import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from 'context/auth-context';
import './styles/main.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount, error) {
        if (error.status === 404) return false;
        else if (failureCount < 3) return true;
        else return false;
      },
    },
  },
});

export default function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          {children}
          <ReactQueryDevtools />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}
