cap.use(function(window,$,cap){
	cap.conf.uploadfile = {};
	cap.conf.uploadfile.server= 'subir.php';

	// Busca Inputs de file
	$("[cap-type='uploadfile']").change(seleccionado);
	function seleccionado(){
		var ninput = $(this).attr('cap-finish');
		var archivos = this;//Damos el valor del input tipo file
		var archivo = archivos.files; //Obtenemos el valor del input (los arcchivos) en modo de arreglo

		//El objeto FormData nos permite crear un formulario pasandole clave/valor para poder enviarlo, este tipo de objeto ya tiene la propiedad multipart/form-data para poder subir archivos
		var data = new FormData();

		//Como no sabemos cuantos archivos subira el usuario, iteramos la variable y al
		//objeto de FormData con el metodo "append" le pasamos calve/valor, usamos el indice "i" para
		//que no se repita, si no lo usamos solo tendra el valor de la ultima iteracion
		for(i=0; i<archivo.length; i++){
			data.append('archivo'+i,archivo[i]);
		}

		$.ajax({
			url: cap.conf.uploadfile.server, //Url a donde la enviaremos
			type:'POST', //Metodo que usaremos
			contentType:false, //Debe estar en false para que pase el objeto sin procesar
			data:data, //Le pasamos el objeto que creamos con los archivos
			processData:false, //Debe estar en false para que JQuery no procese los datos a enviar
			cache:false //Para que el formulario no guarde cache
		}).done(function(result){
			var fn = eval(ninput);
			fn(result);
		});
	}
});
