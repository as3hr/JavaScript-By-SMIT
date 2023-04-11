// 
function changebgc(id, colour) 
  {
    id.style.backgroundColor = colour;
    id.style.width = "200px";
    id.style.height = "200px";
  }
  
  let newID = document.getElementById("my_new_id");
  changebgc(newID, "red");