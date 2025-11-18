import { Outlet, useLocation } from "react-router";
import CommonLayout from "./components/layout/CommonLayout";
import { useEffect, useState } from "react";
import LoadingHomePage from "./components/modules/LoadingHomePage";

function App() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (loading) {
    return <LoadingHomePage />;
  }
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}

export default App;
