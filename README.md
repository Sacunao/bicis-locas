## Loc@s por las bicis
1. Descarga los archivos en la sección de Descarga, descomprime y colócalos en tu carpeta llamada **bicis-locas**   
2. En la consola posiciónate en la carpeta **bicis-locas** e inicializa un repositorio en dicha carpeta
3. Crea un repositorio que se llame **bicis-locas** en GITHUB, haz tu primer commit y sube los archivos al repositorio. 
4. Abre el archivo **js/main.js** y completa la función **validateForm**, se deben hacer las siguientes validaciones en los campos:

Imagen antes:
![Imagen Antes](http://4.1m.yt/-uKxSbM.png "Imagen")

Solicitado:
..* Todos los campos son obligatorios, excepto los dos últimos.
..* Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
..* Para los campos nombre y apellido la primera letra debe ser mayúscula
..* Validar que el campo email tenga un formato válido. Ej: name@domain.com
..* El campo password debe tener al menos 6 caracteres
..* El campo password no puede ser igual a "password" ó "123456" ó "098754"
..* El valor seleccionado de bicis, debe ser una de las opciones presentadas

###SOLUCION

Se creo un script que contenga las siguiente condiciones que permitan validar lo solicitado:

1. Todos los campos son obligatorios, excepto los dos últimos. 
Para validar los elementos obligatorios se uso la siguiente condicion: (variable == null || variable.length == 0 || /^\s+$/.test(variable).
Esto evita que se entregue campos vacios.
![Imagen Uno](http://1.1m.yt/sFE5vmT.png "Imagen")

2. Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
Para que solo se puedan ingresar letras de a-z y no valores númericos utilizamos la siguiente condición: (/[0-9]/.test(variable)).
![Imagen Uno](http://2.1m.yt/BS8F8r.png "Imagen")

3. Para los campos nombre y apellido la primera letra debe ser mayúscula
Para validar que los elementos ingresados permitan caracateres de la A-Z utilizammos la siguiente condicion:(/^[a-z]/.test(apellido.charAt(0))).
![Imagen Uno](http://3.1m.yt/CqQ4W_E.png "Imagen")

4. Validar que el campo email tenga un formato válido. Ej: name@domain.com
Para validar los correos tengan un formato establecido se aumento la siguiente condicion: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(variable)).
Este conjunto de caracteres permite que el formato del correo que se ingrese sea de un valor válido.
![Imagen Uno](http://4.1m.yt/7jFbBRO.png "Imagen")

5. El campo password debe tener al menos 6 caracteres y no puede ser igual a "password" ó "123456" ó "098754".
Se uso la siguiente condicion (variable == null || variable .length == 0 || variable .length <= 6 || variable  == "123456" || variable  == "98754" || variable  == "password")
![Imagen Uno](http://3.1m.yt/9EN4IDn.png "Imagen")

6. El valor seleccionado de bicis, debe ser una de las opciones presentadas
Se uso la siguiente condicion: (variable == 0). Lo que obligaba a presentar una opción diferente al vacio y que sugiere al usuario completar el campo.
![Imagen Uno](http://4.1m.yt/2E4owpO.png "Imagen")

7. Si algún campo presenta error debe informarse al usuario por medio de un alert.
Se uso la condicion el inicio: (nombre.length == 0 && apellido == 0 && correo == 0 && contraseña == 0). Al poner los campos que deben ser llenados correctamente, sino son llenados te saldra un alert de advertencia.
