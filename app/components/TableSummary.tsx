import type { PartnerReportType } from "../schema/PartnerBillsSchema";
import { fa } from "../utils/fa";

export interface Props {
  balance: number;
  createdBy: PartnerReportType["createdBy"];
}

const TableSummary = ({ balance, createdBy }: Props) => {
  return (
    <div className={`w-full flex justify-between`}>
      <div className={`basis-2/3 space-y-2 p-4 rounded-s-lg bg-[#EDEFF2]`}>
        <p className={`text-2xl font-semibold text-blue-700`}>از خرید شما متشکریم</p>
        {createdBy.cardNumber && (
          <p className={`text-slate-600`}>
            کارت بانکی {createdBy?.cardOwner}: {fa(createdBy?.cardNumber)}
          </p>
        )}
      </div>

      <div
        className={`flex-grow basis-1/3 relative flex justify-center items-center p-4 bg-blue-800 text-black rounded-e-lg`}
        style={{ minWidth: "fit-content" }}
      >
        <p className={`absolute bottom-full right-0 text-blue-800`}>جمع کل</p>
        <p className={`text-white text-4xl font-bold`}>
          {Math.abs(balance).toLocaleString("fa-IR")} <span className={`text-sm`}>ریال</span>
        </p>
        <p className={`absolute top-full right-0`}>موعد پرداخت</p>
      </div>
    </div>
  );
};

export default TableSummary;
