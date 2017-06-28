//Tarea 3 - Hernández Juárez Carlos

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
console.log('\n¿Quiere un pastel?:  S/N\n'.green);
rl.on('line', (line) =>{
  if(line == 'S' || line == 's')
  {
    new Promise((resolve, reject) => {
      rl.question('\n¿Nombre del Pastel?:\n'.yellow, (nombre) => {
        a = nombre;
        return resolve (a);
      });
    }).then((a) =>{
    return  new Promise((resolve, reject) => {
        return rl.question('\n¿Sabor del pastel?\n'.yellow, (sabor) => {
          a = a;
          b = sabor;
          return resolve([a, b]);
        });
    });
    }).then(([a,b]) => {
    return  new Promise((resolve, reject) => {
        return rl.question('\n¿Color del pastel?\n'.yellow, (color) => {
          a = a;
          b = b;
          c = color;
          return resolve([a, b, c]);
        });
    });
    }).then(([a, b, c]) =>{
    return  new Promise((resolve, reject) => {
      return rl.question('\n¿Tamanio del pastel?\n'.yellow, (tamanio) => {
        a = a;
        b = b;
        c = c;
        d = tamanio;
        return resolve([a, b, c, d]);
      });
    });
    }).then(([a, b, c, d]) =>{
      let pas = new Pastel(a,b,c,d);
      arre.push(pas);
      console.log('\n');
    }).then(() =>{
        console.log('\n¿Quiere otro pastel?:  S/N\n'.green);
    }).catch((err) => {
        console.log(err);
      });
  }
  if(line == 'N' || line == 'n')
  {
    var l = arre.length;
    console.log('\nOrden en proceso...\n'.cyan);
    new Promise((resolve, reject) => {
      if(l%2 == 0 && l!=0) {
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
      if(l%3 == 0 && l!=0) {
        setTimeout(() => {
          console.log("\nOrden no aceptada. Orden es múltiplo de 3!!!\n\n".red);
        },2000);
      }
      if(l%2 !=0 && l%3 != 0 && l!=0) {
        console.log('\n---------------------------------------------------------\n\nAquí tiene sus pasteles!!\n'.cyan);
        setTimeout(() => {
          for (ele in arre)
          {
            console.log(arre[ele]);
            console.log('\n\n');
          }
        },500);
      }
      if(l == 0) {
        setTimeout(() => {
          console.log("\nNo ha hecho pedido alguno!!\n\n".red);
        },2000);
      }
      return resolve ("Ya no quiere pasteles");
    }).then(() =>{
      setTimeout(() => {
        console.log('Vuelva pronto!! :D'.magenta);
      },2000);
    }).then(() =>{
      setTimeout(() => {
        process.exit(0);
      },4000);
    }).catch((err) => {
        console.log(err);
      });
  }
});
