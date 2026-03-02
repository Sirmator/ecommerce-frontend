import { createBrowserRouter } from 'react-router-dom';
import HomePage, { homeLoader } from './pages/HomePage';
import ProductsPage, { productsLoader } from './pages/ProductsPage';
import ProductDetailPage, { productDetailLoader } from './pages/ProductDetailPage';
import CartPage, { cartLoader } from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrdersPage, { ordersLoader } from './pages/OrdersPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ErrorPage from './pages/ErrorPage';
import Layout from './layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: homeLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
        loader: productsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/products/:id',
        element: <ProductDetailPage />,
        loader: productDetailLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
        loader: cartLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/checkout',
        element: <CheckoutPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/orders',
        element: <OrdersPage />,
        loader: ordersLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/sign-in',
        element: <SignInPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/sign-up',
        element: <SignUpPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);
