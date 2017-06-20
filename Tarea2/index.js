const readline = require('readline');
var fs = require('fs');
var colors = require('colors');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Functions
function Ver() {
  var eventos = fs.readFileSync('Eventos.txt').toString().split('\n');
  var x = 1;
  console.log('-------------------------------------------\n'.cyan);
  for (date in eventos)
  {
    console.log(x + ' ' + eventos[date]);
    x++;
  }
  console.log("\n\n*Estos son todos sus Eventos programados*\n\n".cyan);
}
function Anadir() {
  rl.question('\n¿Nombre del Evento?:\n'.cyan, (nombre) => {
    a = nombre;
    rl.question('\n¿Fecha del Evento?:\nIntroducir la fecha con el formato: día-mes-año\n'.cyan, (fecha) => {
      b = fecha;
      rl.question('\n¿Hora del evento?:\nIntroducir la hora en formato de 24 horas\n'.cyan, (hora) => {
        c = hora;
        d = a + ' // ' + b + ' // ' + c;
        console.log('\n' + d);
        fs.appendFileSync('Eventos.txt', "\n" + d);
        console.log("\nEvento Agregado :D".cyan);
      });
    });
  });
  //process.exit(0);
}
function Eliminar() {
  var eventos = fs.readFileSync('Eventos.txt').toString().split('\n');
  var x = 1;
  console.log('-------------------------------------------\n');
  for (date in eventos)
  {
    console.log(x + ' ' + eventos[date]);
    x++;
  }
  //console.log("Teclee el número del evento que desea eliminar:");
  rl.question('\nTeclee el número del evento que desea eliminar\n'.red, (ind) => {
    indice = ind-1;
    eventos.splice(indice,1);
    for (date in eventos)
    {
      fs.writeFileSync('Eventos.txt', eventos[date]);
    }
    console.log("\nEvento eliminado".red);
  });
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
    console.log('¿Qué desea hacer?: \n 1) Ver eventos \n 2) Añadir evento \n 3) Eliminar evento \n 4) Salir \n'.green);
  });
}

//Process
console.log('\n BIENVENIDO A SU AGENDA :D,  ¿Qué desea hacer?: \n 1) Ver eventos \n 2) Añadir evento \n 3) Eliminar evento \n 4) Salir \n'.green);
Inicio();
