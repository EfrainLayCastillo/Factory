function compilar(){
  var titulo = document.getElementById('titulo').value;
  var content = document.getElementById('content').value;
  var movimiento = [["ADD", "0"], ["AND", "2"],["SUB", "1"], ["OR", "3"], ["SR", "4"],
    ["SL", "5"], ["SLT", "6"], ["CMP", "7"], ["SB", "8"], ["LB", "9"],
    ["LI", "A"], ["LUI", "B"], ["JMP", "C"],["BRA", "D"], ["JR", "E"],
    ["SPC", "F"]
  ];
  var registro = [
    ["R0", "0"],
    ["R1", "1"],["R2", "2"],["R3", "3"], ["R4", "4"],["R5", "5"], ["R6", "6"], ["R7", "7"],
    ["R8", "8"], ["R9", "9"],["R10", "A"], ["R11", "B"], ["R12", "C"], ["R13", "D"], ["R14", "E"],["R15", "F"]
  ];

  var cortes = content.split(" ");
  var buscador = [];
  // LLENAR EL ARREGLO CON EL CONTENIDO DEL TEXTAREA
  for (var i = 0; i < cortes.length; i++) {
    if (/\S/.test(cortes[i])) {
    buscador.push($.trim(cortes[i]));
      }
  }
  //METODO DE COMPRACION ENTRE ARREGLOS
  var resultadoencontrado = [];
  for (var i = 0; i < movimiento.length; i++) {
    if (movimiento[i][0] === buscador[i]) {
      resultadoencontrado[i] = movimiento[i][0];
      //document.getElementById('result').innerHTML = movimiento[i][0] + "</br>";
      console.log(String("Resultado Encontrado "+resultadoencontrado[i]));
    }else {
      console.log("No se encontro comparaciones");
    }
  }

  document.getElementById('result').innerHTML = resultadoencontrado;
  //console.log(String(movimiento[3][0]) + " DEBUG");


  /*for (var i = 0; i < movimiento.length; i++) {
    if (cortes[i] == movimiento[i]) {
      var pieces = movimiento[i, 0]
      document.getElementById('result').innerHTML = pieces;
    }
  }*/



  document.getElementById('programa').innerHTML = titulo;
}
