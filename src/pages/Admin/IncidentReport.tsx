import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../utils/axiosClient";
import StatsCard from "../../components/StatsCard";

const statsList = [
    {
        icon: <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.2" x="0.847137" width="39.8159" height="40" rx="19.908" fill="#CB3CFF" />
            <path d="M17.9192 19.4798C18.4289 19.4798 18.8962 19.243 19.2742 18.8792C18.8778 18.1682 18.6514 17.3638 18.6514 16.592C18.6514 15.9374 18.8093 15.32 19.0873 14.7748C18.7425 14.5634 18.3396 14.4395 17.9075 14.4395C16.6442 14.4395 15.6203 15.4783 15.6203 16.7595C15.6203 18.0408 16.6559 19.4798 17.9192 19.4798Z" fill="#CB3CFF" />
            <path d="M19.4575 20.58C19.2342 20.5318 19.0031 20.5052 18.7656 20.5052H17.0647C15.2548 20.5052 13.7874 21.9772 13.7874 23.7931L13.7951 24.1819C13.7951 24.6892 14.2051 25.1006 14.7108 25.1006H16.3879C16.4703 23.0803 17.7084 21.3579 19.4575 20.58Z" fill="#CB3CFF" />
            <path d="M22.5997 19.9647C24.1659 19.9647 25.4213 18.1804 25.4213 16.5917C25.4213 15.003 24.1515 13.715 22.5852 13.715C21.019 13.715 19.7492 15.003 19.7492 16.5917C19.7494 18.1804 21.0335 19.9647 22.5997 19.9647Z" fill="#CB3CFF" />
            <path d="M27.7132 25.3137C27.7132 23.0619 25.8937 21.2366 23.6494 21.2366H21.5403C19.296 21.2366 17.4766 23.0619 17.4766 25.3137L17.4863 25.7958C17.4863 26.4248 17.9946 26.9349 18.6218 26.9349H26.5876C27.2146 26.9349 27.7231 26.4248 27.7231 25.7958L27.7132 25.3137Z" fill="#CB3CFF" />
        </svg>,
        name: 'Total Users',
        count: 250,
    },
    {
        icon: <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.2" x="0.847137" width="39.8159" height="40" rx="19.908" fill="#FDB52A" />
            <path d="M13.8653 25.9874C13.8653 23.5366 15.8521 21.5498 18.3029 21.5498H23.2073C25.6581 21.5498 27.6448 23.5366 27.6448 25.9874C27.6448 26.8043 26.9826 27.4666 26.1656 27.4666H15.3445C14.5275 27.4666 13.8653 26.8043 13.8653 25.9874Z" fill="#FDB52A" />
            <path d="M20.7577 20.4225C22.9262 20.4225 24.6841 18.6565 24.6841 16.478C24.6841 14.2995 22.9262 12.5334 20.7577 12.5334C18.5892 12.5334 16.8313 14.2995 16.8313 16.478C16.8313 18.6565 18.5892 20.4225 20.7577 20.4225Z" fill="#FDB52A" />
        </svg>,
        name: 'New Users',
        count: 15,
    },
    {
        icon: <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.2" x="0.845917" width="39.8159" height="40" rx="19.908" fill="#05C168" />
            <path d="M28.3453 23.5854C26.794 26.4754 23.8776 28.7432 20.5046 29.7C17.1294 28.7432 14.213 26.4754 12.6616 23.5854C11.116 20.7081 10.8883 17.219 11.9877 13.4562C13.554 13.3539 17.0305 12.941 20.5046 11.3C23.9776 12.941 27.4541 13.3539 29.0192 13.4562C30.1209 17.219 29.8909 20.7081 28.3453 23.5854ZM19.35 19.35C19.35 19.655 19.4712 19.9475 19.6868 20.1632C19.9025 20.3788 20.195 20.5 20.5 20.5C20.805 20.5 21.0975 20.3788 21.3132 20.1632C21.5288 19.9475 21.65 19.655 21.65 19.35V17.05C21.65 16.745 21.5288 16.4525 21.3132 16.2368C21.0975 16.0211 20.805 15.9 20.5 15.9C20.195 15.9 19.9025 16.0211 19.6868 16.2368C19.4712 16.4525 19.35 16.745 19.35 17.05V19.35ZM19.35 23.95C19.35 24.255 19.4712 24.5475 19.6868 24.7632C19.9025 24.9788 20.195 25.1 20.5 25.1C20.805 25.1 21.0975 24.9788 21.3132 24.7632C21.5288 24.5475 21.65 24.255 21.65 23.95C21.65 23.645 21.5288 23.3525 21.3132 23.1368C21.0975 22.9211 20.805 22.8 20.5 22.8C20.195 22.8 19.9025 22.9211 19.6868 23.1368C19.4712 23.3525 19.35 23.645 19.35 23.95Z" fill="#05C168" />
        </svg>,
        name: 'Total Cases',
        count: 200,
    },
    {
        icon: <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.2" x="0.845917" width="39.8159" height="40" rx="19.908" fill="#086CD9" />
            <g clipPath="url(#clip0_793_1034)">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.6744 11.2213C17.4229 12.5352 14.5729 13.4348 12.4221 13.735C11.6412 13.8443 11.0019 14.4855 11.0028 15.274L11.0047 15.7462C10.9762 21.487 11.4579 26.5116 19.9936 29.904C20.3178 30.0316 20.6783 30.0316 21.0025 29.904C29.544 26.5116 30.0304 21.488 30 15.7462V15.2702C30 14.4836 29.3606 13.8357 28.5835 13.7141C26.542 13.394 23.5656 12.5038 21.316 11.2175C21.0659 11.0743 20.7825 10.9993 20.4943 10.9999C20.206 11.0006 19.9239 11.0769 19.6744 11.2213ZM24.0226 19.2754C24.2008 19.0973 24.301 18.8556 24.3011 18.6036C24.3012 18.3516 24.2012 18.1099 24.0231 17.9316C23.8449 17.7534 23.6033 17.6532 23.3513 17.6531C23.0993 17.653 22.8575 17.753 22.6793 17.9312L19.5509 21.0605L18.3226 19.8321C18.235 19.7414 18.1301 19.669 18.0142 19.6192C17.8983 19.5694 17.7737 19.5432 17.6475 19.5421C17.5214 19.541 17.3963 19.5651 17.2795 19.6128C17.1628 19.6606 17.0567 19.7311 16.9675 19.8203C16.8783 19.9095 16.8078 20.0156 16.76 20.1324C16.7122 20.2491 16.6882 20.3742 16.6893 20.5003C16.6904 20.6265 16.7166 20.7511 16.7664 20.8671C16.8162 20.983 16.8886 21.0878 16.9793 21.1754L18.8793 23.0764C19.0574 23.2545 19.299 23.3545 19.5509 23.3545C19.8028 23.3545 20.0444 23.2545 20.2226 23.0764L24.0226 19.2754Z" fill="#086CD9" />
            </g>
            <defs>
                <clipPath id="clip0_793_1034">
                    <rect width="19" height="19" fill="white" transform="translate(11 11)" />
                </clipPath>
            </defs>
        </svg>,
        name: 'Completed Cases',
        count: 35,
    }
]

const IncidentReport = () => {
    const [listData, setListData] = useState<any[]>([]);
    const [isShowModal, setModal] = useState(false);
    const [currentReport, setCurrentReport] = useState<any>(null); // State to hold current report data for editing

    const getStatusStyle = (status: any) => {
        switch (status) {
            case 2:
                return 'bg-[#4ECC5E] bg-opacity-15 text-[#4ECC5E]';
            case 1:
                return 'bg-[#E78A21] bg-opacity-15 text-[#E78A21]';
            case 0:
                return 'bg-[#FA335B] bg-opacity-15 text-[#FA335B]';
            default:
                return '';
        }
    };

    const onDelete = async (reportId: any) => {
        const response = await axios.delete(`${baseUrl}/api/reports/${reportId}`);
        console.log(response);

        if (response.status === 200) {
            setListData((prevData) => prevData.filter(item => item._id !== reportId));
        }
    }

    const onEdit = (report: any) => {
        setCurrentReport(report); // Set current report to edit
        setModal(true); // Show modal
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        // Parse value to number if it's the status, which is stored as a number
        const updatedValue = name === 'status' ? Number(value) : value;
        setCurrentReport((prev: any) => ({ ...prev, [name]: updatedValue })); // Update current report state
    };

    const onSave = async () => {
        if (currentReport) {
            const response = await axios.put(`${baseUrl}/api/reports/${currentReport._id}`, currentReport);
            if (response.status === 200) {
                setListData((prevData) => prevData.map(item => item._id === currentReport._id ? currentReport : item));
                setModal(false); // Close modal
                setCurrentReport(null); // Clear current report
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const endpoint = `api/reports`;

                const response = await axios.get(`${baseUrl}/${endpoint}`);

                setListData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Fetch data based on selected filter
    }, []);

    return (
        <div className="bg-[#080f26] py-4 px-8 w-full">
            {isShowModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-[#080f26] p-6 rounded-lg shadow-lg w-1/3">
                        <h3 className="text-lg font-semibold">Edit Report</h3>
                        <div className="mt-4">
                            <label className="block text-sm font-medium">User ID</label>
                            <input
                                type="text"
                                name="userId"
                                value={currentReport?.userId || ''}
                                onChange={(e) => handleInputChange(e)}
                                className="border p-2 rounded mt-1 w-full bg-[#0B1739]"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-medium">Crime Type</label>
                            <input
                                type="text"
                                name="reportType"
                                value={currentReport?.reportType || ''}
                                onChange={(e) => handleInputChange(e)}
                                className="border p-2 rounded mt-1 w-full bg-[#0B1739]"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-medium">Date</label>
                            <input
                                type="date"
                                name="incidentDate"
                                value={currentReport?.incidentDate || ''}
                                onChange={(e) => handleInputChange(e)}
                                className="border p-2 rounded mt-1 w-full bg-[#0B1739]"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-medium">Status</label>
                            <select
                                name="status"
                                value={currentReport?.status || ''}
                                onChange={(e) => handleInputChange(e)}
                                className="border p-2 rounded mt-1 w-full bg-[#0B1739]"
                            >
                                <option value="0">Pending</option>
                                <option value="1">In Progress</option>
                                <option value="2">Complete</option>
                            </select>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button onClick={() => setModal(false)} className="mr-2 bg-[#0B1739] p-2 rounded">Cancel</button>
                            <button onClick={onSave} className="bg-primary text-white p-2 rounded">Save</button>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex items-center justify-between w-full">
                <input className="p-2 bg-[#0B1739] rounded-lg" placeholder="Search for..." />
                <button className="bg-primary rounded-lg py-2 px-4">ADD USER</button>
            </div>
            <div className="mt-10 flex gap-4">
                {statsList.map((item, index) => (
                    <div className="bg-[#0B1739] w-1/4 rounded-lg p-4" key={index}>
                        <StatsCard icon={item.icon} name={item.name} count={item.count} />
                    </div>
                ))}
            </div>
            <div className="mt-5">
                <div className="bg-[#0B1739] flex items-center justify-center p-5">
                    <div className="w-full">
                        <h1 className="text-white text-2xl font-semibold mb-5">All Cases</h1>
                        <table className="w-full text-left table-auto bg-card-bg rounded-lg overflow-hidden">
                            <thead>
                                <tr className="text-gray-400 text-sm border-b border-gray-700">
                                    <th className="px-4 py-2">Case ID</th>
                                    <th className="px-4 py-2">User ID</th>
                                    <th className="px-4 py-2">Crime Type</th>
                                    <th className="px-4 py-2">Date</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300 text-sm">
                                {listData.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                                        <td className="px-4 py-3">
                                            <input type="checkbox" className="mr-2" /> {item.caseId}
                                        </td>
                                        <td className="px-4 py-3">{item.userId}</td>
                                        <td className="px-4 py-3">{item.reportType}</td>
                                        <td className="px-4 py-3">{item.incidentDate}</td>
                                        <td className="px-4 py-3">
                                            <span className={`px-3 py-1 rounded-sm text-xs font-semibold ${getStatusStyle(item.status)}`}>
                                                {item.status === 2 ? 'Complete' : item.status === 1 ? 'In progress' : 'Pending'}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 flex items-center space-x-2">
                                            <button className="text-blue-500 hover:text-blue-400" onClick={() => onEdit(item)}>
                                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.0947 1.49892C10.9244 1.32932 10.7221 1.19516 10.4997 1.10417C10.2772 1.01318 10.0389 0.967165 9.79856 0.968792C9.55822 0.970419 9.32057 1.01965 9.09936 1.11365C8.87815 1.20764 8.67776 1.34453 8.50975 1.51642L1.64715 8.37912C1.3937 8.63258 1.21301 8.94949 1.12401 9.29671L0.542819 11.5641C0.467311 11.8586 0.735111 12.1264 1.02967 12.0508L3.29714 11.4693C3.64426 11.3802 3.96108 11.1996 4.21448 10.9462L11.0772 4.08338C11.2491 3.91545 11.386 3.7151 11.4801 3.49392C11.5741 3.27275 11.6233 3.03512 11.625 2.7948C11.6266 2.55447 11.5806 2.3162 11.4895 2.09377C11.3985 1.87134 11.2643 1.66916 11.0947 1.49892Z" fill="#AEB9E1" stroke="#AEB9E1" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                            <button className="text-red-500 hover:text-red-400" onClick={() => onDelete(item._id)}>
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.1485 11.8422C11.1133 12.3673 10.6771 12.7753 10.1507 12.7753H3.84181C3.31552 12.7753 2.8793 12.3674 2.84406 11.8423L2.27753 3.40076H11.7143L11.1485 11.8422Z" fill="#AEB9E1" stroke="#AEB9E1" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M1 3.40173H13" stroke="#AEB9E1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M8.52777 1.22485H5.4684C5.19793 1.22485 4.93855 1.33946 4.7473 1.54346C4.55605 1.74745 4.44861 2.02413 4.44861 2.31263V3.40041H9.54756V2.31263C9.54756 2.02413 9.44012 1.74745 9.24887 1.54346C9.05762 1.33946 8.79824 1.22485 8.52777 1.22485Z" stroke="#AEB9E1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncidentReport;