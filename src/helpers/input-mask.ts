export function normalizeFoneNumber(value: string | undefined) {
  if (!value) return

  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
}

export function normalizeCepNumber(value: string | undefined) {
  if (!value) return

  return value.replace(/\D/, '').replace(/(\d{5})(\d)/, '$1-$2')
}
