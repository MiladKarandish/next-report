const replacements: Record<string, string> = {
  "0": "۰",
  "1": "۱",
  "2": "۲",
  "3": "۳",
  "4": "۴",
  "5": "۵",
  "6": "۶",
  "7": "۷",
  "8": "۸",
  "9": "۹",
  ".": "/",
};

export const currencies: Record<string, string> = {
  irr: "ریال",
  irt: "تومان",
};

export function fa(text: string | number | null | undefined): string {
  if (text === null || text === undefined) {
    return "";
  }

  return text.toLocaleString().replace(/\d|\./g, (match) => replacements[match] ?? match);
}

const formatter = new Intl.NumberFormat("en-US");

export function faNumber(price: number | null | undefined, thousandsSeparator: boolean = true) {
  if (price === null || price === undefined) {
    return "";
  }

  return fa(thousandsSeparator ? formatter.format(price) : price);
}

const dateFormatter = new Intl.DateTimeFormat("fa-IR", {
  timeZone: "Asia/Tehran",
  weekday: "long",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "numeric",
  minute: "numeric",
});

export function faDateTime(date: Date) {
  const parts = dateFormatter.formatToParts(date);

  const reorderedParts = [
    parts.find((part) => part.type === "day"),
    parts.find((part) => part.type === "month"),
    parts.find((part) => part.type === "year"),
  ];

  const timeParts = [parts.find((part) => part.type === "hour"), parts.find((part) => part.type === "minute")];

  const formattedDate = reorderedParts.map((part) => part!.value).join("/");
  const formattedTime = timeParts.map((part) => part!.value).join(":");

  return `${formattedDate} - ساعت ${formattedTime}`;
}

export function faDate(date: Date) {
  const parts = dateFormatter.formatToParts(date);

  const reorderedParts = [
    parts.find((part) => part.type === "year"),
    parts.find((part) => part.type === "month"),
    parts.find((part) => part.type === "day"),
  ];

  return reorderedParts.map((part) => part!.value).join("/");
}

export const faAmount = (n: number, currency: "irr" | "irt" = "irr", displayCurrency: boolean = true) => {
  n = Math.abs(n);
  n = currency === "irt" ? n / 10 : n;
  if (!currency) return faNumber(n);
  return displayCurrency ? faNumber(n) + " " + currencies[currency] : faNumber(n);
};

export const faBalance = (n: number, currency: "irr" | "irt" = "irr") => {
  if (n === 0) return "تسویه";
  return n > 0 ? faAmount(n, currency) + " طلبکار" : faAmount(-1 * n, currency) + " بدهکار";
};

export const faBalanceStatus = (n: number, label: string = "", reverse?: boolean) => {
  if (n === 0) return "تسویه";
  if (reverse) return n > 0 ? "طلبکار " + label : "بدهکار " + label;

  return n < 0 ? "طلبکار " + label : "بدهکار " + label;
};

export const faPaymentTypes = {
  cash: "نقدی",
  card_to_card: "کارت به کارت",
  pos: "پوز",
  online: "پرداخت آنلاین",
  paya: "پایا",
  satna: "ساتنا",
  bank_transfer: "حواله",
  cheque: "چک پاس شده",
  pol: "پل",
  other: "سایر",
};
