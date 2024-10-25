import { 
    AiOutlineExclamationCircle,
    AiOutlineAreaChart,
    AiFillGift,
    AiFillBell
} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="absolute bottom-0 w-full bg-gray-600 flex justify-between p-2">
            <div className="flex items-center flex-col bg-gray-950 rounded-md py-1 w-1/4 mr-1">
                <AiOutlineExclamationCircle color="rgb(96 165 250)" />
                <a className="text-blue-400 text-xs mt-1">Report</a>
            </div>
            <div className="flex items-center flex-col rounded-md py-1 w-1/4 mr-1">
                <AiOutlineAreaChart color="rgb(107 114 128)" />
                <a className="text-gray-500 text-xs mt-1">Status</a>
            </div>
            <div className="flex items-center flex-col rounded-md py-1 w-1/4 mr-1">
                <AiFillGift color="rgb(107 114 128)" />
                <a className="text-gray-500 text-xs mt-1">Reward</a>
            </div>
            <div className="flex items-center flex-col rounded-md py-1 w-1/4 mr-1">
                <AiFillBell color="rgb(107 114 128)" />
                <a className="text-gray-500 text-xs mt-1">Notifications</a>
            </div>
        </div>
    )
}

export default Footer;