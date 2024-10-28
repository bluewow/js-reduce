const orders = [
  { id: 1, userId: 1, productId: 1, quantity: 2, price: 45000 },
  { id: 2, userId: 2, productId: 2, quantity: 1, price: 89000 },
  { id: 3, userId: 1, productId: 3, quantity: 3, price: 65000 },
  { id: 4, userId: 2, productId: 1, quantity: 1, price: 45000 },
  { id: 5, userId: 3, productId: 2, quantity: 2, price: 89000 },
  { id: 6, userId: 4, productId: 4, quantity: 4, price: 129000 },
  { id: 7, userId: 1, productId: 2, quantity: 1, price: 89000 },
  //   { id: 8, userId: 3, productId: 1, quantity: 3, price: 45000 },
  //   { id: 9, userId: 4, productId: 3, quantity: 2, price: 65000 },
  //   { id: 10, userId: 2, productId: 4, quantity: 1, price: 129000 },
  //   { id: 11, userId: 5, productId: 1, quantity: 5, price: 45000 },
  //   { id: 12, userId: 3, productId: 3, quantity: 2, price: 65000 },
  //   { id: 13, userId: 5, productId: 2, quantity: 3, price: 89000 },
  //   { id: 14, userId: 1, productId: 4, quantity: 1, price: 129000 },
  //   { id: 15, userId: 4, productId: 2, quantity: 2, price: 89000 },
];

/* 과제 5: 종합 리포트 생성 (난이도: ⭐️⭐️⭐️⭐️⭐️)
종합 판매 보고서 생성
- reduce를 한 번만 사용하여 모든 정보를 계산하세요

결과 형태:
{
   totalAmount: number,          // 전체 주문 총액
   productQuantities: {          // 상품별 판매 수량
       1: number,
       2: number,
       3: number,
       4: number
   },
   topCustomer: number,          // 가장 많이 구매한 고객 userId
   averageOrderAmount: number,   // 평균 주문 금액
   averageQuantityPerOrder: number,  // 주문당 평균 상품 수량
   productSalesPercentage: {     // 상품별 매출 비중
       1: number, // 예: 23.5 (%)
       2: number, // 예: 30.2 (%)
       3: number, // 예: 25.8 (%)
       4: number  // 예: 20.5 (%)
   }
}
*/

const result = orders.reduce(
  (prev, cur, index, arr) => {
    const _totalAmount = cur.quantity * cur.price;
    prev = {
      totalAmount: _totalAmount + (prev.totalAmount || 0),
      productQuantities: {
        ...prev.productQuantities,
        [cur.productId]:
          (prev.productQuantities[cur.productId] || 0) + cur.quantity,
      },
      // 가장 많이 구매한 고객 userId
    };
    return prev;
  },
  { totalAmount: 0, productQuantities: {} }
);

console.log(result);
