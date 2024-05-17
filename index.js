function openModal() {  //funcion de abrir cartel que se inicia al clikear "acerca de"
    var modal = document.getElementById("modal");
    modal.showModal();
}

function closeModal() {  //funcion de cerrar cartel que se inicia al clikear "acerca de"
    var modal = document.getElementById("modal");
    modal.close();
}


function openModal2() {  //funcion de abrir cartel que se inicia al clikear "acerca de"
    var modal = document.getElementById("modal2");
    modal.showModal();
}

function closeModal2() {  //funcion de cerrar cartel que se inicia al clikear "acerca de"
    var modal = document.getElementById("modal2");
    modal.close();
}


function openModal3() {  //funcion de abrir cartel que se inicia al clikear "acerca de"
    var modal = document.getElementById("modal3");
    modal.showModal();
}

function closeModal3() {  //funcion de cerrar cartel que se inicia al clikear "acerca de"
    var modal = document.getElementById("modal3");
    modal.close();
}


function openmodal4(){
    var modal = document.getElementById("modal4");
    modal.showModal();
}
function closemodal4(){
    var modal = document.getElementById("modal4");
    modal.close();
}


function openmodal5(){
    var modal = document.getElementById("modal5");
    modal.showModal();
}
function closemodal5(){
    var modal = document.getElementById("modal5");
    modal.close();
}


document.addEventListener('DOMContentLoaded', function () {
    var botonCambiarFondo = document.getElementById('cambiarFondo');
    var body = document.body;
    var imagenesDeFondo = ['cyber3.png','cyberpunk.png','cyber.png'];
    var indiceActual = 0;
  
    botonCambiarFondo.addEventListener('click', function () {
      indiceActual = (indiceActual + 1) % imagenesDeFondo.length;
      var nuevaImagenDeFondo = imagenesDeFondo[indiceActual];
      body.style.backgroundImage = 'url(' + nuevaImagenDeFondo + ')';
    });
  });

  