import "./App.css";
import app from "./config/Firebase";
import { AppContextProvider } from "./context/AppContextProvider";
import { UserContext } from "./context/UserContext";
import CityRouterPage from "./pages/city/CityRouterPage";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useContext, useEffect, useState } from "react";
import { UserServices } from "./services/UserServices";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { Loader } from "./components/Loader";
import LoginPage from "./pages/auth/LoginPage";
import AuthRouterPage from "./pages/auth/AuthRouterPage";
import AdminRouterPage from "./pages/admin/AdminRouterPage";
import DistrictRouterPage from "./pages/district/DistrictRouterPage";
const auth = getAuth(app);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <UserManager />
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;

function UserManager() {
  const { user, setUser } = useContext(UserContext);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    onAuthStateChanged(auth, async function (users) {
      if (users) {
        const resUser = await UserServices.getUser(users.email);
        setUser(resUser[0]);
        setLoad(false);
      } else {
        setUser(null);
        setLoad(false);
      }
    });
  }

  if (load) {
    return <Loader />;
  } else if (user == null) {
    return <AuthRouterPage />;
  } else if (user.type == 2) {
    return <DistrictRouterPage />;
  } else if (user.type == 3) {
    return <CityRouterPage />;
  } else if (user.type == 99) {
    return <AdminRouterPage />;
  } else {
    return <h1>404 Page</h1>;
  }
}
