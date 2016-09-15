function validateForm(){
	/* validar campo obligatorio en nombre, apellido, correo y contraseña */
    var aviso = alert("Por favor llena los campos obigatorios: Nombre, apellido, correo, contraseña y bicicleta");
    
    var valor = document.getElementById("name").value;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
        return aviso;
    }
    var valorDos = document.getElementById("lastname").value;
    if( valorDos == null || valorDos.length == 0 || /^\s+$/.test(valorDos) ) {
        return aviso;
    }
    var valorTres = document.getElementById("input-email").value;
    if( valorTres == null || valorTres.length == 0 || /^\s+$/.test(valorTres) ) {
       return aviso;
    }
    var valorCuatro = document.getElementById("input-password").value;
    if( valorCuatro == null || valorCuatro.length == 0 || /^\s+$/.test(valorCuatro) ) {
        return aviso;
    }
    var valorCinco = document.getElementById("input-social").value;
    if( valorCinco == null || valorCinco .length == 0 || /^\s+$/.test(valorCinco ) ) {
        return aviso;
    }
    
}