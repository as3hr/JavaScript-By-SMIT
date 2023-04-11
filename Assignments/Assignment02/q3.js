function addPara(text) {
    let paragraph = document.createElement('p');
    let newText = document.textContent(text);
    paragraph.appendChild(newText);
    document.body.appendChild(paragraph);
  }
  
addPara(`Lionel Messi is a football player from Argentina who plays for FC Barcelona. He has won the Ballon D'Or, the annual award given to the best player in the world, 7 times, 2022 FIFA World Cup winner and an Olympic gold medal winner in 2008. He was born in 1987 in Rosario, Argentina's third-biggest city.`);
