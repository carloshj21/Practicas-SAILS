const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Classes
class Pastel{
	constructor(nombre, sabor, color, tamanio){
		this.nombre = nombre;
		this.sabor = sabor;
    this.color = color;
    this.tamanio = tamanio;
	}
	/*ladrar(ladrido = 'Woof'){
		console.log(arguments);
		console.log(this.nombre, '-', ladrido);
	}*/
}

do {
  new Promise((resolve, reject) => {
    rl.question('\n¿Quiere un pastel?:  S/N\n', (decision) => {
      return resolve(decision);
    })
    .then((resolve) =>{
      if(resolve == 'S' || resolve == 's')
      {
        console.log("Si :D");
      }
      if(resolve == 'N' || resolve == 'n')
      {
        console.log("No :c");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  })
}
while (decision != 'N' || decison != 'n');
/*.catch((err) => {
  console.log(err);
});*/
