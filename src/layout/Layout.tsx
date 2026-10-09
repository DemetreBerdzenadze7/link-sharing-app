import { Outlet } from "react-router";
import Header from "../components/header/Header";

const Layout = () => {
  return (
    <div className="bg-light-grey">
      <div className="mx-auto flex min-h-screen w-full max-w-360 flex-col md:gap-6 md:p-6">
        <Header />
        <main className="flex flex-1 p-4 md:p-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
