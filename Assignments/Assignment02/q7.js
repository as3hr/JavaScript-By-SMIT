function retrievesObj(obj) {
    return obj;
  }
  
  const retrieves = retrievesObj(JSON.parse(localStorage.getItem('Obj')));
  console.log(retrieves);