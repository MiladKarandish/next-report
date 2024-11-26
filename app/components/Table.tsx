import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
  headItems: string[];
}

export const Table = ({ children, className, headItems }: Props) => (
  <div className={twMerge(`w-fill rounded-lg overflow-hidden border border-1 border-gray-200`, className)}>
    <table className="table w-full">
      <thead className={`border-b-2 border-blue-800 text-blue-800`}>
        <tr>
          {headItems.map((headItem) => (
            <th key={headItem}>{headItem}</th>
          ))}
        </tr>
      </thead>
      {children}
    </table>
  </div>
);

const commonClass = "text-right py-2 px-3";

// export const Th = ({ children }: { children: any }) => (
//   <th className={twMerge(commonClass, "bg-gray-100")}>{children}</th>
// );

// export const Td = ({ children }: { children: any }) => <td className={twMerge(commonClass)}>{children}</td>;

// export const Tr = ({ children }: { children: ReactNode | ReactNode[] }) => (
//   <tr className="striped border-b border-1 border-gray-200 last:border-none">{children}</tr>
// );

{
  /* <Table className="p-4">

<div className="c-row c-head bg-shark-600">
  <div className="c-col">#</div>
  {tableHeaders.map((header, index) => (
    <div key={index} className="c-col">
      {header}
    </div>
  ))}
</div>


{mockPartnerBillsReport &&
  mockPartnerBillsReport.bills.length > 0 &&
  mockPartnerBillsReport.bills.map((bill, i) => {
    return (
      <div key={i} className="c-row">
        <div className="c-col">{i + 1}</div>
        <div className="c-col">{bill.date}</div>
        <div className="c-col">{bill.description}</div>
        <div className="c-col">{+bill.credit < 0 ? Math.abs(+bill.credit) : 0}</div>
        <div className="c-col">{+bill.credit > 0 ? Math.abs(+bill.credit) : 0}</div>
        <div className="c-col">{Math.abs(+bill.credit)}</div>
      </div>
    );
  })}
</Table> */
}
