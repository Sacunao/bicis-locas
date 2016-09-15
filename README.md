## Loc@s por las bicis
1. Descarga los archivos en la sección de Descarga, descomprime y colócalos en tu carpeta llamada **bicis-locas**   
2. En la consola posiciónate en la carpeta **bicis-locas** e inicializa un repositorio en dicha carpeta
3. Crea un repositorio que se llame **bicis-locas** en GITHUB, haz tu primer commit y sube los archivos al repositorio. 
4. Abre el archivo **js/main.js** y completa la función **validateForm**, se deben hacer las siguientes validaciones en los campos:
⋅⋅* Todos los campos son obligatorios, excepto los dos últimos. 
Para validar los elementos obligatorios se uso la siguiente condicion: ( valor == null || valor.length == 0 || /^\s+$/.test(valor).

..* Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
..* Para los campos nombre y apellido la primera letra debe ser mayúscula

..* Validar que el campo email tenga un formato válido. Ej: name@domain.com
Para validar los correos se aumento lo siguiente en la condicion ya cread: !/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/.test(valorTres)).

..* El campo password debe tener al menos 6 caracteres
..* El campo password no puede ser igual a "password" ó "123456" ó "098754"
Se uso la siguiente condicion (valorCuatro == null || valorCuatro.length == 0 || valorCuatro.length <= 6 || valorCuatro == "123456" || valorCuatro == "98754" || valorCuatro == "password")

..* El valor seleccionado de bicis, debe ser una de las opciones presentadas
4. Si algún campo presenta error debe informarse al usuario por medio de un alert.
