export function formatedDateSimple(date_to: any) {
  const this_date = new Date(date_to);

  const result = new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(this_date);
  //const result = day+" "+month+" "+year;
  return result;
}
