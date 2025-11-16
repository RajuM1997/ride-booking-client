import { Outlet, useLocation } from "react-router";
import CommonLayout from "./components/layout/CommonLayout";
import { useEffect, useState } from "react";
import SkeletonLoader from "./components/modules/SkeletonLoader";

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
    return <SkeletonLoader />;
  }
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}

export default App;
