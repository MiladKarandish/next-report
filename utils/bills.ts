export const getBillType = (type: string, credit: number) => {
  switch (type) {
    case "bill":
      return credit < 0 ? "پرداخت وجه" : "دریافت وجه";

    case "invoice":
      return credit < 0 ? "فاکتور فروش" : "فاکتور خرید";

    case "order":
      return credit < 0 ? "فاکتور فروش" : "فاکتور خرید";

    default:
      return "";
  }
};

export const getBillTypeReverse = (type: string, credit: number) => {
  switch (type) {
    case "bill":
      return credit > 0 ? "پرداخت وجه" : "دریافت وجه";

    case "invoice":
      return credit > 0 ? "فاکتور فروش" : "فاکتور خرید";

    case "order":
      return credit > 0 ? "فاکتور فروش" : "فاکتور خرید";

    default:
      return "";
  }
};
