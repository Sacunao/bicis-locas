function validateForm(){
	/* validar campo obligatorio en nombre, apellido, correo y contraseña */
    var aviso = alert("Por favor aegúrate de haber llenado los campos obligatorios: \n Nombre, Apellido, Correo, Contraseña y Bicicleta");
    
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
    if( valorCuatro == null || valorCuatro.length == 0) {
        return aviso;
    } if ( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ){
        return alert("Ingresa un correo válido");
    }
    var valorCinco = document.getElementById("input-social").value;
    if( valorCinco == null || valorCinco .length == 0 || /^\s+$/.test(valorCinco ) ) {
        return aviso;
    }
    

    
}