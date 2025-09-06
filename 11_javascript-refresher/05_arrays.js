// 05_arrays.js
// Create an array of your 3 favorite foods.
// Add one more food at the end, then remove the first food.
// Use a for...of loop to print each food.
// Use .map() to create a new array that says: "I like ___" for each food.

const favFoods = ["Shanghai ", "Sisig", "Fried Egg"];
// Add Pancit at the end
favFoods.push("Pancit Hybrid(Kanton/Bihon)");

// Yung Shanghai ko is remove
favFoods.shift();


for (const food of favFoods) {
    console.log(food);
}

const likeFoods = favFoods.map(food=>`I like ${food}`);
console.log(likeFoods);