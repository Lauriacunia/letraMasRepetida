/** Letra mas repetida
 * 
 * Crear una funcion que, dado un String como parametro,
 * imprima una frase describiendo la letra que mas se repite y la
 * cantidad de repeticiones, de la forma mas eficiente posible.
 * 
Ejemplo: 

Entrada: "Hola, mi nombre es Ariel, soy una sirena,
        vivo bajo el mar"
Salida: "La letra que mas se repite es la A con 6 repeticiones"

 */


let cadena = "Hola, mi nombre es Ariel, soy una sirena, vivo bajo el mar"

let soloLetrasOrdenadas = cadena.split('')
.map(caracter => caracter.toLocaleUpperCase())
.filter(caracter => caracter != " ")
.filter(caracter => caracter != ",")
.sort()

console.log(soloLetrasOrdenadas)  // hasta aca llegue...

/** 1-¿Se podria crear un objeto donde se listen
 * solo las letras repetidas y cuantas repeticiones de 
 * cada una?
 * Ej: { 
 *      A: 3
 *      J: 2
 *      M: 1
 *      R: 4
 *     }
 * 
 * 2-¿Ideas de como contar caracteres?
 */






// INTENTOS FRUSTRADOS ..

// let analisis = soloLetrasOrdenadas.reduce((acc, curr) => {
//   let contador =0
//   if(soloLetrasOrdenadas.includes(acc)){
//       contador++
//   }
//   return acc.letra = curr
// }, {})

// console.log(analisis)


// let caracteresRepetidos = []
// let ocurrencias = 0

// let letraMasRepetida = (array) => {

//  let repetidos = array.map((caracter) => {
//      if (!caracteresRepetidos.includes(caracter) && array.indexOf(caracter) !== array.lastIndexOf(caracter)) {         
//              caracteresRepetidos.push(caracter);
//       }            
                
//  })

// }

// letraMasRepetida(caracteresMayusculas)
// console.log(caracteresRepetidos)
 //console.log(letraMasRepetida(caracteresMayusculas))
 

//CONTAR CARACTERES REPETIDOS DE UN ARRAY

// const cadena = 'Mama mia'

// let caracteres = cadena.split('');
// console.log(caracteres)

// let caracteresMayusculas = caracteres.map(caracter => caracter.toLocaleUpperCase())

// let ocurrencias= 0;
// let caracteresRepetidos = [];

//  let cantidadDeCaracteresRepetidosTotal = (str) => {
                
//  for (let i=0; i<str.length; i++) {
//        if (!caracteresRepetidos.includes(str[i]) && str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
//                     caracteresRepetidos.push(str[i]);
//                     ocurrencias = ocurrencias+1;
//                 }
//             }
//             return ocurrencias;
//  }

// console.log( caracteresRepetidos ); 
// console.log( cantidadDeCaracteresRepetidosTotal(caracteresMayusculas) );




// caracteresMayusculas.map((caracter, indice)=> {

//    if(repetidos.includes(caracter)){
//       repetidos[indice] = caracter
//    }else 

// })

// console.log(repetidos);


// const cantidadDeCadaLetra = caracteres.reduce((acc, curr) => {
//     let cantidad = 0;

//     if(acc === curr)
//     acc.curr =+ 1

// }, {})

// const cantidadDeCaracteres = caracteres.reduce((acc, curr) => {
//   console.log("acc", acc)
//   console.log("curr", curr)
//    // let cantidadDeRepetidos = 0;

//     // if (acc != curr){
//     //     acc.letra = curr    
//     // } 
//     // console.log(acc)

//     acc.letra = curr

//     return acc

    // for (let index = 0; index < caracteres.length; index++) {
    //     const element = caracteres[index];

    //     if(caracter === element) {
    //         cantidadDeRepetidos++
    //     }      

    // }

    //return `Letra ${caracter}: ${cantidadDeRepetidos}`

// }, {})

// console.log(cantidadDeCaracteres)