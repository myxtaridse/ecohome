import React from "react";
import "./sass/app.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MainLayout from "./layout/MainLayout";
import CatalogPage from "./pages/CatalogPage";
import Loading from "./components/Loading/Loading";
import ErrorPage from "./pages/ErrorPage";
import CartMobile from "./pages/CartMobile";
// import GoodItemPage from "./pages/GoodItemPage"

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

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={
          <MainPage />} />
        <Route path="/catalog" element={
          <React.Suspense fallback={<Loading />}>
          <CatalogPage />
        </React.Suspense>} />
        <Route path="/goods/:id" element={
          <React.Suspense fallback={<Loading />}>
            <GoodItemPage />
          </React.Suspense>
        } />
        <Route path="/*" element={
          <React.Suspense fallback={<Loading />}>
            <ErrorPage />
          </React.Suspense>
        } />
        <Route path="/favorite" element={
          <React.Suspense fallback={<Loading />}>
            <MyFavorite />
          </React.Suspense>
        } />
        <Route path="/cart" element={
          <React.Suspense fallback={<Loading />}>
            {
              window.innerWidth > 500 ? <Cart /> : <CartMobile />
            }
          </React.Suspense>
        } />
        <Route path="/checkout" element={
          <React.Suspense fallback={<Loading />}>
          {
            <Checkout />
          }
        </React.Suspense>
        } />
        <Route path="/comparison" element={
          <React.Suspense fallback={<Loading />}>
            <Comparison />
          </React.Suspense>
        } />
      </Route>
    </Routes>
  );
}

export default App;

