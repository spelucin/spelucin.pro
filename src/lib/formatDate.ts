const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

export function formatDate(date: Date): string {
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}
