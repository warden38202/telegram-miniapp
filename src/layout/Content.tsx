import { useEffect, useState } from "react";

const Content = () => {
    const [reportStep, setReportStep] = useState(0);
    const [reportTitle, setReportTitle] = useState('');
    const [reportType, setReportType] = useState('');
    const [emailAddressList, setEmailAddressList] = useState([]);

    const addEmailAddress = () => {

    }

    const CrimeType = (
        <div className="crime-type-content relative h-full">
            <div className="crime-type-list flex flex-wrap gap-2 justify-center">
                <div className={`p-2 text-xs w-auto rounded-md ${reportType === 'ransomeware' ? 'bg-blue-400 text-white' : 'bg-gray-800 text-gray-600'}`} onClick={() => setReportType('ransomeware')}>Ransomeware</div>
                <div className={`p-2 text-xs w-auto rounded-md ${reportType === 'crypto scam' ? 'bg-blue-400 text-white' : 'bg-gray-800 text-gray-600'}`} onClick={() => setReportType('crypto scam')}>Crypto Scam</div>
                <div className={`p-2 text-xs w-auto rounded-md ${reportType === 'phishing' ? 'bg-blue-400 text-white' : 'bg-gray-800 text-gray-600'}`} onClick={() => setReportType('phishing')}>Phishing</div>
                <div className={`p-2 text-xs w-auto rounded-md ${reportType === 'fake channel' ? 'bg-blue-400 text-white' : 'bg-gray-800 text-gray-600'}`} onClick={() => setReportType('fake channel')}>Fake Channels</div>
                <div className={`p-2 text-xs w-auto rounded-md ${reportType === 'fake job listing' ? 'bg-blue-400 text-white' : 'bg-gray-800 text-gray-600'}`} onClick={() => setReportType('fake job listing')}>Fake job listings</div>
                <div className={`p-2 text-xs w-auto rounded-md ${reportType === 'other' ? 'bg-blue-400 text-white' : 'bg-gray-800 text-gray-600'}`} onClick={() => setReportType('other')}>Others</div>
            </div>
            <div className="flex justify-between btn-group gap-3 mt-5">
                <button className="w-1/2 border-[1px] rounded-md text-xm py-2 text-blue-400 border-blue-400">CANCEL</button>
                <button className="w-1/2 border-[1px] rounded-md text-xm py-2 text-white border-blue-400 bg-blue-400" onClick={() => setReportStep(1)}>NEXT</button>
            </div>
        </div>
    );

    const SuspectInformation = (
        <div className="suspect-information">
            <div>
                <div className="flex flex-col my-2">
                    <label className="text-gray-500 text-xs">User ID</label>
                    <input className="bg-gray-700 rounded-md p-2 mt-1" placeholder="Enter User ID" />
                </div>
                <div className="flex flex-col my-2">
                    <label className="text-gray-500 text-xs">Wallet Address</label>
                    <input className="bg-gray-700 rounded-md p-2 mt-1" placeholder="Enter Wallet address" />
                </div>
                <div className="flex flex-col my-2">
                    <label className="text-gray-500 text-xs">Additional Details</label>
                    <textarea rows={3} className="bg-gray-700 rounded-md p-2 mt-1" placeholder="Enter additional details" />
                </div>
            </div>
            <div className="flex justify-between btn-group gap-3">
                <button className="w-1/2 border-[1px] rounded-md text-xm py-2 text-blue-400 border-blue-400" onClick={() => setReportStep(0)}>BACK</button>
                <button className="w-1/2 border-[1px] rounded-md text-xm py-2 text-white border-blue-400 bg-blue-400" onClick={() => setReportStep(2)}>NEXT</button>
            </div>
        </div>
    );

    const VictimInformation = (
        <div className="victim-information">
            <div>
                <div className="flex flex-col my-2">
                    <label className="text-gray-500 text-xs">User ID</label>
                    <input className="bg-gray-700 rounded-md p-2 mt-1" placeholder="Enter User ID" />
                </div>
                <div className="flex flex-col my-2">
                    <label className="text-gray-500 text-xs">Wallet Address</label>
                    <input className="bg-gray-700 rounded-md p-2 mt-1" placeholder="Enter Wallet address" />
                </div>
                <div className="flex flex-col my-2">
                    <label className="text-gray-500 text-xs">Additional Details</label>
                    <div className="flex items-center justify-between mt-1 gap-2">
                        <input className="bg-gray-700 rounded-md p-2 w-full" placeholder="Enter additional details" />
                        <div className="bg-blue-400 p-2 w-8 text-center rounded-md" onClick={() => addEmailAddress()}>+</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between btn-group gap-3">
                <button className="w-1/2 border-[1px] rounded-md text-xm py-2 text-blue-400 border-blue-400" onClick={() => setReportStep(1)}>BACK</button>
                <button className="w-1/2 border-[1px] rounded-md text-xm py-2 text-white border-blue-400 bg-blue-400" onClick={() => setReportStep(3)}>NEXT</button>
            </div>
        </div>
    );

    const CrimeDetails = (
        <div className="crime-detail">
            <div>
                <div className="flex flex-col my-2">
                    <label className="text-gray-500 text-xs">Incident Description</label>
                    <textarea rows={3} className="bg-gray-700 rounded-md p-2 mt-1" placeholder="Enter incident description" />
                </div>
                <div className="flex flex-col my-2">
                    <label className="text-gray-500 text-xs">Date of Incident</label>
                    <input className="bg-gray-700 rounded-md p-2 mt-1" placeholder="Select date of incident" />
                </div>
                <div className="flex flex-col my-2">
                    <label className="text-gray-500 text-xs">Upload Evidence</label>
                    <input className="bg-gray-700 rounded-md p-2 mt-1" placeholder="Upload Evidence" />
                </div>
            </div>
            <div className="flex justify-between btn-group gap-3">
                <button className="w-1/2 border-[1px] rounded-md text-xm py-2 text-blue-400 border-blue-400" onClick={() => setReportStep(2)}>BACK</button>
                <button className="w-1/2 border-[1px] rounded-md text-xm py-2 text-white border-blue-400 bg-blue-400" onClick={() => setReportStep(4)}>NEXT</button>
            </div>
        </div>
    );

    const ReviewSubmit = (
        <div className="review-submit">
            <div>
                <div className="flex flex-col my-2">
                    <label className="text-gray-500 text-xs">Incident Description</label>
                    <textarea rows={3} className="bg-gray-700 rounded-md p-2 mt-1" placeholder="Enter incident description" />
                </div>
                <div className="flex flex-col my-2">
                    <label className="text-gray-500 text-xs">Date of Incident</label>
                    <input className="bg-gray-700 rounded-md p-2 mt-1" placeholder="Select date of incident" />
                </div>
                <div className="flex flex-col my-2">
                    <label className="text-gray-500 text-xs">Upload Evidence</label>
                    <input className="bg-gray-700 rounded-md p-2 mt-1" placeholder="Upload Evidence" />
                </div>
            </div>
            <div className="flex justify-between btn-group gap-3">
                <button className="w-1/2 border-[1px] rounded-md text-xm py-2 text-blue-400 border-blue-400" onClick={() => setReportStep(3)}>EDIT</button>
                <button className="w-1/2 border-[1px] rounded-md text-xm py-2 text-white border-blue-400 bg-blue-400" onClick={() => setReportStep(4)}>SUBMIT</button>
            </div>
        </div>
    );

    const reportContentAry = [
        CrimeType,
        SuspectInformation,
        VictimInformation,
        CrimeDetails,
        ReviewSubmit,
    ];

    useEffect(() => {
        reportStep === 0 ? setReportTitle('Choose Crime Type') : reportStep === 1 ? setReportTitle('Suspect Information') : reportStep === 2 ? setReportTitle('Victim Information') : reportStep === 3 ? setReportTitle('Crime Details') : setReportTitle('Review and Submit');
    }, [reportStep]);

    return (
        <div>
            <div className="report-header flex p-2 gap-2">
                <div className="report-header-item flex items-center">
                    <div className={`${reportStep === 0 ? 'bg-blue-400' : 'bg-gray-800'} rounded-full w-[24px] text-white text-center`}>1</div>
                    {reportStep === 0 && <label className="text-white text-xs ml-2">Crime Type</label>}
                </div>
                <div className="report-header-item flex items-center">
                    <div className={`${reportStep === 1 ? 'bg-blue-400' : 'bg-gray-800'} rounded-full w-[24px] text-white text-center`}>2</div>
                    {reportStep === 1 && <label className="text-white text-xs ml-2">Suspect Information</label>}
                </div>
                <div className="report-header-item flex items-center">
                    <div className={`${reportStep === 2 ? 'bg-blue-400' : 'bg-gray-800'} rounded-full w-[24px] text-white text-center`}>3</div>
                    {reportStep === 2 && <label className="text-white text-xs ml-2">Victim Information</label>}
                </div>
                <div className="report-header-item flex items-center">
                    <div className={`${reportStep === 3 ? 'bg-blue-400' : 'bg-gray-800'} rounded-full w-[24px] text-white text-center`}>4</div>
                    {reportStep === 3 && <label className="text-white text-xs ml-2">Crime Details</label>}
                </div>
                <div className="report-header-item flex items-center">
                    <div className={`${reportStep === 4 ? 'bg-blue-400' : 'bg-gray-800'} rounded-full w-[24px] text-white text-center`}>5</div>
                    {reportStep === 4 && <label className="text-white text-xs ml-2">Review & Submit</label>}
                </div>
            </div>
            <div className="report-content">
                <div className="report-step-title py-2 text-center border-y-[1px] border-white">
                    <h3 className="text-white">
                        {reportTitle}
                    </h3>
                </div>
                <div className="p-2">
                    {reportContentAry[reportStep]}
                </div>
            </div>
        </div>
    )
}

export default Content;