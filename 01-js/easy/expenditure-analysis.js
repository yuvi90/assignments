/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = [];
  transactions.forEach((element) => {
    if (!categories.includes(element.category))
      categories.push(element.category);
  });

  let ans = categories.map((category) => {
    const total = transactions.reduce((prev, curr) => {
      if (curr.category === category) {
        prev += curr.price;
      }
      return prev;
    }, 0);
    return { category: category, totalSpent: total };
  });

  return ans;
}

module.exports = calculateTotalSpentByCategory;
