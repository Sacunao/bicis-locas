function validateForm(){
	
    var valor = document.getElementById("name").value;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
        return alert("Ingresa un nombre");
    } 
    var valorDos = document.getElementById("lastname").value;
    if( valorDos == null || valorDos.length == 0 || /^\s+$/.test(valorDos) ) {
        return alert("Ingresa un apeliido");
    }
    var valorTres = document.getElementById("input-email").value;
    if( valorTres == null || valorTres.length == 0 || !/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/.test(valorTres)) {
       return alert("Ingresa un correo");
    }
    var valorCuatro = document.getElementById("input-password").value;
    if( valorCuatro == null || valorCuatro.length == 0 || valorCuatro.length <= 6 || valorCuatro == "123456" || valorCuatro == "98754" || valorCuatro == "password") {
        return alert("Contraseña no válida");
    }
    var valorCinco = document.getElementById("input-social").value;
    if( valorCinco == null || valorCinco .length == 0 || /^\s+$/.test(valorCinco ) ) {
        return alert("elige una opcion");
    }
}