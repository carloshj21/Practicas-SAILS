const readline = require('readline');
var colors = require('colors');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var arre = [];
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
  console.log('\n¿Quiere un pastel?:  S/N\n'.yellow);
  rl.on('line', (line) =>{
    if(line == 'S' || line == 's')
    {
      rl.question('\n¿Nombre del Pastel?:\n'.yellow, (nombre) => {
        a = nombre;
        rl.question('\n¿Sabor del pastel?\n'.yellow, (sabor) => {
          b = sabor;
          rl.question('\n¿Color del pastel?\n'.yellow, (color) => {
            c = color;
            rl.question('\n¿Tamanio del pastel?\n'.yellow, (tamanio) => {
              d = tamanio;
              let pas = new Pastel(a,b,c,d);
              //console.log(pas);
              //console.log('\n\n\n');
              arre.push(pas);
              //console.log('\n\n\n');
              //console.log(arre.length);
              //console.log('\n\n\n');
              /*for (ele in arre)
              {
                console.log(arre[ele]);
                console.log('\n');
              }
              console.log('\n\n\n');*/
              console.log("\n\nPastel Horneado :P\n".cyan);
              setTimeout(() => {
                console.log('\n¿Quiere otro pastel?:  S/N\n'.yellow);
              },1000);
            });
          });
        });
      });
    }
    if(line == 'N' || line == 'n')
    {
      console.log(arre.length);
      console.log('\n\n\n');
      for (ele in arre)
      {
        console.log(arre[ele]);
        console.log('\n');
      }
      console.log('\n\n\n');
      setTimeout(() => {
        process.exit(0);
        //console.log('\n¿Quiere otro pastel?:  S/N\n'.yellow);
      },2000);
    }
    //return resolve(line);
  });
})
.catch((err) => {
  console.log(err);
});
