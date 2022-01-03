//Variables identificadas por id para guardar la info
var lista = document.getElementById("lista");
var	tareaLeer = document.getElementById("tareaAdd");
var	IntegranteLeer = document.getElementById("integranteAdd");
var	registroLeer = document.getElementById("registroAdd");
var	entregaLeer = document.getElementById("entregaAdd");
var	StatusLeer = document.getElementById("statusAdd");
var	agregarNuevaTarea = document.getElementById("buttonAdd");

function agregarTarea(){
	var tarea = tareaLeer.value;
	var	integrante= IntegranteLeer.value;
	var	registro= registroLeer.value;
	var	entrega= entregaLeer.value;
	var	status= StatusLeer.value;
	var	enlace = document.createElement("TD");
	var contador = 0;
	var	nuevaTarea = document.createElement("TR");
	var	button1 = document.createElement('input'),
		contenido = document.createTextNode(tarea),
		contenido1 = document.createTextNode(integrante),
		contenido2 = document.createTextNode(registro),
		contenido3 = document.createTextNode(entrega),
		contenido4 = document.createTextNode(status);
// creacion del boton para eliminar
	button1.type = 'button'; 
	button1.classList.add("eliminarcont");
	button1.value = 'Borrar';
	//arreglo para contener todos los datos y despues solo recorrerlo
		let contenedorDat = [contenido, contenido1, contenido2,
					contenido3, contenido4, button1];
		// for prara manejar el arreglo de registros
		
		do {
			//crea espacios para agregar los registros
			enlace = document.createElement("TD");
			enlace.appendChild(contenedorDat[contador]);
			//se prepara para dar el salto a la siguiente columna
			nuevaTarea.appendChild(enlace);
			contador += 1;
		} while ( contador < 6);
		// se agrega a la lista
		lista.appendChild(nuevaTarea);
}
	//llamada del boton agregar
agregarNuevaTarea.addEventListener("click", agregarTarea);

//llamada para el boton eliminar de jQuery
$('body').on('click', '.eliminarcont', function() {
	var resultado = window.confirm('Confirmación de eliminación?');
	if (resultado === true) {
		$(this).parents("TR").remove(); 
    	window.alert('Eliminación completa!.');
	} else { 
    	window.alert('Operación cancelada...');
	}
})
