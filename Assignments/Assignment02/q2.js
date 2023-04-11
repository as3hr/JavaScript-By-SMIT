function searchArray(array, value) {
    if (array.length === 0) {
      return false;
    } else if (array[0] === value) {
      return true;
    } else {
      return searchArray(array.slice(1), value);
    }
  }
  
  let array = [1, 2, 3, 4, 5];
  console.log(searchArray(array, 3));
  console.log(searchArray(array, 6));
  