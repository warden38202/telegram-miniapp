import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    return (
        <div className="header flex justify-between p-2">
            <a className="text-blue-700">Cancel</a>
            <h3 className="text-white">Report</h3>
            <AiOutlineMenu color="rgb(29 78 216)" />
        </div>
    )
}

export default Header;