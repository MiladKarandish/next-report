import { cn } from "@/utils/classes";

interface Props {
  openingBalance: {
    title?: string;
    date?: string;
    amount: string;
  };
  closingBalance: {
    title?: string;
    date: string;
    amount: string;
  };
  debt?: {
    color?: string;
    amount: string;
    count: string;
  };
  receivable?: {
    color?: string;
    amount: string;
    count: string;
  };
}

const StatCards = ({ debt, receivable, openingBalance, closingBalance }: Props) => {
  const styles = {
    cardDate: "px-2 py-[6px] bg-[#0062BD] text-white text-sm leading-3 font-light",
    cardBalance: "p-1 text-[#002D70] text-base font-bold",
    middle_common: "p-1 border-dotted border-[#8FA9C4] font-light text-[#006FC3]",
  };

  return (
    <div className={`flex justify-evenly text-center px-2 `}>
      <div className={`min-w-fit border-2 border-blue-800 rounded-md overflow-hidden`}>
        <p className={cn(styles.cardDate)}>
          {openingBalance.title || "مانده اولیه در تاریخ"} {openingBalance.date}
        </p>
        <p className={cn(styles.cardBalance)}>{openingBalance.amount}</p>
      </div>

      <div className={`w-full flex justify-stretch items-center text-blue-800 font-semibold`}>
        {debt && (
          <div className={`w-full min-w-fit`}>
            <p className={cn(`border-e border-b`, styles.middle_common)}>{debt.count}</p>
            <p className={cn(`border-e ${debt.color || ""}`, styles.middle_common)}>{debt.amount}</p>
          </div>
        )}

        {receivable && (
          <div className={`w-full min-w-fit`}>
            <p className={cn(`border-b`, styles.middle_common)}>{receivable.count}</p>
            <p className={cn(`${receivable.color || ""}`, styles.middle_common)}>{receivable?.amount}</p>
          </div>
        )}
      </div>

      <div className={`min-w-fit border-2 border-blue-800 rounded-md`}>
        <p className={cn(styles.cardDate)}>
          {closingBalance.title || "مانده نهایی در تاریخ"} {closingBalance.date}
        </p>
        <p className={cn(styles.cardBalance)}>{closingBalance.amount}</p>
      </div>
    </div>
  );
};

export default StatCards;
