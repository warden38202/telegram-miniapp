import { AiOutlineDashboard, AiOutlineUser } from 'react-icons/ai';
import { FiSettings, FiFileText } from 'react-icons/fi';

function Sidebar() {
    return (
        <div className="w-1/5 bg-[#081028]">
            <div className='flex items-center mb-5 p-5 border-b-white border-opacity-20 border-b-[1px]'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.328 12.6039C15.0187 15.043 12.5573 16.957 9.71055 17.7645C6.86187 16.957 4.40046 15.043 3.09114 12.6039C1.78667 10.1755 1.59449 7.23073 2.52237 4.05496C3.84432 3.96858 6.7784 3.62014 9.71055 2.23511C12.6417 3.62014 15.5758 3.96858 16.8968 4.05496C17.8266 7.23073 17.6325 10.1755 16.328 12.6039ZM8.73608 9.02923C8.73608 9.28664 8.83834 9.53351 9.02036 9.71553C9.20238 9.89756 9.44925 9.99981 9.70667 9.99981C9.96409 9.99981 10.211 9.89756 10.393 9.71553C10.575 9.53351 10.6773 9.28664 10.6773 9.02923V7.08805C10.6773 6.83063 10.575 6.58376 10.393 6.40174C10.211 6.21972 9.96409 6.11746 9.70667 6.11746C9.44925 6.11746 9.20238 6.21972 9.02036 6.40174C8.83834 6.58376 8.73608 6.83063 8.73608 7.08805V9.02923ZM8.73608 12.9116C8.73608 13.169 8.83834 13.4159 9.02036 13.5979C9.20238 13.7799 9.44925 13.8822 9.70667 13.8822C9.96409 13.8822 10.211 13.7799 10.393 13.5979C10.575 13.4159 10.6773 13.169 10.6773 12.9116C10.6773 12.6542 10.575 12.4073 10.393 12.2253C10.211 12.0432 9.96409 11.941 9.70667 11.941C9.44925 11.941 9.20238 12.0432 9.02036 12.2253C8.83834 12.4073 8.73608 12.6542 8.73608 12.9116Z" fill="#50A8EB" />
                </svg>
                <h2 className="text-md ml-3">Lexcura</h2>
            </div>
            <nav className="flex flex-col gap-6 p-5">
                <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white">
                    <AiOutlineDashboard /> Dashboard
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.8">
                            <path d="M4.75 9L7.75 6L4.75 3" stroke="#AEB9E1" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </a>
                <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white">
                    <AiOutlineUser /> Reported Users
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.8">
                            <path d="M4.75 9L7.75 6L4.75 3" stroke="#AEB9E1" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </a>
                <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white">
                    <FiFileText /> Incident Reports
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.8">
                            <path d="M4.75 9L7.75 6L4.75 3" stroke="#AEB9E1" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </a>
                <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white">
                    <FiSettings /> Group Settings
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.8">
                            <path d="M4.75 9L7.75 6L4.75 3" stroke="#AEB9E1" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </a>
                <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white">
                    <FiSettings /> Trust Scores & Voting
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.8">
                            <path d="M4.75 9L7.75 6L4.75 3" stroke="#AEB9E1" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </a>
                <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white">
                    <FiSettings /> False Reports
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.8">
                            <path d="M4.75 9L7.75 6L4.75 3" stroke="#AEB9E1" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </a>
            </nav>
        </div>
    );
}

export default Sidebar;
