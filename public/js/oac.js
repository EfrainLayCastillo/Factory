function compilar(){
  var content = document.getElementById('content').value;
  var cortes_Grande = content.split("\n");
  var caja_grande = [];
  var cortes = content.split(" ");
  var buscador = [];

//lineas - Rows || en un arreglo
  for (var z = 0; z < cortes_Grande.length; z++) {
    if (/\S/.test(cortes_Grande[z])) {
    caja_grande.push($.trim(cortes_Grande[z]));
      }
  }
  console.log("contenido de line: " + caja_grande);
  // LLENAR EL ARREGLO CON EL CONTENIDO DEL TEXTAREA
  for (var i = 0; i < cortes.length; i++) {
    if (/\S/.test(cortes[i])) {
    buscador.push($.trim(cortes[i]));
      }
  }




  console.log("esto es el buscador: " + buscador);

// -----------------------------------------------------------------------------------------------------//
  var titulo = document.getElementById('titulo').value;
  var resultadoencontrado = [];
    var movimiento = [
      ["ADD", "0"],
      ["SUB", "1"],
      ["AND", "2"],
      ["OR", "3"],
      ["SR", "4"],
      ["SL", "5"],
      ["SLT", "6"],
      ["CMP", "7"],
      ["SB", "8"],
      ["LB", "9"],
      ["LI", "A"],
      ["LUI", "B"],
      ["JMP", "C"],
      ["BRA", "D"],
      ["JR", "E"],
      ["SPC", "F"],
      ["X", "0"],
      ["1", "1"],
      ["2", "2"],
      ["3", "3"],
      ["4", "4"],
      ["5", "5"],
      ["6", "6"],
      ["7","7"],
      ["8", "8"],
      ["9", "9"],
      ["10", "A"],
      ["11", "B"],
      ["12", "C"],
      ["13", "D"],
      ["14", "E"],
      ["15", "F"]
    ];
  var registro = [
    ["R0", "0"],
    ["R1", "1"],
    ["R2", "2"],
    ["R3", "3"],
    ["R4", "4"],
    ["R5", "5"],
    ["R6", "6"],
    ["R7", "7"],
    ["R8", "8"],
    ["R9", "9"],
    ["R10", "A"],
    ["R11", "B"],
    ["R12", "C"],
    ["R13", "D"],
    ["R14", "E"],
    ["R15", "F"],
    ["X", "0"],
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["4", "4"],
    ["5", "5"],
    ["6", "6"],
    ["7","7"],
    ["8", "8"],
    ["9", "9"],
    ["10", "A"],
    ["11", "B"],
    ["12", "C"],
    ["13", "D"],
    ["14", "E"],
    ["15", "F"]
  ];

var q = "\n";
var sumando = 0;
var buscadorcount = 0;
  //METODO DE COMPRACION ENTRE ARREGLOS
  for (var f = 0; f < buscador.length; f++) {


    for (var r = 0; r < movimiento.length; r++) {

        if ((buscador[f] === movimiento[r][0]) || (buscador[f] === registro[r][0]) ) {
          resultadoencontrado[f] = movimiento[r][1];
          //console.log("Se encontro comparaciones con: " + resultadoencontrado[f]);
        }else if((buscador[f] !== movimiento[r][1]) || (buscador[f] !== registro[r][1])){
          resultadoencontrado[sumando] = q ;
          console.log("NO SE ENCONTRO COMPARACION");
          sumando++;
        }
      }


    }
  /*var local = [];
    for (var l = 0; l < resultadoencontrado.length; l++) {
      if ((resultadoencontrado[l] !== movimiento)) {
        resultadoencontrado[l] ='\n';
        console.log("Cambios: " + resultadoencontrado[l]);
        local[l] = resultadoencontrado[l];
      }else {
        console.log("no entro");
      }
    }*/
  //console.log("Resultado encontrado: " + resultadoencontrado);
//  console.log("String: " + String(resultadoencontrado));
  //console.log("LOCAL: " + local);

  document.getElementById('result').innerHTML = "v2.0 raw" +"</br>" + resultadoencontrado.join("");
  /*for (var p = 0; p < buscador.length; p++) {
    if (buscador[p] === ";") {
      document.getElementById('result').innerHTML = resultadoencontrado.join("\n");
    }
  }*/


    //console.log("Arreglo cuenta con: " + resultadoencontrado.length + "de largo");



  document.getElementById('programa').innerHTML = titulo;
//Impresion de archivo
  var blob = new Blob(resultadoencontrado, {type: "text/plain;charset=utf-8"});
  saveAs(blob, titulo + ".ex");
  // Ingresar El "\n" en el array para poder separar
}
