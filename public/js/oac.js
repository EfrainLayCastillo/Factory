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
  var supa = [];
  var tolda;
  var cantidadletraporlinea;

  var eje1 = [];
  var defrag = [];
  var letrasporlinea = [];
      for (var b = 0; b < caja_grande.length; b++) {
        eje1[b] = caja_grande[b];
        defrag = eje1.toString().split(" ");
        letrasporlinea[b] = defrag[b];
      }

  console.log("Array con el contenido del text area " + buscador);
  console.log("letras: " + letrasporlinea);
  //console.log("esto es el supa: " + supa);
  //console.log("Esta es la cantidad de letra por linea: " + cantidadletraporlinea);

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
      ["SPC", "F"]
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
    ["R15", "F"]
  ];

var q = "x";
var sumando = 0;
  //METODO DE COMPRACION ENTRE ARREGLOS
  for (var f = 0; f < buscador.length; f++) {
    for (var r = 0; r < movimiento.length; r++) {

      if ((buscador[f] === movimiento[r][0]) || (buscador[f] === registro[r][0])) {
        resultadoencontrado[f] = movimiento[r][1];
        sumando++;

      }else if ((buscador[f] !== movimiento[r][0]) || (buscador[f] !== registro[r][0])){
        //resultadoencontrado[sumando] = q;
        //sumando++;
      }
    }
    if (typeof(buscador[f]) === undefined){
      buscador[f] = "x";
    }
  }
  console.log("Resultado encontrado: " + resultadoencontrado);
var impresion_separada = [];
var count = 0;
for (var p = 0; p < resultadoencontrado.length; p++) {
    impresion_separada[p] = String(resultadoencontrado[count] + resultadoencontrado[count+1] + resultadoencontrado[count+2] + resultadoencontrado[count+3]);
    //impresion_separada[p] = resultadoencontrado.join("") + "";
    count = count + 1;
  }
  console.log("Caja Grande tiene separado: " + caja_grande.length);
  console.log("Impresion separa: " + impresion_separada);
  document.getElementById('result').innerHTML = "v2.0 raw" +"</br>" + impresion_separada.join("\n");
  /*for (var p = 0; p < buscador.length; p++) {
    if (buscador[p] === ";") {
      document.getElementById('result').innerHTML = resultadoencontrado.join("\n");
    }
  }*/


    //console.log("Arreglo cuenta con: " + resultadoencontrado.length + "de largo");



  document.getElementById('programa').innerHTML = titulo;



//Impresion de archivo
  //var blob = new Blob(impresion_separada, {type: "text/plain;charset=utf-8"});
  //saveAs(blob, titulo + ".txt");
}
