const readline = require('readline');

var fs = require('fs');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Ver(){
  fs.readFile('Eventos.txt', function(error, content){
    console.log(content.toString());
    console.log("\n*Estos son todos sus Eventos*\n\n")
  });
}

function Añadir(){
  rl.question('\n¿Nombre del Evento?:\n', (nombre) => {
    var nom = nombre;
    console.log(nom);
    process.exit(0);
  });
}

function Inicio() {
  console.log('\n BIENVENIDO A SU AGENDA :D,  ¿Qué desea hacer?: \n 1) Ver eventos \n 2) Añadir evento \n 3) Eliminar evento \n 4) Salir \n');
  rl.on('line', (line) =>{
    if(line === '1'){
      Ver();
      //Inicio();
    }
    if(line === '2'){
      Añadir();
    }
    if(line === '3'){
      console.log("Eliminar evento?");
    }
  	if(line === '4'){
  		process.exit(0);
  	}
    rl.pause();
    //Inicio();
    rl.close();
  });
}

Inicio();
//Añadir();
