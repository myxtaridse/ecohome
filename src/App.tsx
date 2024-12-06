import React from "react";
import "./sass/app.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MainLayout from "./layout/MainLayout";
import CatalogPage from "./pages/CatalogPage";
// import Loading from "./components/Loading/Loading";
import ErrorPage from "./pages/ErrorPage";
import CartMobile from "./pages/CartMobile";
import UserIn from "./layout/UserInLayout";
import ActionsLayout from "./layout/ActionsLayout";
import Loader from './components/Loader/Loader'

function App() {

  const GoodItemPage = React.lazy(
    () =>
      import(/* webpackChunkName: "GoodItemPage" */ "./pages/GoodItemPage")
  );
  const MyFavorite = React.lazy(
    () =>
      import(/* webpackChunkName: "MyFavorite" */ "./pages/MyFavorite")
  );
  const Cart = React.lazy(
    () =>
      import(/* webpackChunkName: "Cart" */ "./pages/Cart")
  );
  const Comparison = React.lazy(
    () =>
      import(/* webpackChunkName: "Comparison" */ "./pages/Comparison")
  );
  const Checkout = React.lazy(
    () =>
      import(/* webpackChunkName: "Checkout" */ "./pages/Checkout")
  );
  const LogIn = React.lazy(
    () =>
      import(/* webpackChunkName: "LogIn" */ "./pages/LogIn")
  );
  const Auth = React.lazy(
    () =>
      import(/* webpackChunkName: "Auth" */ "./pages/Auth")
  );
  const User = React.lazy(
    () =>
      import(/* webpackChunkName: "User" */ "./pages/User")
  );
  const SettingsProfile = React.lazy(
    () =>
      import(/* webpackChunkName: "SettingsProfile" */ "./pages/SettingsProfile")
  );

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={
          <MainPage />} />
        <Route path="/catalog" element={
          <React.Suspense fallback={<Loader />}>
          <CatalogPage />
        </React.Suspense>} />
        <Route path="/item/:id" element={
          <React.Suspense fallback={<Loader />}>
            <GoodItemPage />
          </React.Suspense>
        } />
        <Route path="/*" element={
          <React.Suspense fallback={<Loader />}>
            <ErrorPage />
          </React.Suspense>
        } />
        <Route element={<ActionsLayout />}>
              <Route path="/favorite" element={
                <React.Suspense fallback={<Loader />}>
                  <MyFavorite />
                </React.Suspense>
              } />
              <Route path="/comparison" element={
                <React.Suspense fallback={<Loader />}>
                  <Comparison />
                </React.Suspense>
              } />
        </Route>
        
        <Route path="/cart" element={
          <React.Suspense fallback={<Loader />}>
            {
              window.innerWidth > 500 ? <Cart /> : <CartMobile />
            }
          </React.Suspense>
        } />
        <Route path="/checkout" element={
          <React.Suspense fallback={<Loader />}>
          {
            <Checkout />
          }
        </React.Suspense>
        } />
        <Route path="/user" element={
          <React.Suspense fallback={<Loader />}>
            <User />
          </React.Suspense>
        } />
        <Route path="/settings" element={
          <React.Suspense fallback={<Loader />}>
            <SettingsProfile />
          </React.Suspense>
        } />
        
        </Route>
        <Route path="/loader" element={
          <React.Suspense fallback={<Loader />}>
            <Loader />
          </React.Suspense>
        } />
      <Route element={<UserIn />}>
          <Route path="/login" element={
              <React.Suspense fallback={<Loader />}>
                <LogIn />
              </React.Suspense>
            } />
          <Route path="/auth" element={
              <React.Suspense fallback={<Loader />}>
                <Auth />
              </React.Suspense>
            } />
      </Route>
    </Routes>
  );
}

export default App;

