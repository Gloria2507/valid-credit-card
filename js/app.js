// Verifica si el número de tarjeta es válido.
function isValidCard(){
// Almacena sumatoria de los dígitos.
  var sum = 0;
  // Los dígitos obtenidos son separados en un array y el orden es invertido.
  var numberCard = prompt('Escribe el número de tu tarjeta').split('').reverse();

  // Mientras numberCard tenga más o menos de 16 elementos aparece nuevo promtp.
while(numberCard.length < 16 || numberCard.length > 16){
    numberCard = prompt('El número de tu tarjeta debe contener solo 16 dígitos, \n vuelve a escribir el número de tu tarjeta.').split('').reverse();
  }
  // Ciclo que itera por cada elemento del array numberCard.
for(var i = 0; i < numberCard.length; i++){
    // Si el elemento es igual a un string vacio aparece nuevo prompt.
    // Si el elemento es NaN aparece nuevo prompt.
    if(numberCard[i] === ' ' || isNaN(numberCard[i])){
      numberCard = prompt('No coloque espacios vacios o letras, \n vuelve a escribir el número de tu tarjeta. ').split('').reverse();
    }
  }
  // Ciclo que itera por cada elemento del array numberCard.
  for(var j = 0; j < numberCard.length; j++){
    // Convierte (parsea) una cadena y devuelve un entero de la base decimal.
    var valueChar = parseInt(numberCard[j]);
    // Si el índice del elemento es par, adiciona su valor a sum.
    if(j % 2 === 0){
     sum += valueChar;
    }
    // Si el índice del elemento es impar, el elemento se multiplica por 2.
    if(j % 2 !== 0){
      // Si el producto es menor a 9, se adiciona a sum.
      if((valueChar * 2) <= 9 ){
        sum +=(valueChar * 2);
       // Si el producto es mayor a 9, se separan los dígitos del producto y se suman.
      }
      if ((valueChar * 2) > 9){
        // El producto se convierte a string para separar los dígitos.
       var twoDigitis = (valueChar * 2).toString();
       var sumDigitis = parseInt(twoDigitis[0]) + parseInt(twoDigitis[1]);
       sum += sumDigitis;
      }
    }
  }

  // Si el residuo se sum entre 10 es cero, el número de tarjeta es válido.
  // Si el residuo se sum entre 10 no es cero, el número de tarjeta no es válido.
  if(sum % 10 === 0){
    alert("El número de su tarjeta es valido");
  }
  else
  alert("El número de su tarjeta es invalido");
}
