import { useState } from "react";
import ReportContent from "./ReportContent";
import ReportHeader from "./ReportHeader";
import ReportList from "./ReportList";
import ReportFooter from "./ReportFooter";

const Report = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showReportPanel, setShowReportPanel] = useState(false);
  const [showReportList, setShowReportList] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [menu, setMenu] = useState("report");

  const onStart = () => {
    if (!isChecked) return;

    setShowReportPanel(true);
  };

  const goReportList = () => {
    setShowReportList(true);
    setMenu("");
  };

  const showDetail = (item: any) => {
    setIsShowDetail(true);
    setDetailData(item);
  };

  const goBack = () => {
    setIsShowDetail(false);
  };

  const onClickMenu = (type: string) => {
    setMenu(type);

    if (type === "report") {
      setShowReportPanel(false);
      setShowReportList(false);
      setIsChecked(false);
    }
  };

  return (
    <div className="relative h-full">
      <ReportHeader
        goReportList={goReportList}
        goBack={goBack}
        isShowDetail={isShowDetail}
      />
      <div className="report-content">
        {showReportList ? (
          <ReportList
            showDetail={showDetail}
            isShowDetail={isShowDetail}
            detailData={detailData}
          />
        ) : showReportPanel ? (
          <ReportContent />
        ) : (
          <div className="p-4 pl-8">
            <div className="report-term">
              <div className="report-term-item border-[5px] border-l-0 border-[#464646] rounded-3xl bg-[#2f2f2f] p-4 pl-0 rounded-l-none">
                <div className="flex items-center">
                  <div className="mr-4 -ml-4">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="60"
                        height="60"
                        rx="30"
                        fill="url(#paint0_linear_60_1275)"
                      />
                      <path
                        d="M19.7344 26.0278C19.7344 25.3276 20.1035 24.6793 20.7055 24.3219L28.9913 19.4022C29.6156 19.0315 30.3926 19.0315 31.017 19.4022L39.3028 24.3219C39.9048 24.6793 40.2738 25.3276 40.2738 26.0278V38.9609C40.2738 40.0566 39.3856 40.9448 38.2899 40.9448H21.7184C20.6227 40.9448 19.7344 40.0566 19.7344 38.9609V26.0278Z"
                        fill="white"
                      />
                      <path
                        d="M33.5655 25.5097C32.1078 25.0332 30.8744 25.5657 29.8093 27.0234C28.7721 25.5377 27.5107 25.0332 26.0811 25.5097C23.9227 26.1824 24.1749 28.9015 25.0159 30.0788C25.8008 31.172 27.3986 32.7418 29.8093 34.8161C32.248 32.7418 33.8458 31.172 34.6306 30.0788C35.4436 28.9015 35.7239 26.1824 33.5655 25.5097Z"
                        fill="#00D3FE"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_60_1275"
                          x1="30"
                          y1="0"
                          x2="51.6646"
                          y2="50.752"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00E7FF" />
                          <stop offset="1" stopColor="#007AFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="">
                    <h3 className="text-white text-[18px]">
                      Welcome to the LexCura Mini App!
                    </h3>
                    <p className="text-[#BCBCBC] text-[17px] mt-4">
                      Our Service is dedicated to helping you contribute to a
                      safer online community by reporting suspictious activities
                      and potential cybercrimes. With a straightforward
                      reporting process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="report-term-item border-[5px] border-l-0 border-[#464646] rounded-3xl bg-[#2f2f2f] p-4 pl-0 rounded-l-none my-4">
                <div className="flex items-center">
                  <div className="mr-4 -ml-4">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="60"
                        height="60"
                        rx="30"
                        fill="url(#paint0_linear_60_1280)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.7691 13.555C15.8545 13.3497 16.1454 13.3497 16.2308 13.555L17.2638 16.0387C17.2998 16.1253 17.3813 16.1844 17.4747 16.1919L20.1561 16.4069C20.3778 16.4246 20.4677 16.7013 20.2988 16.8459L18.2558 18.5959C18.1846 18.6569 18.1535 18.7526 18.1753 18.8438L18.7994 21.4604C18.851 21.6767 18.6157 21.8477 18.4259 21.7318L16.1303 20.3296C16.0503 20.2807 15.9497 20.2807 15.8697 20.3296L13.574 21.7318C13.3842 21.8477 13.1489 21.6767 13.2005 21.4604L13.8247 18.8438C13.8464 18.7526 13.8153 18.6569 13.7441 18.5959L11.7012 16.8459C11.5323 16.7013 11.6222 16.4246 11.8438 16.4069L14.5252 16.1919C14.6187 16.1844 14.7001 16.1253 14.7361 16.0387L15.7691 13.555ZM16.2308 25.555C16.1454 25.3497 15.8545 25.3497 15.7691 25.555L14.7361 28.0387C14.7001 28.1253 14.6187 28.1844 14.5252 28.1919L11.8438 28.4069C11.6222 28.4246 11.5323 28.7013 11.7012 28.8459L13.7441 30.5959C13.8153 30.6569 13.8464 30.7526 13.8247 30.8438L13.2005 33.4604C13.1489 33.6767 13.3842 33.8477 13.574 33.7318L15.8697 32.3296C15.9497 32.2807 16.0503 32.2807 16.1303 32.3296L18.4259 33.7318C18.6157 33.8477 18.851 33.6767 18.7994 33.4604L18.1753 30.8438C18.1535 30.7526 18.1846 30.6569 18.2558 30.5959L20.2988 28.8459C20.4677 28.7013 20.3778 28.4246 20.1561 28.4069L17.4747 28.1919C17.3813 28.1844 17.2998 28.1253 17.2638 28.0387L16.2308 25.555ZM26 29.25C25.5858 29.25 25.25 29.5858 25.25 30C25.25 30.4142 25.5858 30.75 26 30.75H47C47.4142 30.75 47.75 30.4142 47.75 30C47.75 29.5858 47.4142 29.25 47 29.25H26ZM26 17.25C25.5858 17.25 25.25 17.5858 25.25 18C25.25 18.4142 25.5858 18.75 26 18.75H47C47.4142 18.75 47.75 18.4142 47.75 18C47.75 17.5858 47.4142 17.25 47 17.25H26ZM15.7691 37.555C15.8545 37.3497 16.1454 37.3497 16.2308 37.555L17.2638 40.0387C17.2998 40.1253 17.3813 40.1844 17.4747 40.1919L20.1561 40.4069C20.3778 40.4246 20.4677 40.7013 20.2988 40.8459L18.2558 42.5959C18.1846 42.6569 18.1535 42.7526 18.1753 42.8438L18.7994 45.4604C18.851 45.6767 18.6157 45.8477 18.4259 45.7318L16.1303 44.3296C16.0503 44.2807 15.9497 44.2807 15.8697 44.3296L13.574 45.7318C13.3842 45.8477 13.1489 45.6767 13.2005 45.4604L13.8247 42.8438C13.8464 42.7526 13.8153 42.6569 13.7441 42.5959L11.7012 40.8459C11.5323 40.7013 11.6222 40.4246 11.8438 40.4069L14.5252 40.1919C14.6187 40.1844 14.7001 40.1253 14.7361 40.0387L15.7691 37.555ZM26 41.25C25.5858 41.25 25.25 41.5858 25.25 42C25.25 42.4142 25.5858 42.75 26 42.75H47C47.4142 42.75 47.75 42.4142 47.75 42C47.75 41.5858 47.4142 41.25 47 41.25H26Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_60_1280"
                          x1="30"
                          y1="0"
                          x2="30"
                          y2="60"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#34C759" />
                          <stop offset="1" stopColor="#009B27" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="">
                    <h3 className="text-white text-[18px]">Our Service</h3>
                    <p className="text-[#BCBCBC] text-[17px] mt-4">
                      The goal is simple: to facilitate effective reporting of
                      cybercrime incidents and ensure your information reaches
                      the right channels for investigation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="report-term-item border-[5px] border-l-0 border-[#464646] rounded-3xl bg-[#2f2f2f] p-4 pl-0 rounded-l-none my-4">
                <div className="flex items-center">
                  <div className="mr-4 -ml-4">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="60"
                        height="60"
                        rx="30"
                        fill="url(#paint0_linear_60_1297)"
                      />
                      <path
                        d="M15 27C15 22.7996 15 20.6994 15.8175 19.0951C16.5365 17.6839 17.6839 16.5365 19.0951 15.8175C20.6994 15 22.7996 15 27 15H28.8V23.5968C28.5422 23.1621 28.2462 22.7568 27.9013 22.4121C27.0142 21.5257 25.7608 20.7324 24.389 20.4421C22.9694 20.1418 21.3774 20.3839 20.0985 21.6627C19.4411 22.32 19.0728 23.1024 18.9924 23.9431C18.9143 24.7607 19.1159 25.5445 19.4402 26.2331C19.8911 27.1902 20.628 28.0712 21.4626 28.8H15V27Z"
                        fill="white"
                      />
                      <path
                        d="M15 31.2V33C15 37.2004 15 39.3006 15.8175 40.9049C16.5365 42.3161 17.6839 43.4635 19.0951 44.1825C20.6994 45 22.7996 45 27 45H28.8V34.4302C26.767 37.078 24.2639 38.8975 21.25 39.5002C20.5596 39.6383 19.8879 39.1905 19.7498 38.5C19.6117 37.8096 20.0595 37.1379 20.75 36.9998C23.5041 36.4489 25.9164 34.4968 27.9126 31.2144C27.8689 31.2097 27.8247 31.205 27.7801 31.2H15Z"
                        fill="white"
                      />
                      <path
                        d="M32.2199 31.2C32.1753 31.205 32.1312 31.2097 32.0874 31.2144C34.0836 34.4968 36.4959 36.4489 39.25 36.9998C39.9405 37.1379 40.3883 37.8096 40.2502 38.5C40.1121 39.1905 39.4404 39.6383 38.75 39.5002C35.7361 38.8975 33.233 37.078 31.2 34.4302V45H33C37.2004 45 39.3006 45 40.9049 44.1825C42.3161 43.4635 43.4635 42.3161 44.1825 40.9049C45 39.3006 45 37.2004 45 33V31.2H32.2199Z"
                        fill="white"
                      />
                      <path
                        d="M45 28.8V27C45 22.7996 45 20.6994 44.1825 19.0951C43.4635 17.6839 42.3161 16.5365 40.9049 15.8175C39.3006 15 37.2004 15 33 15H31.2V23.5968C31.4578 23.1621 31.7538 22.7568 32.0987 22.4121C32.9858 21.5257 34.2392 20.7324 35.611 20.4421C37.0306 20.1418 38.6226 20.3839 39.9015 21.6627C40.5589 22.32 40.9272 23.1024 41.0076 23.9431C41.0857 24.7607 40.8841 25.5445 40.5598 26.2331C40.1089 27.1902 39.372 28.0712 38.5374 28.8H45Z"
                        fill="white"
                      />
                      <path
                        d="M36.1388 22.9369C35.3441 23.1051 34.5142 23.6033 33.9013 24.2158C33.3813 24.7355 32.9506 25.6737 32.504 26.9467C32.4015 27.2391 32.2969 27.554 32.189 27.8785C32.1031 28.1372 32.0149 28.4027 31.9243 28.6672C32.0664 28.6514 32.213 28.6337 32.3628 28.6137C33.743 28.4298 35.1774 28.0812 36.0428 27.5043C37.0415 26.8385 37.8707 25.9577 38.2529 25.1464C38.439 24.7514 38.4926 24.4308 38.4692 24.1857C38.4479 23.9638 38.3579 23.7253 38.0985 23.4659C37.5438 22.9113 36.8858 22.7788 36.1388 22.9369Z"
                        fill="white"
                      />
                      <path
                        d="M26.0987 24.2158C25.4858 23.6033 24.6559 23.1051 23.8612 22.9369C23.1142 22.7788 22.4562 22.9113 21.9015 23.4659C21.6421 23.7253 21.5521 23.9638 21.5308 24.1857C21.5074 24.4308 21.561 24.7514 21.7471 25.1464C22.1293 25.9577 22.9585 26.8385 23.9572 27.5043C24.8226 28.0812 26.257 28.4298 27.6372 28.6137C27.787 28.6337 27.9336 28.6514 28.0757 28.6672C27.9851 28.4027 27.8971 28.1379 27.8112 27.8792C27.7034 27.5547 27.5985 27.2391 27.496 26.9467C27.0494 25.6737 26.6187 24.7355 26.0987 24.2158Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_60_1297"
                          x1="30"
                          y1="0"
                          x2="51.6646"
                          y2="50.752"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFB041" />
                          <stop offset="1" stopColor="#FF9500" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="">
                    <h3 className="text-white text-[18px]">
                      Earn Rewards for Successful Reports
                    </h3>
                    <p className="text-[#BCBCBC] text-[17px] mt-4">
                      We value your contribution! As a token of appreciation,
                      successful reports that lead to actionable outcomes may be
                      eligible for rewards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accept-term flex">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="form-checkbox text-blue-500 w-[25px] h-[25px] rounded-lg"
              />
              <p className="text-[#BCBCBC] ml-3">
                By continuing you agree to the PIA and our terms of service.
              </p>
            </div>
            <button
              className={`${
                isChecked ? "bg-primary" : "bg-[#5B5B5B]"
              } w-full h-[50px] text-white rounded-lg mt-5`}
              onClick={() => onStart()}
            >
              START
            </button>
          </div>
        )}
      </div>
      {(showReportList || showReportPanel) && (
        <ReportFooter onClickMenu={onClickMenu} menu={menu} />
      )}
    </div>
  );
};

export default Report;
