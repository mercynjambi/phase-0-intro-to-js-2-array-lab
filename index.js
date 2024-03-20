// Write your solution here

const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
cats.push("Ralph");
}

function destructivelyPrependCat(name){
cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
cats.pop();
}

function destructivelyRemoveFirstCat(){
cats.shift();
}

function appendCat(name){
return cats.concat("Broom");
}

function prependCat(name){
const newCats = [name, ...cats];
return newCats;
}

function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1);
}









