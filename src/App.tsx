import React from "react";
import "./sass/app.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MainLayout from "./layout/MainLayout";
import CatalogPage from "./pages/CatalogPage";
import Loading from "./components/Loading/Loading";
import ErrorPage from "./pages/ErrorPage";
// import GoodItemPage from "./pages/GoodItemPage"

function App() {
  const GoodItemPage = React.lazy(
    () =>
      import(/* webpackChunkName: "GoodItemPage" */ "./pages/GoodItemPage")
  );
  const MyFavorite = React.lazy(
    () =>
      import(/* webpackChunkName: "GoodItemPage" */ "./pages/MyFavorite")
  );

  const location = useLocation();
  console.log(location);

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
      </Route>
    </Routes>
  );
}

export default App;

