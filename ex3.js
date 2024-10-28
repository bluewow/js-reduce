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

/* 과제 3: 복합 데이터 변환 (난이도: ⭐️⭐️⭐️)
상품별 판매 현황 분석
- 각 상품별 판매 통계를 계산하세요

결과 형태:
{
   1: {  // productId
       totalQuantity: number,   // 총 판매 수량
       totalAmount: number,     // 총 판매 금액
       uniqueCustomers: number  // 구매한 고객 수
   },
   2: { ... },
   ...
}
*/

const result = orders.reduce((prev, cur) => {
  const _totalQuantity = cur.quantity;
  const _totalAmount = cur.quantity * cur.price;

  prev[cur.productId] = {
    totalQuantity: _totalQuantity + (prev[cur.productId]?.totalQuantity || 0),
    totalAmount: _totalAmount + (prev[cur.productId]?.totalAmount || 0),
    uniqueCustomers: (prev[cur.productId]?.uniqueCustomers || 0) + 1,
  };
  return prev;
}, {});

console.log(result);
