import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../consts/routes";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Shipment from "./Shipment/Shipment";
import Package from "./Package/Package";
import AuthProvider from "../context/AuthProvider";
import AdminRoute from "../components/AdminRoute/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<AdminRoute />}>
            <Route path={routes.shipment} element={<Shipment />} />
            <Route path={routes.package} element={<Package />} />
          </Route>

          <Route path={routes.login} element={<Login />} />
          <Route path={routes.home} element={<Home />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
