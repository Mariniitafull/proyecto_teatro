1. Crear la clase Teatro (de momento, sin constructor) en el archivo teatro.ts. Implementar el método verProgramacionActual, que no recibe parámetros y no retorna nada. Mostrar la información de la obra actual mediante console.log
2. Crear un objeto de la clase Teatro (main.ts) e invocar al método verProgramacionActual desde la opción 1
3. Crear la interfaz Localidad en el archivo modelos/localidad.ts -> propiedades: fila, columna, estaOcupado,...
3. Crear un archivo con nombre src/menu.ts e implementar una función con nombre mostrarMenu (no recibe parámetros, ni tampoco devuelve nada). Dentro de la función, pegamos todos los console.log relacionados con la visualización del menú. Después invocar a la función mostrarMenu desde el archivo ms
4. Implementar en el archivo menu.ts una función con nombre gestionarOpcion (recibe como parámetros: opcion, rlp y teatro; y no devuelve nada). Dentro de la función, pegamos todos el bloque del condicional. Después invocar a la función gestionarOpcion desde el archivo main.ts
5. Crear un array de objetos de tipo Localidad como atributo de la clase Teatro. Inicializar el array en el constructor de la clase con un for. Cada localidad debe tener una fila y una columna única, estaOcupada debe tener el valor false. El resto de valores undefined o null,...
6. Implementar el método mostrarLocalidades en la clase Teatro utilizando un bucle
7. Implementar el método mostrarLocalidadesOcupadas en la clase Teatro. Buscar/filtrar las localidades (método filter) están ocupadas y  después iterar las localidades ocupadas. Si no no hay ninguna localidad ocupada, mostrar mensaje con console.log
8. Crear archivo src/utilidades.ts e implementar la función obtenerTipo. Recibe por parámetro la edad (number) y devuelve el tipo (string): INFANTIL, MENOR, MAYOR, JUBILADO
0 a 12 años: INFANTIL 
13 a 17 años: MENOR
18 a 64 años: MAYOR
65 a 120 años: JUBILADO
Resto de edades: ERROR
9. Invocar a la función obtenerTipo desde el método mostrarLocalidadesOcupadas (archivo teatro.ts) para obtener el tipo a partir de la edad
10. 7. Implementar el método venderLocalidad en la clase Teatro. Preguntar al usuario la fila, columna, nombre, teléfono, edad. Realizar validaciones para cada valor. Finalmente, si todos los datos, se reserva la localidad, buscando la localidad por fila y columna (método find). La localidad debe estar libre. Si está libre, entonces asignar los datos de la persona que reserva y cambiar el valor de la propiedad estaReservado a true. Si no está libre, mostrar un mensaje de error
