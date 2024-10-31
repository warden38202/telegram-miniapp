const ReportDetail = (props: any) => {
    const { detailData } = props;

    return (
        <div className="report-detail px-4">
            <div className="flex justify-between items-center">
                <h1 className="text-[27px] text-white">{detailData.reportType}</h1>
                <span className="text-[16px] text-[#DCDCDC]">{detailData.incidentDate}</span>
            </div>
            <span className="text-[16px] text-[#DCDCDC]">Case ID: {detailData.caseId}</span>
            <div>
                <div className={`${detailData.status === 0 ? 'bg-[#FA335B] text-[#FA335B]' : detailData.status === 1 ? 'bg-[#E78A21] text-[#E78A21]' : 'bg-[#4ECC5E] text-[#4ECC5E]'} bg-opacity-15 text-[#E78A21] inline-flex justify-center items-center py-[1px] px-2 rounded-full mt-2 mb-4`}>
                    {detailData.status === 2 ? <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.25L3.0625 5.3125L7 1" stroke="#4ECC5E" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> :
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill={detailData.status === 0 ? `#FA335B` : `#E78A21`} />
                        </svg>
                    }
                    <span className={`text-14px ml-2 ${detailData.status === 2 && 'text-[#4ECC5E]'}`}>
                        {detailData.status === 0 ? "Pending" : detailData.status === 1 ? "In Progress" : "Resolved"}
                    </span>
                </div>
            </div>
            <span className="text-[16px] text-[#DCDCDC]">Description</span>
            <p className="text-[16px] text-white mt-1">
                {detailData.description}
            </p>
        </div>
    )
}

export default ReportDetail;