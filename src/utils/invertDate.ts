export function invertDate(date?: string): string {
  if (!date) return "";

  var arrayDt = date.split("-");

  return `${arrayDt[2].replace("-", "/").slice(0, 2)}/${arrayDt[1].replace("-","")}/${arrayDt[0].replace("-", "/")}`;
}
