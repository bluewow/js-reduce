const orders = [
  { id: 1, userId: 1, productId: 1, quantity: 2, price: 45000 },
  { id: 2, userId: 2, productId: 2, quantity: 1, price: 89000 },
  { id: 3, userId: 1, productId: 3, quantity: 3, price: 65000 },
  { id: 4, userId: 2, productId: 1, quantity: 1, price: 45000 },
  { id: 5, userId: 3, productId: 2, quantity: 2, price: 89000 },
  { id: 6, userId: 4, productId: 4, quantity: 4, price: 129000 },
  { id: 7, userId: 1, productId: 2, quantity: 1, price: 89000 },
  { id: 8, userId: 3, productId: 1, quantity: 3, price: 45000 },
  { id: 9, userId: 4, productId: 3, quantity: 2, price: 65000 },
  { id: 10, userId: 2, productId: 4, quantity: 1, price: 129000 },
  { id: 11, userId: 5, productId: 1, quantity: 5, price: 45000 },
  { id: 12, userId: 3, productId: 3, quantity: 2, price: 65000 },
  { id: 13, userId: 5, productId: 2, quantity: 3, price: 89000 },
  { id: 14, userId: 1, productId: 4, quantity: 1, price: 129000 },
  { id: 15, userId: 4, productId: 2, quantity: 2, price: 89000 },
];

/* 과제 1: 기본 집계 (난이도: ⭐️)
주문 총액 계산하기
- 모든 주문의 총 금액을 계산하세요 (quantity * price의 총합)

결과 형태:
number  // 총 주문금액
*/

const result = orders.reduce((prev, cur) => {
  return prev + cur.quantity * cur.price;
}, 0);

console.log(`number = ${result}`);
