import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import {
    AiOutlineExclamationCircle,
    AiOutlinePlus,
    AiOutlineClose,
    AiOutlineCalendar,
    AiOutlinePaperClip,
    AiFillCloseCircle,
    AiOutlineCheck,
} from "react-icons/ai";
import axios from 'axios';
import { baseUrl } from "../../utils/axiosClient";

const ReportContent = () => {
    const [reportStep, setReportStep] = useState(0);
    const [reportTitle, setReportTitle] = useState("");
    const [reportType, setReportType] = useState("");
    const [userId, setUserId] = useState("");
    const [amount, setAmount] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [partiesEmailAddressList, setPartiesEmailAddressList] = useState<
        string[]
    >([""]);
    const [inputErr, setInputErr] = useState({
        userId: "",
        amount: "",
        walletAddress: "",
    });
    const [victimInputErr, setVictimInputErr] = useState({
        email: "",
        phoneNumber: "",
    });
    const [incidentDescription, setIncidentDescription] = useState("");
    const [incidentDate, setIncidentDate] = useState<string>("");
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [crimeDetailsErr, setCrimeDetailsErr] = useState({
        description: "",
        date: "",
    });
    const dateInputRef = useRef<HTMLInputElement>(null); // Create a ref for the input

    const [showCheck, setShowCheck] = useState(false);

    // Animation for check icon
    const checkAnimation = useSpring({
        opacity: showCheck ? 1 : 0,
        transform: showCheck ? "scale(1)" : "scale(0.5)",
        config: { tension: 200, friction: 200 },
    });

    const handleCalendarClick = () => {
        if (dateInputRef.current) {
            dateInputRef.current.focus(); // Focus on the date input
            dateInputRef.current.click(); // Open the date picker
        }
    };

    const addEmailAddress = () => {
        setPartiesEmailAddressList([...partiesEmailAddressList, ""]);
    };

    const removeEmailAddress = (index: number) => {
        const newList = partiesEmailAddressList.filter((_, i) => i !== index);
        setPartiesEmailAddressList(newList);
    };

    const selectReportType = (type: string) => {
        setReportType(type);
        setReportStep(1);
    };

    const cancelReport = () => {
        setReportStep(0);
        setReportType("");
    };

    const onNext = () => {
        let newErrors = { userId: "", walletAddress: "", amount: "" };

        if (userId === "") {
            newErrors.userId = "Fill the User ID";
        }

        if (amount === "") {
            newErrors.amount = "Fill the Amount";
        }

        if (walletAddress === "") {
            newErrors.walletAddress = "Fill the Wallet Address";
        }

        setInputErr(newErrors);

        // Check for any errors before proceeding
        if (!newErrors.userId && !newErrors.walletAddress) {
            setReportStep(3);
        }
    };

    const onNextVictim = () => {
        let newErrors = { email: "", phoneNumber: "" };

        if (email === "") {
            newErrors.email = "Fill the Email";
        }
        if (phoneNumber === "") {
            newErrors.phoneNumber = "Fill the Phone Number";
        }

        setVictimInputErr(newErrors);

        // Check for any errors before proceeding
        if (!newErrors.email && !newErrors.phoneNumber) {
            setReportStep(4); // Proceed to next step
        }
    };

    const onNextCrimeDetails = () => {
        let newErrors = { description: "", date: "" };

        if (incidentDescription === "") {
            newErrors.description = "Fill the Incident Description";
        }
        if (incidentDate === "") {
            newErrors.date = "Select the Date of Incident";
        }

        setCrimeDetailsErr(newErrors);

        // Check for any errors before proceeding
        if (!newErrors.description && !newErrors.date) {
            setReportStep(5); // Proceed to next step
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Get the first file
        if (file) {
            setUploadedFile(file); // Set the uploaded file in state
        }
    };
    
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIncidentDate(event.target.value);
    };

    const onSubmit = async () => {
        const formData = new FormData();
    
        // Append report data to formData
        formData.append('reportType', reportType);
        formData.append('userId', userId);
        formData.append('walletAddress', walletAddress);
        formData.append('amount', amount.toString());
        formData.append('description', description);
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);
        formData.append('partiesEmails', JSON.stringify(partiesEmailAddressList)); // Convert array to JSON string
        formData.append('incidentDescription', incidentDescription);
        formData.append('incidentDate', incidentDate);
    
        // Append file if available
        if (uploadedFile) {
            formData.append('file', uploadedFile);
        }
    
        try {
            // Make a single request to submit both file and report data
            const { data } = await axios.post(`${baseUrl}/api/reports`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            if (data) {
                setReportStep(6);
                setShowCheck(true);
                setReportTitle("Your report was submitted successfully!");
            }
        } catch (error) {
            console.error("Error submitting report:", error);
        }
    };

    const StartReport = (
        <div className="start-report-content mt-4">
            {/* <h3 className="text-white text-lg text-center px-4">Choose Crime Type</h3> */}
            <div className="crime-type-list flex flex-wrap gap-3 justify-center mt-4 px-4">
                <div
                    className={`px-4 flex items-center h-[40px] text-sm w-auto rounded-xl cursor-pointer ${reportType === "Ransomeware"
                        ? "bg-blue-400 text-white"
                        : "bg-secondary text-[#767677]"
                        }`}
                    onClick={() => selectReportType("Ransomeware")}
                >
                    Ransomeware
                </div>
                <div
                    className={`px-4 flex items-center h-[40px] text-sm w-auto rounded-xl cursor-pointer ${reportType === "Crypto Scam"
                        ? "bg-blue-400 text-white"
                        : "bg-secondary text-[#767677]"
                        }`}
                    onClick={() => selectReportType("Crypto Scam")}
                >
                    Crypto Scam
                </div>
                <div
                    className={`px-4 flex items-center h-[40px] text-sm w-auto rounded-xl cursor-pointer ${reportType === "Phishing"
                        ? "bg-blue-400 text-white"
                        : "bg-secondary text-[#767677]"
                        }`}
                    onClick={() => selectReportType("Phishing")}
                >
                    Phishing
                </div>
                <div
                    className={`px-4 flex items-center h-[40px] text-sm w-auto rounded-xl cursor-pointer ${reportType === "Fake Channels"
                        ? "bg-blue-400 text-white"
                        : "bg-secondary text-[#767677]"
                        }`}
                    onClick={() => selectReportType("Fake Channel")}
                >
                    Fake Channels
                </div>
                <div
                    className={`px-4 flex items-center h-[40px] text-sm w-auto rounded-xl cursor-pointer ${reportType === "Fake job listings"
                        ? "bg-blue-400 text-white"
                        : "bg-secondary text-[#767677]"
                        }`}
                    onClick={() => selectReportType("Fake job listing")}
                >
                    Fake job listings
                </div>
                <div
                    className={`px-4 flex items-center h-[40px] text-sm w-auto rounded-xl cursor-pointer ${reportType === "other"
                        ? "bg-blue-400 text-white"
                        : "bg-secondary text-[#767677]"
                        }`}
                    onClick={() => selectReportType("Other")}
                >
                    Others
                </div>
            </div>
            <div className="w-full px-4 mt-5">
                <button
                    className={`rounded-md text-xm w-full h-[45px] text-[#a8a8a8] bg-[#5b5b5b]`}
                >
                    NEXT
                </button>
            </div>
        </div>
    );

    const CrimeType = (
        <div className="crime-type-content mt-4">
            <div className="crime-type-list flex flex-wrap gap-3 justify-center px-4">
                <div
                    className={`px-4 flex items-center h-[40px] text-sm w-auto rounded-xl cursor-pointer ${reportType === "Ransomeware"
                        ? "bg-blue-400 text-white"
                        : "bg-secondary text-[#767677]"
                        }`}
                    onClick={() => setReportType("Ransomeware")}
                >
                    Ransomeware
                </div>
                <div
                    className={`px-4 flex items-center h-[40px] text-sm w-auto rounded-xl cursor-pointer ${reportType === "Crypto Scam"
                        ? "bg-blue-400 text-white"
                        : "bg-secondary text-[#767677]"
                        }`}
                    onClick={() => setReportType("Crypto Scam")}
                >
                    Crypto Scam
                </div>
                <div
                    className={`px-4 flex items-center h-[40px] text-sm w-auto rounded-xl cursor-pointer ${reportType === "Phishing"
                        ? "bg-blue-400 text-white"
                        : "bg-secondary text-[#767677]"
                        }`}
                    onClick={() => setReportType("Phishing")}
                >
                    Phishing
                </div>
                <div
                    className={`px-4 flex items-center h-[40px] text-sm w-auto rounded-xl cursor-pointer ${reportType === "Fake Channels"
                        ? "bg-blue-400 text-white"
                        : "bg-secondary text-[#767677]"
                        }`}
                    onClick={() => setReportType("Fake Channels")}
                >
                    Fake Channels
                </div>
                <div
                    className={`px-4 flex items-center h-[40px] text-sm w-auto rounded-xl cursor-pointer ${reportType === "Fake job listings"
                        ? "bg-blue-400 text-white"
                        : "bg-secondary text-[#767677]"
                        }`}
                    onClick={() => setReportType("Fake job listings")}
                >
                    Fake job listings
                </div>
                <div
                    className={`px-4 flex items-center h-[40px] text-sm w-auto rounded-xl cursor-pointer ${reportType === "other"
                        ? "bg-blue-400 text-white"
                        : "bg-secondary text-[#767677]"
                        }`}
                    onClick={() => setReportType("other")}
                >
                    Others
                </div>
            </div>
            <div className="flex justify-between btn-group gap-3 mt-5 w-full px-4">
                <button
                    className="w-1/2 border-[1px] rounded-md text-sm h-[42px] text-blue-400 border-blue-400"
                    onClick={() => cancelReport()}
                >
                    CANCEL
                </button>
                <button
                    className="w-1/2 border-[1px] rounded-md text-sm h-[42px] text-white border-blue-400 bg-blue-400"
                    onClick={() => setReportStep(2)}
                >
                    NEXT
                </button>
            </div>
        </div>
    );

    const SuspectInformation = (
        <div className="suspect-information">
            <div className="px-4">
                <div className="flex flex-col my-4">
                    <label htmlFor="userId" className="text-gray-500 text-md">
                        User ID *
                    </label>
                    <input
                        id="userId"
                        className="bg-[#2f2f2f] rounded-md p-2 mt-1 text-sm h-[40px] text-white"
                        placeholder="Enter User ID"
                        onChange={(e) => setUserId(e.target.value)}
                        value={userId}
                    />
                    {inputErr.userId && (
                        <span className="text-red-700 text-xs mt-1">{inputErr.userId}</span>
                    )}
                </div>
                <div className="flex flex-col my-4">
                    <label htmlFor="amount" className="text-gray-500 text-md">
                        Amount *
                    </label>
                    <input
                        id="amount"
                        className="bg-[#2f2f2f] rounded-md p-2 mt-1 text-sm h-[40px] text-white"
                        placeholder="Enter amount in $"
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                    {inputErr.amount && (
                        <span className="text-red-700 text-xs mt-1">{inputErr.amount}</span>
                    )}
                </div>
                <div className="flex flex-col my-4">
                    <label htmlFor="walletAddress" className="text-gray-500 text-md">
                        Wallet Address
                    </label>
                    <input
                        id="walletAddress"
                        className="bg-[#2f2f2f] rounded-md p-2 mt-1 text-sm h-[40px] text-white"
                        placeholder="Enter Wallet address"
                        onChange={(e) => setWalletAddress(e.target.value)}
                        value={walletAddress}
                    />
                    {inputErr.walletAddress && (
                        <span className="text-red-700 text-xs mt-1">
                            {inputErr.walletAddress}
                        </span>
                    )}
                </div>
                <div className="flex flex-col my-4">
                    <label className="text-gray-500 text-md">Additional Details</label>
                    <p className="text-gray-500 text-xs mt-1">
                        Be specific when providing information. Example: If reporting online criminal activity, please provide details such as the website's URL or internet address, the applications' name (e.g., Snapchat, Facebook, X, etc.), username of the individual you are reporting or the username of the profile which contains the comment you are reporting, and the date/time of post.
                    </p>
                    <textarea
                        rows={3}
                        className="bg-[#2f2f2f] rounded-md p-2 mt-1 text-sm text-white"
                        placeholder="Enter additional details"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
            </div>
            <div className="flex justify-between btn-group gap-3 w-full px-4">
                <button
                    className="w-1/2 border-[1px] rounded-md text-xm text-sm h-[42px] text-blue-400 border-blue-400"
                    onClick={() => setReportStep(1)}
                >
                    BACK
                </button>
                <button
                    className="w-1/2 border-[1px] rounded-md text-xm text-sm h-[42px] text-white border-blue-400 bg-blue-400"
                    onClick={onNext}
                >
                    NEXT
                </button>
            </div>
        </div>
    );

    const VictimInformation = (
        <div className="victim-information">
            <div className="px-4">
                <div className="flex flex-col my-4">
                    <label className="text-gray-500 text-md">Email</label>
                    <input
                        className="bg-[#2f2f2f] rounded-md p-2 mt-1 text-sm h-[40px] text-white"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {victimInputErr.email && (
                        <span className="text-red-700 text-xs mt-1">
                            {victimInputErr.email}
                        </span>
                    )}
                </div>
                <div className="flex flex-col my-4">
                    <label className="text-gray-500 text-md">Phone Number</label>
                    <input
                        className="bg-[#2f2f2f] rounded-md p-2 mt-1 text-sm h-[40px] text-white"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {victimInputErr.phoneNumber && (
                        <span className="text-red-700 text-xs mt-1">
                            {victimInputErr.phoneNumber}
                        </span>
                    )}
                </div>
                <div className="flex flex-col my-4">
                    <label className="text-gray-500 text-md">Involved Parties</label>
                    {partiesEmailAddressList.length !== 0 ? (
                        partiesEmailAddressList.map((item, index) => (
                            <div
                                className="flex items-center justify-between mt-1 gap-2"
                                key={index}
                            >
                                <input
                                    className="bg-[#2f2f2f] rounded-md p-2 w-full text-sm h-[40px] text-white"
                                    placeholder="Enter email"
                                    value={item}
                                    onChange={(e) => {
                                        const newList = [...partiesEmailAddressList];
                                        newList[index] = e.target.value;
                                        setPartiesEmailAddressList(newList);
                                    }}
                                />
                                {index === partiesEmailAddressList.length - 1 ? (
                                    <div
                                        className="bg-primary w-[40px] h-[40px] text-center rounded-md flex justify-center items-center cursor-pointer"
                                        onClick={() => addEmailAddress()}
                                    >
                                        <AiOutlinePlus color="white" size={24} />
                                    </div>
                                ) : (
                                    <div
                                        className="bg-red-500 w-[40px] h-[40px] text-center rounded-md flex justify-center items-center cursor-pointer"
                                        onClick={() => removeEmailAddress(index)}
                                    >
                                        <AiOutlineClose color="white" size={24} />
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center gap-2">
                            <input
                                className="bg-[#2f2f2f] rounded-md p-2 w-full text-sm h-[40px] text-white"
                                placeholder="Enter email"
                                onChange={(e) =>
                                    setPartiesEmailAddressList((prevList) => {
                                        const newList = [...prevList];
                                        newList[0] = e.target.value;
                                        return newList;
                                    })
                                }
                            />
                            <div
                                className="bg-primary w-[40px] h-[40px] text-center rounded-md flex justify-center items-center cursor-pointer"
                                onClick={addEmailAddress}
                            >
                                <AiOutlinePlus color="white" size={24} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-between btn-group gap-3 w-full px-4 mb-[38px]">
                <button
                    className="w-1/2 border-[1px] rounded-md text-xm text-sm h-[42px] text-blue-400 border-blue-400"
                    onClick={() => setReportStep(2)}
                >
                    BACK
                </button>
                <button
                    className="w-1/2 border-[1px] rounded-md text-xm text-sm h-[42px] text-white border-blue-400 bg-blue-400"
                    onClick={onNextVictim}
                >
                    NEXT
                </button>
            </div>
        </div>
    );

    const CrimeDetails = (
        <div className="crime-detail">
            <div className="px-4">
                <div className="flex flex-col my-4">
                    <label className="text-gray-500 text-md">Incident Description</label>
                    <textarea
                        rows={3}
                        className="bg-[#2f2f2f] rounded-md p-2 mt-1 text-sm text-white"
                        placeholder="Enter incident description"
                        value={incidentDescription}
                        onChange={(e) => setIncidentDescription(e.target.value)}
                    />
                    {crimeDetailsErr.description && (
                        <span className="text-red-700 text-xs mt-1">
                            {crimeDetailsErr.description}
                        </span>
                    )}
                </div>
                <div className="flex flex-col my-4 relative">
                    <label className="text-gray-500 text-md">Date of Incident</label>
                    <input
                        type="date"
                        ref={dateInputRef}
                        className="bg-[#2f2f2f] rounded-md p-2 mt-1 text-sm h-[40px] text-white appearance-none"
                        value={incidentDate}
                        onChange={(event) => handleDateChange(event)}
                    />
                    <AiOutlineCalendar
                        className="absolute bottom-3 right-2 text-white"
                        onClick={() => handleCalendarClick()}
                    />
                    {crimeDetailsErr.date && (
                        <span className="text-red-700 text-xs mt-1">
                            {crimeDetailsErr.date}
                        </span>
                    )}
                </div>
                <div className="flex flex-col my-4">
                    <label className="text-gray-500 text-md">Upload Evidence</label>
                    <div className="relative">
                        <input
                            className="bg-[#2f2f2f] rounded-md p-2 mt-1 text-sm h-[40px] text-white w-full"
                            onClick={() => {
                                const fileInput = document.getElementById('fileInput');
                                
                                if(fileInput) {
                                    fileInput.click();
                                }
                            }}
                            readOnly
                            placeholder="Upload Evidence"
                        />
                        <AiOutlinePaperClip
                            color="white"
                            className="absolute bottom-3 right-2"
                        />
                    </div>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        id="fileInput"
                    />
                    {uploadedFile && (
                        <div className="mt-2 p-2 bg-[#424242] rounded-md flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-white text-xs">{uploadedFile.name}</span>
                                <span className="text-gray-400 text-xs mt-1">
                                    {uploadedFile.size} bytes {/* Display file size in bytes */}
                                </span>
                            </div>
                            <button
                                onClick={() => setUploadedFile(null)} // Reset uploaded file
                                className="text-white "
                            >
                                <AiFillCloseCircle />
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-between btn-group gap-3 w-full px-4 mb-[38px]">
                <button
                    className="w-1/2 border-[1px] rounded-md text-xm text-sm h-[42px] text-blue-400 border-blue-400"
                    onClick={() => setReportStep(3)}
                >
                    BACK
                </button>
                <button
                    className="w-1/2 border-[1px] rounded-md text-xm text-sm h-[42px] text-white border-blue-400 bg-blue-400"
                    onClick={onNextCrimeDetails}
                >
                    NEXT
                </button>
            </div>
        </div>
    );

    const ReviewSubmit = (
        <div className="review-submit overflow-scroll">
            <div className="px-4">
                <div className="mt-5">
                    <h3 className="p-2 bg-[#2f2f2f] text-[#c0c0c0] rounded-t-md">
                        Choose Crime Type
                    </h3>
                    <div className="p-3 bg-[#232323] flex items-center gap-2 rounded-b-md">
                        <AiOutlineExclamationCircle size={24} color="#dcdcdc" />
                        <span className="text-[#dcdcdc] text-sm">{reportType}</span>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="p-2 bg-[#2f2f2f] text-[#c0c0c0] rounded-t-md">
                        Suspect Information
                    </h3>
                    <div className="p-3 bg-[#232323] flex flex-col">
                        <label className="text-[#9b9ba1] text-md">USER ID</label>
                        <span className="text-[#dcdcdc] text-sm">{userId}</span>
                    </div>
                    <div className="px-3 w-full bg-[#232323]">
                        <div className="bg-[#393939] w-full h-[1px]"></div>
                    </div>
                    <div className="p-3 bg-[#232323] flex flex-col">
                        <label className="text-[#9b9ba1] text-md">WALLET ADDRESS</label>
                        <span className="text-[#dcdcdc] text-sm">{walletAddress}</span>
                    </div>
                    <div className="px-3 w-full bg-[#232323]">
                        <div className="bg-[#393939] w-full h-[1px]"></div>
                    </div>
                    <div className="p-3 bg-[#232323] rounded-b-md flex flex-col">
                        <label className="text-[#9b9ba1] text-md">ADDITIONAL DETAILS</label>
                        <span className="text-[#dcdcdc] text-sm">{description}</span>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="p-2 bg-[#2f2f2f] text-[#c0c0c0] rounded-t-md">
                        Victim Information
                    </h3>
                    <div className="p-3 bg-[#232323] flex flex-col">
                        <label className="text-[#9b9ba1] text-md">EMAIL</label>
                        <span className="text-[#dcdcdc] text-sm">{email}</span>
                    </div>
                    <div className="px-3 w-full bg-[#232323]">
                        <div className="bg-[#393939] w-full h-[1px]"></div>
                    </div>
                    <div className="p-3 bg-[#232323] flex flex-col">
                        <label className="text-[#9b9ba1] text-md">PHONE NUMBER</label>
                        <span className="text-[#dcdcdc] text-sm">{phoneNumber}</span>
                    </div>
                    <div className="px-3 w-full bg-[#232323]">
                        <div className="bg-[#393939] w-full h-[1px]"></div>
                    </div>
                    <div className="p-3 bg-[#232323] rounded-b-md flex flex-col">
                        <label className="text-[#9b9ba1] text-md">
                            ADDITIONAL INFORMATION
                        </label>
                        <span className="text-[#dcdcdc] text-sm">
                            Additional Information is here...
                        </span>
                    </div>
                    <div className="px-3 w-full bg-[#232323]">
                        <div className="bg-[#393939] w-full h-[1px]"></div>
                    </div>
                    <div className="p-3 bg-[#232323] rounded-b-md flex flex-col">
                        <label className="text-[#9b9ba1] text-md">INVOLVED PARTIES</label>
                        {partiesEmailAddressList.map((item, index) => (
                            <span className="text-[#dcdcdc] text-sm" key={index}>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="p-2 bg-[#2f2f2f] text-[#c0c0c0] rounded-t-md">
                        Crime Details
                    </h3>
                    <div className="p-3 bg-[#232323] flex flex-col">
                        <label className="text-[#9b9ba1] text-md">
                            INCIDENT DESCRIPTION
                        </label>
                        <span className="text-[#dcdcdc] text-sm">
                            {incidentDescription}
                        </span>
                    </div>
                    <div className="px-3 w-full bg-[#232323]">
                        <div className="bg-[#393939] w-full h-[1px]"></div>
                    </div>
                    <div className="p-3 bg-[#232323] flex flex-col">
                        <label className="text-[#9b9ba1] text-md">DATE OF INCIDENT</label>
                        <span className="text-[#dcdcdc] text-sm">{incidentDate}</span>
                    </div>
                    <div className="px-3 w-full bg-[#232323]">
                        <div className="bg-[#393939] w-full h-[1px]"></div>
                    </div>
                    <div className="p-3 bg-[#232323] rounded-b-md flex flex-col">
                        <label className="text-[#9b9ba1] text-md">EVIDENCE</label>
                        <span className="text-[#dcdcdc] text-sm bg-[#2f2f2f] p-2 rounded-md mt-1">
                            {uploadedFile?.name}
                        </span>
                    </div>
                    <div className="px-3 w-full bg-[#232323]">
                        <div className="bg-[#393939] w-full h-[1px]"></div>
                    </div>
                    <div className="p-3 bg-[#232323] rounded-b-md flex flex-col">
                        <label className="text-[#9b9ba1] text-md">EXPORT MESSAGES</label>
                        <span className="text-[#dcdcdc] text-sm bg-[#2f2f2f] p-2 rounded-md mt-1">
                            export_messages01
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between btn-group gap-3 w-full px-4 mt-5">
                <button
                    className="w-1/2 border-[1px] rounded-md text-xm text-sm h-[42px] text-blue-400 border-blue-400"
                    onClick={() => setReportStep(4)}
                >
                    EDIT
                </button>
                <button
                    className="w-1/2 border-[1px] rounded-md text-xm text-sm h-[42px] text-white border-blue-400 bg-blue-400"
                    onClick={() => onSubmit()}
                >
                    SUBMIT
                </button>
            </div>
        </div>
    );

    const SubmitedReport = (
        <div className="flex justify-center items-center">
            <animated.div style={checkAnimation}>
                {showCheck && <AiOutlineCheck size={250} color="green" />}
            </animated.div>
        </div>
    );

    const reportContentAry = [
        StartReport,
        CrimeType,
        SuspectInformation,
        VictimInformation,
        CrimeDetails,
        ReviewSubmit,
        SubmitedReport,
    ];

    useEffect(() => {
        reportStep === 0
            ? setReportTitle("Report Type")
            : reportStep === 1
                ? setReportTitle("Report Type")
                : reportStep === 2
                    ? setReportTitle("Suspect Information")
                    : reportStep === 3
                        ? setReportTitle("Victim Information")
                        : reportStep === 4
                            ? setReportTitle("Crime Details")
                            : reportStep === 5
                                ? setReportTitle("Review and Submit")
                                : setReportTitle("Your Report was submitted successfully!");
    }, [reportStep]);

    return (
        <div>
            <div className="report-header flex p-4 gap-2">
                <div className="report-header-item flex items-center">
                    {reportStep === 6 ? (
                        <div
                            className={`bg-[#4ECC5E] rounded-full w-[40px] h-[40px] text-white text-center text-xl flex items-center justify-center`}
                        >
                            <AiOutlineCheck size={30} color="white" />
                        </div>
                    ) : (
                        <div
                            className={`${reportStep === 0 || reportStep === 1
                                ? "bg-primary"
                                : "bg-secondary"
                                } rounded-full w-[40px] h-[40px] text-white text-center text-xl flex items-center justify-center`}
                        >
                            1
                        </div>
                    )}
                    {(reportStep === 0 || reportStep === 1) && (
                        <label className="text-white text-md ml-2">
                            Crime Type
                        </label>
                    )}
                </div>
                <div className="report-header-item flex items-center">
                    {reportStep === 6 ? (
                        <div
                            className={`bg-[#4ECC5E] rounded-full w-[40px] h-[40px] text-white text-center text-xl flex items-center justify-center`}
                        >
                            <AiOutlineCheck size={30} color="white" />
                        </div>
                    ) : (
                        <div
                            className={`${reportStep === 2 ? "bg-primary" : "bg-secondary"
                                } rounded-full w-[40px] h-[40px] text-white text-center text-xl flex items-center justify-center`}
                        >
                            2
                        </div>
                    )}
                    {reportStep === 2 && (
                        <label className="text-white text-md ml-2">
                            Suspect Information
                        </label>
                    )}
                </div>
                <div className="report-header-item flex items-center">
                    {reportStep === 6 ? (
                        <div
                            className={`bg-[#4ECC5E] rounded-full w-[40px] h-[40px] text-white text-center text-xl flex items-center justify-center`}
                        >
                            <AiOutlineCheck size={30} color="white" />
                        </div>
                    ) : (
                        <div
                            className={`${reportStep === 3 ? "bg-primary" : "bg-secondary"
                                } rounded-full w-[40px] h-[40px] text-white text-center text-xl flex items-center justify-center`}
                        >
                            3
                        </div>
                    )}
                    {reportStep === 3 && (
                        <label className="text-white text-md ml-2">
                            Victim Information
                        </label>
                    )}
                </div>
                <div className="report-header-item flex items-center">
                    {reportStep === 6 ? (
                        <div
                            className={`bg-[#4ECC5E] rounded-full w-[40px] h-[40px] text-white text-center text-xl flex items-center justify-center`}
                        >
                            <AiOutlineCheck size={30} color="white" />
                        </div>
                    ) : (
                        <div
                            className={`${reportStep === 4 ? "bg-primary" : "bg-secondary"
                                } rounded-full w-[40px] h-[40px] text-white text-center text-xl flex items-center justify-center`}
                        >
                            4
                        </div>
                    )}
                    {reportStep === 4 && (
                        <label className="text-white text-md ml-2">
                            Crime Details
                        </label>
                    )}
                </div>
                <div className="report-header-item flex items-center">
                    {reportStep === 6 ? (
                        <div
                            className={`bg-[#4ECC5E] rounded-full w-[40px] h-[40px] text-white text-center text-xl flex items-center justify-center`}
                        >
                            <AiOutlineCheck size={30} color="white" />
                        </div>
                    ) : (
                        <div
                            className={`${reportStep === 5 ? "bg-primary" : "bg-secondary"
                                } rounded-full w-[40px] h-[40px] text-white text-center text-xl flex items-center justify-center`}
                        >
                            5
                        </div>
                    )}
                    {reportStep === 5 && (
                        <label className="text-white text-md ml-2">Review & Submit</label>
                    )}
                </div>
            </div>
            <div className="report-content pb-[82px]">
                <div className="report-step-title py-7 text-center border-y-[1px] border-[#3e3e3e]">
                    <h3 className="text-white text-2xl">{reportTitle}</h3>
                    {/* {reportStep === 0 && (
                        <p className="text-[#bcbcbc] text-md mt-2">
                            Consectetur adipiscing elit. Vivamus rutrum nunc quis ipsum
                            aliquam dictum. Pellentesque.
                        </p>
                    )} */}
                </div>
                <div className="py-2">{reportContentAry[reportStep]}</div>
            </div>
        </div>
    );
};

export default ReportContent;
