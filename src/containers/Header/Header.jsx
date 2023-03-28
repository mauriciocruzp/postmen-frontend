import PostmenLogo from "../../assets/postmen_logo.svg";
import Button from "../../components/Button/Button";
import useAuth from "../../hooks/useAuth";
import routes from "../../consts/routes";
import { Link } from "react-router-dom";

function Header() {
  const { authState, logout } = useAuth();

  return (
    <header className="w-full h-20 grid grid-cols-12 gap-x-4 border-b border-neutral-300">
      <div className="col-span-3 col-start-2 flex items-center">
        <img src={PostmenLogo} alt="" />
      </div>
      {authState.isAuthenticated ? (
        <div className="col-span-2 col-start-10 flex items-center justify-end">
          <div>
            <Link
                to={routes.login}
            >
              <Button variant="primary" onClick={() => logout()}>
                Logout
              </Button>
            </Link>
          </div>
          <div className="pl-2">
            <Link to={routes.shipment}>
            <Button variant="secondary" width="w-full">
              Crear Orden
            </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="col-span-2 col-start-10 flex items-center justify-end">
          <Link to={routes.login}>
            <Button variant="primary" width="w-full">
              Trabajador? Inicia Sesion
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
