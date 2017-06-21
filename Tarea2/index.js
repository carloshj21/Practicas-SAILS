const readline = require('readline');
var fs = require('fs');
var colors = require('colors');
var eventos = ['Cumpleanos // 21-08-2017 // 14:35', 'Examen // 20-10-2017 // 12:00', 'Proyecto // 21-06-2017 // 23:01'];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Functions
function Ver() {
  var x = 1;
  console.log('-------------------------------------------\n'.cyan);
  for (date in eventos)
  {
    console.log(x + ' ' + eventos[date]);
    x++;
  }
  console.log("\n\n*Estos son todos sus Eventos programados*\n\n".cyan);
  setTimeout(() => {
    console.log('¿Qué desea hacer?: \n 1) Ver eventos \n 2) Añadir evento \n 3) Eliminar evento \n 4) Ayuda \n 5) Salir \n'.green);
  },500);
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
        eventos.push(d);
        console.log("\nEvento Agregado :D".cyan);
        setTimeout(() => {
          console.log('\n¿Qué desea hacer?: \n 1) Ver eventos \n 2) Añadir evento \n 3) Eliminar evento \n 4) Ayuda \n 5) Salir \n'.green);
        },1000);
      });
    });
  });
}
function Eliminar() {
  var x = 1;
  console.log('-------------------------------------------\n');
  for (date in eventos)
  {
    console.log(x + ' ' + eventos[date]);
    x++;
  }
  rl.question('\nTeclee el número del evento que desea eliminar\n'.red, (ind) => {
    indice = ind-1;
    borr = eventos.splice(indice,1);
    var elievent = eventos;
    eventos = elievent;
    console.log("\nEvento eliminado!!".red);
    setTimeout(() => {
      console.log('\n¿Qué desea hacer?: \n 1) Ver eventos \n 2) Añadir evento \n 3) Eliminar evento \n 4) Ayuda \n 5) Salir \n'.green);
    },1000);
  });
}
function Ayuda() {
  var help = fs.readFileSync('Ayuda.txt').toString();
  console.log('\n--------------------------------------------------------------------------------'.yellow);
  console.log(help.yellow);
  console.log('\n--------------------------------------------------------------------------------'.yellow);
  console.log('\n');
  setTimeout(() => {
    console.log('\n¿Qué desea hacer?: \n 1) Ver eventos \n 2) Añadir evento \n 3) Eliminar evento \n 4) Ayuda \n 5) Salir \n'.green);
  },5000);
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
      Ayuda();
    }
  	if(line === '5'){
  		process.exit(0);
  	}
  });
}

//Process
console.log('\n BIENVENIDO A SU AGENDA :D,  ¿Qué desea hacer?: \n\n 1) Ver eventos \n 2) Añadir evento \n 3) Eliminar evento \n 4) Ayuda \n 5) Salir \n'.green);
Inicio();
