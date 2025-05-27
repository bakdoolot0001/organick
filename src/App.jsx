import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Admin from "./components/pages/admin/Admin";
import MainPage from "./components/pages/main/MainPage";
import Details from "./components/pages/details/Details";
import Basket from "./components/pages/basket/Basket";
import Contact from "./components/pages/contactUs/Contact";
import MainAboutUs from "./components/pages/main/MainAboutUs";
import MainOurProducts from "./components/pages/main/MainOurProducts";
import MainOurCustomer from "./components/pages/main/MainOurCustomer";
import Shop from "./components/pages/shop/Shop";
import Subscribe from "./components/ui/subscribe/Subscribe";
import MainCategories from "./components/pages/main/MainCategories";

function App() {
  const routes = [
    {
      id: 1,
      link: "/",
      element: <MainPage />,
    },
    {
      id: 2,
      link: "/admin",
      element: <Admin />,
    },
    {
      id: 3,
      link: "/ourProduct",
      element: <MainOurProducts />,
    },
    {
      id: 4,
      link: "/details/:detailsId",
      element: <Details />,
    },
    {
      id: 5,
      link: "/about",
      element: <MainAboutUs />,
    },
    {
      id: 7,
      link: "/ourcustomer",
      element: <MainOurCustomer />,
    },
    {
      id: 8,
      link: "/basket",
      element: <Basket />,
    },
    {
      id: 9,
      link: "/contact",
      element: <Contact />,
    },
    {
      id: 10,
      link: "/shop",
      element: <Shop />,
    },
    {
      id: 11,
      link: "/category/:categoryPro",
      element: <MainCategories />,
    },
  ];
  return (
    <div className="app">
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.link} element={el.element} />
        ))}
      </Routes>
      <Subscribe/>
      <Footer />
    </div>
  );
}

export default App;
