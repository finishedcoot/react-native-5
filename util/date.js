export function getFormatedDate(date) {
  return date.toISOString().slice(0, 10);
}

export function getDateMinusDayes(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
