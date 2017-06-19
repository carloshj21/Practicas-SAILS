const readline = require('readline');
var fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Ver() {
  var eventos = fs.readFileSync('Eventos.txt').toString().split('\n');
  var x = 1;
  console.log('---------------------------\n');
  for (date in eventos)
  {
    console.log(x + ' ' + eventos[date]);
    x++;
  }
  console.log("\n\n*Estos son todos sus Eventos programados*\n\n");
}
function Anadir() {
  rl.question('\n¿Nombre del Evento?:\n', (nombre) => {
    console.log("Nooooooo :(");
  });
}
function Eliminar() {
  var eventos = fs.readFileSync('Eventos.txt').toString().split('\n');
  var x = 1;
  console.log('---------------------------\n');
  for (date in eventos)
  {
    console.log(x + ' ' + eventos[date]);
    x++;
  }
  console.log("\n*Estos son todos sus Eventos*\n\n");
  console.log("Teclee el número del evento que desea eliminar:");
  //eventos.splice(0,1);
  /*for (date in eventos)
  {
    console.log(eventos[date]);
  }*/
  console.log("\nEvento eliminado");
}
function Inicio() {
  rl.on('line', (line) =>{
    if(line === '1'){
      Ver();
    }
    if(line === '2'){
      Anadir();
    }
    if(line === '3'){
      Eliminar();
    }
  	if(line === '4'){
  		process.exit(0);
  	}
  console.log('\n BIENVENIDO A SU AGENDA :D,  ¿Qué desea hacer?: \n 1) Ver eventos \n 2) Añadir evento \n 3) Eliminar evento \n 4) Salir \n');
  });
}

console.log('\n BIENVENIDO A SU AGENDA :D,  ¿Qué desea hacer?: \n 1) Ver eventos \n 2) Añadir evento \n 3) Eliminar evento \n 4) Salir \n');
Inicio();
