// import React from "react";
import "./sass/app.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MainLayout from "./layout/MainLayout";
import CatalogPage from "./pages/CatalogPage";
import GoodItemPage from "./pages/GoodItemPage"

function App() {
  // const GoodItemPage = React.lazy(
  //   () =>
  //     import(/* webpackChunkName: "GoodItemPage" */ "./pages/GoodItemPage")
  // );

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/goods/article" element={<GoodItemPage />} />
      </Route>
    </Routes>
  );
}

export default App;

// <Routes>
//   <Route path="/" element={<MainLayout />}>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/contacts" element={<Contact />} />
//     <Route
//       path="cart"
//       element={
//         <React.Suspense fallback={<Loading />}>
//           <Cart />
//         </React.Suspense>
//       }
//     />
//     <Route
//       path="payment-order"
//       element={
//         <React.Suspense fallback={<Loading />}>
//           <PaymentOrder />
//         </React.Suspense>
//       }
//     />
//     <Route
//       path="*"
//       element={
//         <React.Suspense fallback={<Loading />}>
//           <NotFound />
//         </React.Suspense>
//       }
//     />
//     <Route
//       path="product/:id"
//       element={
//         <React.Suspense fallback={<Loading />}>
//           <Product />
//         </React.Suspense>
//       }
//     />
//   </Route>
// </Routes>
