const readline = require('readline');
var fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Ver(){
  var eventos = fs.readFileSync('Eventos.txt').toString().split('\n');
  for (date in eventos)
  {
    console.log(eventos[date]);
  }
  /*console.log(eventos);
  eventos.splice(2,1);
  console.log(eventos);
  console.log('\n\n');
  for (date in eventos)
  {
    console.log(eventos[date]);
  }*/
  console.log("\n*Estos son todos sus Eventos*\n\n");
  //process.exit(0);
  /*fs.readFile('Eventos.txt', function(error, content){
    console.log(content.toString());
    console.log("\n*Estos son todos sus Eventos*\n\n")
  });*/
}
//function Anadir{}

//Ver();

function Inicio() {
  console.log('\n BIENVENIDO A SU AGENDA :D,  ¿Qué desea hacer?: \n 1) Ver eventos \n 2) Añadir evento \n 3) Eliminar evento \n 4) Salir \n');
  rl.on('line', (line) =>{
    if(line === '1'){
      Ver(/*Inicio()*/);
    }
    if(line === '2'){
      Anadir();
    }
    if(line === '3'){
      console.log("Eliminar evento?");
    }
  	if(line === '4'){
  		process.exit(0);
  	}
    rl.pause();
    //Inicio();
    //rl.close();
  });
}

Inicio();


var fechas = [];
/*rl.question('\n¿Nombre del Evento?:\n', (nombre) => {
  fechas.push(nombre);
  fechas.push('.........');
  fechas.push(':c');
  console.log('\n');
  for (date in fechas)
  {
    console.log(eventos[date]);
  }
  console.log('\n');
  eventos.splice(2,1);
  for (date in eventos)
  {
    console.log(eventos[date]);
  }
  process.exit(0);
});*/
