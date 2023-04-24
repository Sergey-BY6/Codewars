// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

const include = (arr, item) => arr.filter(el => el === item).length > 0