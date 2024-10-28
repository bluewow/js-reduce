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

/* 과제 2: 그룹화 집계 (난이도: ⭐️⭐️) 
사용자별 지출 총액
- userId별로 구매한 총 금액을 계산하세요

결과 형태:
{
   1: number,  // userId 1의 총 지출액
   2: number,  // userId 2의 총 지출액
   ...
}
*/

const result = orders.reduce((prev, cur) => {
  prevVal = prev.get(cur.userId) ?? 0;
  return prev.set(cur.userId, prevVal + cur.quantity * cur.price);
}, new Map());

console.log(result);

const result1 = orders.reduce((prev, cur) => {
  const _total = cur.quantity * cur.price;
  prev[cur.userId] = _total + (prev[cur.userId] || 0);
  return prev;
}, {});

console.log(result1);
