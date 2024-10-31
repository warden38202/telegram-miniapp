const ReportHeader = (props: any) => {
    const { goReportList, isShowDetail, goBack } = props;
  
    return (
      <div className="header flex justify-between items-center p-4">
        <a className="text-[#046fe3]">
          {isShowDetail ? (
            <div className="flex cursor-pointer" onClick={() => goBack()}>
              <svg
                className="mr-2"
                width="15"
                height="23"
                viewBox="0 0 15 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_813_445)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.54289 10.2929C2.15237 10.6834 2.15237 11.3166 2.54289 11.7071L10.0429 19.2071C10.4334 19.5976 11.0666 19.5976 11.4571 19.2071C11.8476 18.8166 11.8476 18.1834 11.4571 17.7929L4.66421 11L11.4571 4.20711C11.8476 3.81658 11.8476 3.18342 11.4571 2.79289C11.0666 2.40237 10.4334 2.40237 10.0429 2.79289L2.54289 10.2929Z"
                    fill="#007AFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_813_445">
                    <rect
                      width="22"
                      height="15"
                      fill="white"
                      transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 15 22.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Back
            </div>
          ) : (
            "Cancel"
          )}
        </a>
        <div className="text-center">
          <h3 className="text-white text-[17px]">@Report</h3>
          <span className="text-[#707579] text-[13px]">LexCura</span>
        </div>
        <div className="cursor-pointer" onClick={() => goReportList()}>
          <svg
            width="27"
            height="24"
            viewBox="0 0 27 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5088 23.0977C12.2549 23.0977 11.0566 22.9014 9.91406 22.5088C8.77734 22.1221 7.73145 21.5771 6.77637 20.874C5.82129 20.1709 4.99219 19.3418 4.28906 18.3867C3.58594 17.4316 3.03809 16.3828 2.64551 15.2402C2.25879 14.0977 2.06543 12.9023 2.06543 11.6543C2.06543 10.4004 2.25879 9.20508 2.64551 8.06836C3.03223 6.92578 3.57715 5.87695 4.28027 4.92188C4.98926 3.9668 5.81836 3.1377 6.76758 2.43457C7.72266 1.72559 8.76855 1.17773 9.90527 0.791016C11.0479 0.398437 12.2461 0.202148 13.5 0.202148C14.7539 0.202148 15.9521 0.398437 17.0947 0.791016C18.2373 1.17773 19.2861 1.72559 20.2412 2.43457C21.1963 3.1377 22.0254 3.9668 22.7285 4.92188C23.4375 5.87695 23.9854 6.92578 24.3721 8.06836C24.7646 9.20508 24.9609 10.4004 24.9609 11.6543C24.9609 12.9023 24.7646 14.0977 24.3721 15.2402C23.9854 16.3828 23.4375 17.4316 22.7285 18.3867C22.0254 19.3418 21.1963 20.1709 20.2412 20.874C19.2861 21.5771 18.2373 22.1221 17.0947 22.5088C15.958 22.9014 14.7627 23.0977 13.5088 23.0977ZM13.5088 21.4629C14.5986 21.4629 15.6328 21.2959 16.6113 20.9619C17.5957 20.6338 18.4951 20.1709 19.3096 19.5732C20.1299 18.9756 20.8389 18.2695 21.4365 17.4551C22.04 16.6348 22.5059 15.7354 22.834 14.7568C23.1621 13.7725 23.3232 12.7383 23.3174 11.6543C23.3174 10.5645 23.1504 9.53027 22.8164 8.55176C22.4883 7.56738 22.0254 6.66797 21.4277 5.85352C20.8301 5.0332 20.1211 4.32422 19.3008 3.72656C18.4863 3.12891 17.5869 2.66602 16.6025 2.33789C15.624 2.00977 14.5898 1.8457 13.5 1.8457C12.416 1.8457 11.3818 2.00977 10.3975 2.33789C9.41895 2.66602 8.52246 3.12891 7.70801 3.72656C6.89355 4.32422 6.1875 5.0332 5.58984 5.85352C4.99219 6.66797 4.5293 7.56738 4.20117 8.55176C3.87305 9.53027 3.70898 10.5645 3.70898 11.6543C3.70898 12.7383 3.87305 13.7725 4.20117 14.7568C4.5293 15.7354 4.99219 16.6348 5.58984 17.4551C6.19336 18.2695 6.90234 18.9756 7.7168 19.5732C8.53125 20.1709 9.42773 20.6338 10.4062 20.9619C11.3906 21.2959 12.4248 21.4629 13.5088 21.4629ZM8.24414 13.2363C7.81055 13.2363 7.43848 13.084 7.12793 12.7793C6.81738 12.4688 6.66211 12.0938 6.66211 11.6543C6.66211 11.2148 6.81738 10.8428 7.12793 10.5381C7.43848 10.2275 7.81055 10.0723 8.24414 10.0723C8.67773 10.0723 9.0498 10.2275 9.36035 10.5381C9.6709 10.8428 9.82617 11.2148 9.82617 11.6543C9.82617 12.0938 9.6709 12.4688 9.36035 12.7793C9.05566 13.084 8.68359 13.2363 8.24414 13.2363ZM13.5 13.2363C13.0605 13.2363 12.6855 13.084 12.375 12.7793C12.0703 12.4688 11.918 12.0938 11.918 11.6543C11.918 11.2148 12.0703 10.8428 12.375 10.5381C12.6855 10.2275 13.0605 10.0723 13.5 10.0723C13.9336 10.0723 14.3057 10.2275 14.6162 10.5381C14.9268 10.8428 15.082 11.2148 15.082 11.6543C15.082 12.0938 14.9268 12.4688 14.6162 12.7793C14.3057 13.084 13.9336 13.2363 13.5 13.2363ZM18.7559 13.2363C18.3164 13.2363 17.9414 13.084 17.6309 12.7793C17.3203 12.4688 17.165 12.0938 17.165 11.6543C17.165 11.2148 17.3203 10.8428 17.6309 10.5381C17.9414 10.2275 18.3164 10.0723 18.7559 10.0723C19.1895 10.0723 19.5615 10.2275 19.8721 10.5381C20.1826 10.8428 20.3379 11.2148 20.3379 11.6543C20.3379 12.0938 20.1826 12.4688 19.8721 12.7793C19.5615 13.084 19.1895 13.2363 18.7559 13.2363Z"
              fill="#007AFF"
            />
          </svg>
        </div>
      </div>
    );
  };
  
  export default ReportHeader;
  