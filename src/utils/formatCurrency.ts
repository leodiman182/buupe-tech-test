export default function formatToCurrency(value: number | null | undefined) {
  if (value === null || value === undefined) {
    return 'R$ 0,00';
  }
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}