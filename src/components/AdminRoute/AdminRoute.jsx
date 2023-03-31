import { Outlet } from "react-router-dom";
import routes from "../../consts/routes";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const AdminRoute = () => {
  const { authState } = useAuth();

  return (authState.user.roles.includes('ADMIN') ? <Outlet /> : <Navigate to={routes.home} />);
}

export default AdminRoute