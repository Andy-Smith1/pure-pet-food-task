import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HomePage } from './components/pages/HomePage/HomePage';
import { OfferPage } from './components/pages/OfferPage/OfferPage';
import { NotFound } from './components/pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound /> // Simple page for app errors/invalid routes. Could be extended to handle different errors/codes 
  },
  {
    path: '/offer/:days',
    element: <OfferPage />
  }

])

const queryClient = new QueryClient();

const App: React.FC = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
