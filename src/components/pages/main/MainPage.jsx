import React, { useEffect } from "react";
import MainAboutUs from "./MainAboutUs";
import MainWelcome from "./MainWelcome";
import MainSubWelcome from "./MainSubWelcome";
import MainOurProducts from "./MainOurProducts";
import MainOurCustomer from "./MainOurCustomer";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="main">
        <MainWelcome />
        <MainSubWelcome />
        <MainAboutUs />
        <MainOurProducts />
        <MainOurCustomer />
      </div>
    </div>
  );
};

export default MainPage;
