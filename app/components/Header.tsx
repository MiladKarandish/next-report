import { fa, faDate } from "@/utils/fa";

export const PageNumber = () => (
  <div className={`w-fit`}>
    <span className="pageNumber"></span> / <span className="totalPages"></span>
  </div>
);

interface Props {
  title: string;
  createdByTitle?: string;
  createdBy?: {
    name: string;
    phone: string;
    cardNumber?: string | null;
    cardOwner?: string | null;
  };
}

const Header = ({ title, createdBy, createdByTitle = "صادر کننده: " }: Props) => {
  return (
    <header dir="rtl">
      <div className={`glass flex justify-between items-center p-4 bg-blue-800 text-white`}>
        <h1 className={`text-2xl`}>{title}</h1>
        <p className={`text-lg`}>تاریخ صدور: {faDate(new Date())}</p>
      </div>

      {createdBy && (
        <div className={`py-1 px-2 border-b-2 text-[#002D70] border-b-blue-800 text-sm font-bold text-start`}>
          {createdByTitle} {createdBy.name} {createdBy.phone && `(${fa(createdBy?.phone.replace("+98", "0"))})`}{" "}
          {createdBy?.cardNumber && `شماره کارت: ${fa(createdBy?.cardNumber)} ${createdBy?.cardOwner}`}
        </div>
      )}
    </header>
  );
};

export default Header;
