export default function (number) {
    let formatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0
  });
  return formatter.format(number) 
}