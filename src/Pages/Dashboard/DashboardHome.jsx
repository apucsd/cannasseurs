import GeneralStateSection from "../../Components/ui/Dashboard/GeneralStateSection";
import RunningOrdersTable from "../../Components/ui/Dashboard/RunningOrdersTable";
import SalesTrackingChart from "../../Components/ui/Dashboard/SalesTrackingChart";
import TopBuyersPage from "../../Components/ui/Dashboard/TopBuyerPage";
import UserEngagement from "../../Components/ui/Dashboard/UserEngagement";

const DashboardHome = () => {
  const orderSummary = {
    done: 65,
    inProgress: 35,
  };

  const isLoading = false;

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={rentMeLogo} alt="" />
      </div>
    );
  }

  return (
    <div>
      <GeneralStateSection />
      <div className="flex w-full items-center mt-10 gap-6">
        <div className="w-5/12 bg-white border rounded-2xl py-3 flex flex-col justify-center">
          <p className="text-base font-semibold px-4 py-">
            Sales and Revenue Tracking
          </p>
          <SalesTrackingChart />
        </div>
        <div className="w-7/12 flex gap-4">
          <TopBuyersPage />
          <div className="w-[40%] border rounded-2xl bg-white p-4 flex flex-col items-center">
            <h1 className="text-lg font-semibold mb-4">Order Summary</h1>

            <div className="relative w-40 h-40">
              <svg
                className="absolute inset-0 transform -rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer circle (background) */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-[#d8f5d9]"
                  strokeWidth="4"
                ></circle>
                {/* Progress circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-[#173616]"
                  strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 16}`}
                  strokeDashoffset={`${
                    (2 * Math.PI * 16 * (100 - orderSummary?.done)) / 100
                  }`}
                  strokeLinecap="round"
                ></circle>
              </svg>

              {/* Center percentage display */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">
                  {orderSummary?.done}%
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 rounded-3xl bg-primary"></div>
                <p className="text-sm font-medium">
                  Done: {orderSummary?.done}%
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 rounded-3xl bg-secondary"></div>
                <p className="text-sm font-medium">
                  In Progress: {orderSummary?.inProgress.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:flex gap-6">
        <div className="w-5/12 my-6 "> {<RunningOrdersTable />}</div>
        <div className="w-7/12 my-6 ">{<UserEngagement />}</div>
      </div>
    </div>
  );
};

export default DashboardHome;
