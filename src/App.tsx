// import React from "react";
import "./sass/app.scss";
import Header from "./components/HeaderMain/Header";
import HeaderCatalog from "./components/HeaderCatalog/HeaderCatalog";
import BannerMain from "./components/Banner/BannerMain";

function App() {
  return (
    <>
      <Header />
      <HeaderCatalog />
      <BannerMain />
    </>
  );
}

export default App;
