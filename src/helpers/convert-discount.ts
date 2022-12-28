export function ConvertDiscount(price: number, discount?: number | null) {
  if (discount) {
    return (price + price / discount)
      .toFixed(2)
      .replace('.', ',')
  } else {
    return (price / 10)
      .toFixed(2)
      .replace('.', ',')
  }
}
