const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n BIENVENIDO A SU AGENDA :D,  ¿Qué desea hacer?: \n 1) Ver eventos \n 2) Añadir evento \n 3) Eliminar evento \n 4) Salir \n\n');
rl.on('line', (line) =>{
  if(line === '1'){
    console.log("Está viendo los eventos :p");
  }
  if(line === '2'){
    console.log("Añadir evento?");
  }
  if(line === '3'){
    console.log("Eliminar evento?");
  }
	if(line === '4'){
		process.exit(0);
	}
});
