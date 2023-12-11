function solution(order) {
  const americano = ["iceamericano", "americanoice", "hotamericano", "americanohot", "americano", "anything"]
  const latte = ["icecafelatte", "cafelatteice", "hotcafelatte", "cafelattehot", "cafelatte"]
  let total = 0
  for (const menu of order) {
    if (americano.includes(menu)) {
      total += 4500
    } else if (latte.includes(menu)) {
      total += 5000
    }
  }
  return total;
}