let keyboard = new Map()

keyboard.set("2",["a","b","c"]);
keyboard.set("3",["d","e","f"]);
keyboard.set("4",["g","h","i"]);
keyboard.set("5",["j","k","l"]);
keyboard.set("6",["m","n","o"]);
keyboard.set("7",["p","q","r","s"]);
keyboard.set("8",["t","u","v"]);
keyboard.set("9",["w","x","y","z"]);

const input = "9999";


function getSons(letter, indx) {
    let letters =  keyboard.get(letter);
    if (!letters) return []
    if(indx == input.length-1)
        return letters
    let tmpArray = []
        letters.forEach(element => {
        let sons = getSons(input.charAt(indx+1),indx+1);
        sons.forEach(element2 => {
            tmpArray.push(element+element2);
        });
    });

    return tmpArray;
}

console.log(getSons(input.charAt(0),0));