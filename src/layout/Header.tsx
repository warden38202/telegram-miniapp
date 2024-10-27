import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    return (
        <div className="header flex justify-between p-2">
            <a className="text-[#046fe3]">Cancel</a>
            <h3 className="text-white">Report</h3>
            <AiOutlineMenu color="#046fe3" />
        </div>
    )
}

export default Header;