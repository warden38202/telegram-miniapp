import { useEffect, useState } from "react";
import ReportDetail from "./ReportDetail";
import axios from 'axios';
import { baseUrl } from "../../utils/axiosClient";

const ReportList = (props: any) => {
  const { showDetail, isShowDetail, detailData } = props;

  const [listData, setListData] = useState<any[]>([]);
  const [filterStatus, setFilterStatus] = useState<number | null>(null); // State to hold selected filter

  useEffect(() => {
    const fetchData = async (status: number | null) => {
        try {
            const endpoint = status !== null ? `api/reports/status/${status}` : `api/reports`;

            const response = await axios.get(`${baseUrl}/${endpoint}`);

            setListData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData(filterStatus); // Fetch data based on selected filter
  }, [filterStatus]);

  return (
    <div className="pb-[82px]">
      {isShowDetail ? (
        <ReportDetail detailData={detailData} />
      ) : (
        <div className="report-list px-4">
          <h1 className="text-[27px] text-white text-center">
            Public Cases list
          </h1>
          <div className="report-status flex justify-between mt-5">
            <div
              onClick={() => setFilterStatus(null)} // All cases
              className={`rounded-full cursor-pointer text-[16px] py-2 px-5 ${
                filterStatus === null
                  ? "bg-primary text-white"
                  : "text-primary border-[1px] border-primary"
              }`}
            >
              All
            </div>
            <div
              onClick={() => setFilterStatus(1)} // In Progress cases
              className={`rounded-full cursor-pointer text-[16px] py-2 px-5 ${
                filterStatus === 1
                  ? "bg-primary text-white"
                  : "text-primary border-[1px] border-primary"
              }`}
            >
              In Progress
            </div>
            <div
              onClick={() => setFilterStatus(0)} // Pending cases
              className={`rounded-full cursor-pointer text-[16px] py-2 px-5 ${
                filterStatus === 0
                  ? "bg-primary text-white"
                  : "text-primary border-[1px] border-primary"
              }`}
            >
              Pending
            </div>
          </div>
          <hr className="opacity-20 my-4" />
          <div>
            {listData.map((item) => (
              <div
                key={item.id}
                className="report-list-item p-4 bg-[#232323] rounded-xl cursor-pointer mb-2"
                onClick={() => showDetail(item)}
              >
                <div className="flex justify-between">
                  <div
                    className={`${
                      item.status === 0
                        ? "bg-[#FA335B] text-[#FA335B]"
                        : item.status === 1
                        ? "bg-[#E78A21] text-[#E78A21]"
                        : "bg-[#4ECC5E] text-[#4ECC5E]"
                    } bg-opacity-15 flex justify-center items-center py-[1px] px-2 rounded-full`}
                  >
                    {item.status === 2 ? (
                      <svg
                        width="8"
                        height="6"
                        viewBox="0 0 8 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 3.25L3.0625 5.3125L7 1"
                          stroke="#4ECC5E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="4"
                          cy="4"
                          r="4"
                          fill={item.status === 0 ? `#FA335B` : `#E78A21`}
                        />
                      </svg>
                    )}
                    <span className="text-14px ml-2">
                      {item.status === 0
                        ? "Pending"
                        : item.status === 1
                        ? "In Progress"
                        : "Resolved"}
                    </span>
                  </div>
                  <span className="text-[#DCDCDC] text-[16px]">
                    {item.incidentDate}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <h3 className="text-white text-[18px]">
                      {item.reportType}
                    </h3>
                    <span className="text-[#DCDCDC] text-[16px]">
                      Case ID: {item.caseId}
                    </span>
                  </div>
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.4571 10.7929C17.8476 11.1834 17.8476 11.8166 17.4571 12.2071L9.95711 19.7071C9.56658 20.0976 8.93342 20.0976 8.54289 19.7071C8.15237 19.3166 8.15237 18.6834 8.54289 18.2929L15.3358 11.5L8.54289 4.70711C8.15237 4.31658 8.15237 3.68342 8.54289 3.29289C8.93342 2.90237 9.56658 2.90237 9.95711 3.29289L17.4571 10.7929Z"
                      fill="#9C9C9C"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportList;
