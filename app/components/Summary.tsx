import { cn } from "@/utils/classes";

interface Props {
  name?: string;
  balance: string;
  date?: string;
  balanceTitle?: string;
  description?: string | React.ReactNode;
  status?: string;
}

const Summary = ({ name, balance, date, description, balanceTitle, status }: Props) => {
  return (
    <div
      className={`w-11/12 mt-10 mx-auto flex justify-between items-stretch rounded-2xl text-start font-medium overflow-hidden break-inside-avoid`}
    >
      <div className={`max-w-full w-full flex flex-col justify-center gap-1 py-2 px-4 bg-sky-50`}>
        {description ? (
          <>
            {name && <p className={`text-[#003C7A] text-xl font-bold`}>{name}</p>}
            <p className={`max-w-full text-lg text-[#003375] font-light text-wrap`}>{description}</p>
          </>
        ) : (
          <>
            <p className={`text-lg text-[#003375] font-light`}>مانده {status}</p>
            <p className={`text-[#003C7A] text-xl font-bold`}>{name}</p>
          </>
        )}
      </div>

      <div className={`glass glass_selected w-fit flex flex-col justify-center items-start gap-2 py-2 px-4 pe-8`}>
        {balanceTitle ? (
          <span>{balanceTitle}</span>
        ) : (
          <p className={`text-base text-nowrap font-light`}>در تاریخ {date}</p>
        )}
        <p
          className={cn(`text-xl font-bold text-nowrap`, {
            "text-3xl": balanceTitle,
          })}
        >
          {balance}
        </p>
      </div>
    </div>
  );
};

export default Summary;
