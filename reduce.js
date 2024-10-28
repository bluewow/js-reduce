/*
JavaScript reduce() 마스터하기 종합 과제

아래 주문 데이터를 기반으로 다양한 데이터 분석을 수행해봅시다.
각 과제는 reduce()를 활용하여 해결해야 합니다.
*/

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
