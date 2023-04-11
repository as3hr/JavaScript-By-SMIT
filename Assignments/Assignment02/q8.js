function saveObjectToLocalStorage(object) {
    Object.keys(object).forEach((key,value) => {
      localStorage.setItem(key, JSON.stringify(object[key]));
    });
  
    const savedObject = {};
    Object.keys(object).forEach((key) => {
      savedObject[key] = JSON.parse(localStorage.getItem(key));
    });
    
    return savedObject;
  }
  
  const myObject = {name: "Muhammad Ashar", email: "asheressani@gmail.com", postcode: "74550", phoneNumber: "+92 3312079579",city: "karachi", country: "Pakistan"};
  const savedObject = saveObjectToLocalStorage(myObject); 
  console.log(savedObject); 