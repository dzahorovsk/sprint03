let phrase1 = concat("space", "English");
let output = phrase1;
console.log(output); // Hello, space!

let phrase2 = concat("ucoder");
output = phrase2();
// a prompt appears. Enter "Spanish" into the prompt

console.log(output); // Hola, ucoder!
console.log(phrase2.count); // 1

output = phrase2();
// a prompt appears. Enter "Italiano" into the prompt

console.log(output); // Ciao, ucoder!

output = phrase2();
// a prompt appears. Enter "French" into the prompt

console.log(output); // Bonjour, ucoder!
console.log(phrase2.count); // 3

let phrase3 = concat("ucoder");
output = phrase3();
// a prompt appears. Enter "English" into the prompt

console.log(output); // Hello, ucoder!
console.log(phrase3.count); // 1
console.log(phrase2.count); // 3

/* Result in Console panel:
Hello, space!
Hola, ucoder!
1
Ciao, ucoder!
Bonjour, ucoder!
3
Hello, ucoder!
1
3
*/



function concat(name, lang) {
    phrase.count = 0;
    if (arguments.length === 2) {
        if (lang.toLowerCase() === 'english') {
            return `Hello, ${name}!`; 
        }
        if (lang.toLowerCase() === 'spanish') {
            return `Hola, ${name}!`;  
        }
        if (lang.toLowerCase() === 'italiano') {
            return `Ciao, ${name}!`;    
        }
        if (lang.toLowerCase() === 'french') {
            return `Bonjour, ${name}!`;      
        }    
    }
    else {
        return phrase;
    }
    function phrase() {
        lang = prompt('Enter languge:', 'Spanish');
        phrase.count++;
        return concat(name, lang);
    }
}    
