import { FaBars } from "react-icons/fa";

interface HeaderProps {
  toggleMobileSidebar: () => void;
}

const Header = ({toggleMobileSidebar}: HeaderProps) =>{
    return(
        <div className="flex flex-column justify-between bg-[#fff] py-4 px-5 shadow-xl shadow-black-100" >
            <button onClick={() => toggleMobileSidebar()}>
            <FaBars />
            </button>
            <h1>Header</h1>
        </div>
    )
}

export default Header