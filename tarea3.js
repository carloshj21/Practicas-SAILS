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
class Adicional{
	constructor(nombre = 'Curso', sabor = 'imposible', color = 'rojo sangre', tamanio = 'muy grande'){
		this.nombre = nombre;
		this.sabor = sabor;
    this.color = color;
    this.tamanio = tamanio;
	}
}
//Process
new Promise((resolve, reject) => {
  console.log('\n¿Quiere un pastel?:  S/N\n'.green);
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
              arre.push(pas);
              console.log('\n');
              setTimeout(() => {
                console.log('\n¿Quiere otro pastel?:  S/N\n'.green);
              },1000);
            });
          });
        });
      });
    }
    if(line == 'N' || line == 'n')
    {
      var l = arre.length;
      console.log('\nOrden en proceso...\n'.cyan);
      if(l%2 == 0) {
        var otro = new Adicional();
        arre.push(otro);
        console.log('\n---------------------------------------------------------\n\nAquí tiene sus pasteles, más uno de regalo!!\n'.cyan);
        setTimeout(() => {
          for (ele in arre)
          {
            console.log(arre[ele]);
            console.log('\n\n');
          }
        },500);
      }
      if(l%3 == 0) {
        setTimeout(() => {
          console.log("\nOrden no aceptada. Orden es múltiplo de 3!!!\n\n".red);
        },2000);
      }
      if(l%2 !=0 && l%3 != 0) {
        console.log('\n---------------------------------------------------------\n\nAquí tiene sus pasteles!!\n'.cyan);
        setTimeout(() => {
          for (ele in arre)
          {
            console.log(arre[ele]);
            console.log('\n\n');
          }
        },500);
      }
      setTimeout(() => {
        console.log('Vuelva pronto!! :D'.magenta);
      },2000);
      setTimeout(() => {
        process.exit(0);
      },4000);
    }
  });
})
.catch((err) => {
  console.log(err);
});
