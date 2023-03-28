import PostmenLogo from "../../assets/postmen_logo.svg"
import Button from "../../components/Button/Button";

function Header() {
    return (
        <header className="w-full h-20 grid grid-cols-12 gap-x-4 border-b border-neutral-300">
            <div className="col-span-3 col-start-2 flex items-center">
                <img src={PostmenLogo} alt="" />
            </div>
            <div className="col-span-1 col-start-10 my-auto">
                <Button type="submit" width="w-full">Crear orden</Button>
            </div>
        </header>
    );
}

export default Header;