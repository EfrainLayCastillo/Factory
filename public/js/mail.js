
function sendmail(){
//Lee contenido de los difrenetes campos del formulario y los asigna a variables
console.log("Formulario de contacto");
var email = document.getElementById("correo").value;
console.log("Correo de " + email);
//Validación de los campos requeridos (Nombre, Email)

if (email == '' || !validateEmail(email)) {

  console.log("invalido");
} else {
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': '9b080f2ae1c197e44e2a7578ca2ac350-us15', //API Key asiganada
      'message': {
        'from_email': email,
        "from_name": 'registro',
        'to': [
          {
            'email': 'efrainlaycastillo@hotmail.com', //Destinatario del correo
            'name': 'SadBoyz', //Nombre del Remitente
            'type': 'to'
          }
        ],
        'subject': 'Sad Boyz', //Titulo del correo
        'html': '<h3>Nuevo contacto Website Ultra Stereo Panamá</h3><p>Nombre: '
      }
    }
  });
  console.log("Formulario Enviado");

  }

}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);

}
;
