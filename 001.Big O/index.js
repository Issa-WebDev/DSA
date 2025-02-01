const groceries = ["milk", "bread", "eggs", "flour", "choose", "sugar"];

// O(n)
const searchForItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Found ${item}`);
    }
  }

  for (let j = 0; j < groceries.length; j++) {
    if (groceries[j] === item) {
      console.log(`Found ${item}`);
    }
  }

  //	n + n = 2n --> O(2n)
  //	Drop the constant so it becomes O(n)
};

searchForItem("eggs");
