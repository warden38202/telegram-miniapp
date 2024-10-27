import { 
    AiOutlineExclamationCircle,
    AiOutlineAreaChart,
    AiFillGift,
    AiFillBell
} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="absolute bottom-0 w-full bg-secondary flex justify-between p-2 h-[82px]">
            <div className="flex items-center justify-center flex-col bg-[#1c1f24] rounded-md py-1 w-1/4 mr-1">
                <AiOutlineExclamationCircle color="#50a8eb" size={24} />
                <a className="text-primary text-md mt-1">Report</a>
            </div>
            <div className="flex items-center justify-center flex-col rounded-md py-1 w-1/4 mr-1">
                <AiOutlineAreaChart color="#4d4e52" size={24} />
                <a className="text-gray-500 text-md mt-1">Status</a>
            </div>
            <div className="flex items-center justify-center flex-col rounded-md py-1 w-1/4 mr-1">
                <AiFillGift color="#4d4e52" size={24} />
                <a className="text-gray-500 text-md mt-1">Reward</a>
            </div>
            <div className="flex items-center justify-center flex-col rounded-md py-1 w-1/4 mr-1">
                <AiFillBell color="#4d4e52" size={24} />
                <a className="text-gray-500 text-md mt-1">Notifications</a>
            </div>
        </div>
    )
}

export default Footer;