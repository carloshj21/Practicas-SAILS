const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function cursorVisible (){
  console.log("Hola");
}
rl.prompt(cursorVisible); // Libre uso de entrada
rl.close();
