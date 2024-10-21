"use strict"

function modificator(text, option){
    let words = "";
    let character = '';
    switch(option){
        case 1:
            text = text.toUpperCase();
        break;
        case 2:
            text = text.toLowerCase();
        break;
        case 3:
            words = text.split(" ");
            for(let i=0; i < words.length; i++){
                words[i] = words[i].toLowerCase();
                character = words[i].charAt(0);
                words[i] = character.toUpperCase() + words[i].substring(1);
            }
            text = words.join(" ");
        break;
        case 4:
            words = text.split(" ");
            for(let i=0; i < words.length; i++){
                words[i].toLowerCase();
                character = words[i].charAt((words[i].length)-1);
                words[i] = words[i].substring(0, (words[i].length - 1)) + character.toUpperCase();
            }
            text = words.join(" ");
        break;
        case 5:
            words = text.split(" ");
            for(let i=0; i < words.length; i++){
                words[i] = words[i].toUpperCase();
                character = words[i].charAt(0);
                words[i] = character.toLocaleLowerCase() + words[i].substring(1);
            }
            text = words.join(" ");
        break;
        case 6:
            words = text.split(" ");
            for(let i=0; i < words.length; i++){
                words[i].toUpperCase();
                character = words[i].charAt((words[i].length)-1);
                words[i] = words[i].substring(0, (words[i].length - 1)) + character.toLowerCase();
            }
            text = words.join(" ");
        break;
        case 7:
        case 10:
            text = text.toLowerCase();
            while(text.includes('a') || text.includes('e') || text.includes('i') || text.includes('o') || text.includes('u') ){
                text = text.replace("a", "A");
                text = text.replace("e", "E");
                text = text.replace("i", "I");
                text = text.replace("o", "O");
                text = text.replace("u", "U");
            }
        break;
        case 8:
        case 9:
            text = text.toUpperCase();
            while(text.includes('A') || text.includes('E') || text.includes('I') || text.includes('O') || text.includes('U') ){
                text = text.replace("A", "a");
                text = text.replace("E", "e");
                text = text.replace("I", "i");
                text = text.replace("O", "o");
                text = text.replace("U", "u");  
            }
        break;
    }
    return text;
}

function random(min, max){
     return Math.floor((Math.random() * (max - min + 1)) + min);
}

async function getData() {
    const url = `https://rickandmortyapi.com/api/character/${random(1, 826)}`;
    const options = {
      method: 'GET',
    };
    
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }





