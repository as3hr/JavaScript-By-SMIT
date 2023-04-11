function saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  const personObj = { eyes: 2, feet: 2, hands: 2, eyeColor: "blue" };
  saveToLocalStorage('Obj', personObj);