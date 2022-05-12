export function formatCurrency(currency: number) {
  const currencyFormated = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(currency)

  return currencyFormated
}
