// import Loader from "../Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Suspense
      //   fallback={<Loader />}
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
