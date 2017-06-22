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
}

new Promise((resolve, reject) => {
  console.log('\n¿Quiere un pastel?:  S/N\n');
  rl.on('line', (line) =>{
    if(line == 'S' || line == 's')
    {
      rl.question('\n¿Nombre del Pastel?:\n', (nombre) => {
        a = nombre;
        rl.question('\n¿Sabor del pastel?\n', (sabor) => {
          b = sabor;
          rl.question('\n¿Color del pastel?\n', (color) => {
            c = color;
            rl.question('\n¿Tamanio del pastel?\n', (tamanio) => {
              d = tamanio;
              e = a + ' // ' + b + ' // ' + c + ' // ' + d;
              console.log('\n' + e);
              console.log("\nEvento Agregado :D");
              setTimeout(() => {
                console.log('\n¿Quiere otro pastel?:  S/N\n');
              },1000);
            });
          });
        });
      });
    }
    if(line == 'N' || line == 'n')
    {
      console.log("No :c");
    }
    return resolve(line);
  });
})
.catch((err) => {
  console.log(err);
});
