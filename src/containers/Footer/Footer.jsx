import MinLogo from "../../assets/postmen_minlogo.svg";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="container mx-auto h-24 grid grid-cols-12 gap-x-4 border-t border-neutral-300">
            <div className="col-span-3 col-start-1 flex items-center flex-row">
                <img src={MinLogo} alt="" />
                <p className="ml-4">© 2023 Postmen, Inc.</p>
            </div>
            <div className="col-span-2 col-start-11 flex items-center">
                <Link to="/users/sign_in" className="text-gray-400">Iniciar sesión</Link>
            </div>
        </div>
    );
}

export default Footer;