import { Outlet } from "react-router";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import Whatsapp from "../components/Icons/Whatsapp";

export const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <a
        href="https://wa.me/5583998310461"
        target="_blank"
        className="group z-50 fixed right-2 bottom-2 grid place-items-center rounded-full cursor-pointer duration-300 ease-linear p-2 lg:p-3 border-2 border-transparent bg-green-500 hover:bg-green-600 hover:border-green-700"
      >
        <Whatsapp />
      </a>
    </div>
  );
};
