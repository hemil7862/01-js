/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const results = [];
  function groupBy(array, value) {
    return array.reduce((acc, obj) => {
      if (!acc[obj[value]]) acc[obj[value]] = [];
      acc[obj[value]].push({ price: obj.price });
      return acc;
    }, {});
  }

  const groupedByCategory = groupBy(transactions, "category");

  for (const category in groupedByCategory) {
    const totalSpent = groupedByCategory[category].reduce((acc, obj) => {
      return acc + obj.price;
    }, 0);

    results.push({ category: category, totalSpent: totalSpent });
  }

  return results;
}

module.exports = calculateTotalSpentByCategory;
