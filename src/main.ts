import { Teatro } from './teatro';
import readline from 'readline-promise';

async function main() {

    // inicialización de readline
    const rlp = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false //ponemos true si  queremos que aparezca otro nº
    });
  const teatro = new Teatro();
  let opcion: string;

// creamos un bucle con DO WHILE , queremos que al menos salga 1 vez
do {
  // console.clear();
  console.log('TEATRO LA BOMBILLA DE DON BLAS');
  console.log('-----------------------------------');
  console.log("1. Ver la programación actual");
  console.log("2. Mostrar todas las localidades");
  console.log("3. Mostrar localidades ocupadas");
  console.log("4. Vender localidad");
  console.log("5. Cancelar localidad");
  console.log("6. Consultar localidad");
  console.log("7. Calcular recaudacion");
  console.log("8. Terminar programa");

   opcion = await rlp.questionAsync(
    '¿Qué opción deseas?\n');
  // console.log(opcion);

  if(opcion === "1") {
    console.clear();
    teatro.verProgramacionActual();
    await rlp.questionAsync('');
  }
  else if(opcion === "2") {
    console.log('Opción 2');    
  }
  else if(opcion === "4"){
    console.log('Opción 4');
  }
  else if(opcion === "5"){
    console.log('Opción 5');
  }
  else if(opcion === "6"){
    console.log('Opción 6');
  }
  else if(opcion === "7"){
    console.log('Opción 7');
  }
  else if(opcion === "8"){
    console.log('Opción 8');
  }
// el bloque de código de else, solamente se ejecuta cuando todos los anteriores else if no se cumplen, ni tampoco el primer IF
  else {
    console.log('Opción inválida');
  }
} while(opcion !== '8' );

// finalización readline
  rlp.close();
}

main();
