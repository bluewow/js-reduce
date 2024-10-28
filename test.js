// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const result = fruits.reduce(
//   (prev, cur) => prev.set(cur, prev.get(cur) + 1 || 1),
//   new Map()
// );

// console.log(result);

// 기대값
// { apple: 3, banana: 2, orange: 1 }

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log([...numbers.reduce((prev, cur) => prev.add(cur), new Set())]);

// console.log(
//   numbers.reduce((prev, cur) => {
//     if (prev.includes(cur)) return prev;
//     else prev.push(cur);
//     return prev;
//   }, [])
// );

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

// orders.reduce((prev, cur, index) => cur.quantity * cur.price, {});

const result = orders.reduce((prev, cur) => {
  const _totalAmount = cur.quantity * cur.price;
  prev[cur.userId] = {
    totalAmount: _totalAmount + (prev[cur.userId]?.totalAmount || 0),
  };
  return prev;
}, {});

console.log(result);
/* 기대값
{
        1: {
            totalSpent: 12345,
            totalOrder: 3
        },
        
    }


*/
