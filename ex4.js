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

/* 과제 4: 고급 데이터 분석 (난이도: ⭐️⭐️⭐️⭐️)
사용자별 구매 패턴 분석
- 각 사용자의 구매 패턴을 분석하세요
- 평균 주문금액이 높은 순으로 정렬하세요

결과 형태:
[
   {
       userId: number,
       mostFrequentProduct: number,  // 가장 자주 구매한 상품 ID
       orderCount: number,           // 총 주문 횟수
       averageOrderAmount: number,   // 평균 주문 금액
       maxOrderAmount: number        // 최대 주문 금액
   },
   ...
]
*/

const result = orders.reduce((prev, cur) => {
  prev.push({
    userId: cur.userId,
    mostFrequentProduct: cur.productId,
    orderCount: 1,
    averageOrderAmount: cur.quantity * cur.price,
    maxOrderAmount: cur.quantity * cur.price,
  });
  return prev;
}, []);

console.log(...result);
