"use client";

import { Table } from "../Table";
import { fa, faAmount, faDate, faNumber } from "@/utils/fa";
import Footer from "../Footer";
import Header from "../Header";
import Summary from "../Summary";
import StatCards from "../StatCards";
import { cn } from "@/utils/classes";

const reportDesc = "ارزش موجودی محصولات بر اساس آخرین قیمت خرید آنها تا همان تاریخ تعیین شده‌اند";

const getColor = (quantity: number) => {
  if (quantity === 0) return "!text-black";

  if (quantity > 0) return "!text-green-500 drop-shadow";

  return "!text-red-500 drop-shadow";
};

const InventoryRecordItem = ({ quantity, amount, unit }: { quantity?: any; amount?: any; unit?: string }) => {
  if (!quantity || +quantity === 0) return <p> ------ </p>;

  if (quantity && amount) {
    return (
      <div className={cn(`text-justify ${getColor(quantity)}`)}>
        {quantity && (
          <p>
            <span dir="ltr">{faNumber(Math.abs(quantity))}</span> {unit}
          </p>
        )}
        {amount && (
          <div className={cn(`text-justify ${getColor(quantity)}`)}>
            <span>{amount}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`text-justify`}>
      {quantity && (
        <p>
          {faNumber(Math.abs(quantity))} {unit}
        </p>
      )}
      {amount && <p className={`text-start`}>{amount}</p>}
    </div>
  );
};

const InventoryTableSum = ({ quantity, amount, unit }: { quantity?: any; amount?: any; unit?: string }) => {
  if (!quantity || +quantity === 0) return <p className={`text-justify`}>فاقد موجودی</p>;

  return (
    <div className={`text-justify`}>
      {quantity && (
        <p>
          <span dir="ltr">{faNumber(Math.abs(quantity))}</span> {unit} {+quantity < 0 && "کسری"}
        </p>
      )}
      {+quantity > 0 && (
        <div>
          <span>{amount}</span>
        </div>
      )}
    </div>
  );
};

const InventoryReport = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { data: { currency, items, stats, range, createdBy } }: { data: any }
) => {
  const tableHeaders = ["ردیف", "محصول", "موجودی اولیه", "میزان ورود", `میزان خروج`, `موجودی نهایی`];
  const from = range?.from || Date.now();
  const to = range?.to || Date.now();

  const getStatus = (balance: number | null | undefined) => {
    if (!balance || balance < 0) return `فاقد موجودی`;
    return faAmount(balance, currency);
  };

  console.log(createdBy);

  return (
    <section>
      <div className={`space-y-4`}>
        <Header
          title={`گزارش محصولات انبار`}
          createdBy={{ name: createdBy.name, phone: createdBy.phone }}
          createdByTitle=""
        />

        <StatCards
          openingBalance={{
            title: "ارزش محصولات در",
            date: faDate(new Date(from!)),
            amount: getStatus(stats.initialValue),
          }}
          closingBalance={{
            title: "ارزش محصولات در",
            date: faDate(new Date(to)),
            amount: getStatus(stats.latestValue),
          }}
          debt={{
            color: getColor(+stats.inbounds.value),
            count: stats.inbounds.count
              ? `${faNumber(stats.inbounds.count)} ورود به انبار`
              : `محصولی به انبار وارد نشده`,
            amount: faAmount(+stats.inbounds.value, currency),
          }}
          receivable={{
            color: getColor(+stats.outbounds.value),
            count: stats.outbounds.count
              ? `${faNumber(stats.outbounds.count)} خروج از انبار`
              : `محصولی از انبار خارج نشده`,
            amount: faAmount(+stats.outbounds.value, currency),
          }}
        />

        <div className={`relative ps-7 font-bold text-blue-800`}>
          <span className={`absolute right-2 text-3xl`}>*</span>
          <span className={``}>{reportDesc}</span>
        </div>

        <main>
          <Table className={cn("px-4 ")} headItems={tableHeaders}>
            <colgroup>
              <col span={1} style={{ width: "4.5%" }} />
              <col span={1} style={{ width: "fit-content" }} />
              <col span={1} style={{ width: "fit-content" }} />
              <col span={1} style={{ width: "fit-content" }} />
              <col span={1} style={{ width: "fit-content" }} />
              <col span={1} style={{ width: "fit-content" }} />
              <col span={1} style={{ width: "fit-content" }} />
              <col span={1} style={{ width: "fit-content" }} />
            </colgroup>

            <tbody>
              {items.map((product, i) => (
                <tr key={product.id} className={`font-bold`}>
                  <td>{fa(i + 1)}</td>
                  <td>
                    <div className={`flex flex-col items-start text-start`}>
                      <p>{fa(product.name)}</p>
                      <p className={`text-gray-600 text-sm`}>{fa(product.desc)}</p>
                    </div>
                  </td>
                  <td>
                    <InventoryTableSum
                      quantity={product.initialQuantity}
                      unit={product.unit}
                      amount={product?.initialValue ? faAmount(+product?.initialValue, currency) : 0}
                    />
                  </td>
                  <td>
                    <InventoryRecordItem
                      quantity={product.inbounds?.amount}
                      unit={product.unit}
                      amount={product?.inbounds?.value ? faAmount(+product?.inbounds?.value, currency) : 0}
                    />
                  </td>
                  <td>
                    <InventoryRecordItem
                      quantity={product.outbounds?.amount}
                      unit={product.unit}
                      amount={product?.outbounds?.value ? faAmount(+product?.outbounds?.value, currency) : 0}
                    />
                  </td>
                  <td>
                    <InventoryTableSum
                      quantity={product.latestQuantity}
                      unit={product.unit}
                      amount={product?.latestValue ? faAmount(+product?.latestValue, currency) : 0}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </main>
      </div>

      <div className={`w-11/12 mx-auto mt-8 break-inside-avoid`}>
        <Summary
          description={reportDesc}
          balance={getStatus(stats.latestValue)}
          name={"ارزش محصولات موجود در انبار :"}
          date={faDate(new Date(to))}
        />
      </div>

      <Footer />
    </section>
  );
};

export default InventoryReport;
